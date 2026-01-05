import { RECEIPT_TEMPLATES } from "./receipts.js";
const $ = (s)=>document.querySelector(s);
const el = {
  screenStart: $("#screenStart"), screenGame: $("#screenGame"),
  playerName: $("#playerName"), difficulty: $("#difficulty"), btnStart: $("#btnStart"), highscoreList: $("#highscoreList"),
  btnHome: $("#btnHome"), progressPill: $("#progressPill"), stepPill: $("#stepPill"), timerPill: $("#timerPill"), playerPill: $("#playerPill"),
  receiptText: $("#receiptText"), npcBubble: $("#npcBubble"),
  stepTitle: $("#stepTitle"), stepChoices: $("#stepChoices"), btnPrevStep: $("#btnPrevStep"), btnNextStep: $("#btnNextStep"),
  easyActions: $("#easyActions"), btnConfirmHint: $("#btnConfirmHint"),
  picked1: $("#picked1"), picked2: $("#picked2"), picked3: $("#picked3"), picked4: $("#picked4"),
  scoreText: $("#scoreText"), missText: $("#missText"), holdText: $("#holdText"), penaltyText: $("#penaltyText"),
  modal: $("#modal"), modalTitle: $("#modalTitle"), modalBody: $("#modalBody"), btnModalPrimary: $("#btnModalPrimary"),
};
const PRESETS = {
  easy:   { count: 8,  trapRate: 0.10, mixedTaxRate: 0.05, unknownPurposeRate: 0.10, confirmPenaltyMs: 8000 },
  normal: { count: 10, trapRate: 0.25, mixedTaxRate: 0.10, unknownPurposeRate: 0.25, confirmPenaltyMs: 0 },
  hard:   { count: 15, trapRate: 0.45, mixedTaxRate: 0.20, unknownPurposeRate: 0.40, confirmPenaltyMs: 0 },
};
const CHOICES = {
  step1:{title:"STEP 1：勘定科目",values:["会議費","接待交際費","旅費交通費","消耗品費","通信費","福利厚生費","荷造運賃","支払手数料","工具器具備品","雑費"]},
  step2:{title:"STEP 2：支払方法",values:["現金","普通預金","未払金(法人カード)","未払金(立替精算)"]},
  step3:{title:"STEP 3：税区分",values:["課税仕入10%","課税仕入8%","非課税","対象外"]},
  step4:{title:"STEP 4：処理方針",values:["そのまま記帳","要確認","分割処理","固定資産判定"]},
};
const HIGHSCORE_KEY="keiri_rta_highscores_v4"; const MAX_HIGHSCORES=8;

let state=resetState();
function resetState(){return {receipts:[],index:0,step:1,score:0,miss:0,hold:0,player:"Player",startAt:0,running:false,difficulty:"normal",timePenaltyMs:0,confirmedThisStep:false,selected:{s1:null,s2:null,s3:null,s4:null}};}
function mulberry32(seed){return function(){let t=seed+=0x6D2B79F5;t=Math.imul(t^(t>>>15),t|1);t^=t+Math.imul(t^(t>>>7),t|61);return ((t^(t>>>14))>>>0)/4294967296;};}
function hashSeed(str){let h=2166136261;for(let i=0;i<str.length;i++){h^=str.charCodeAt(i);h=Math.imul(h,16777619);}return h>>>0;}
function pickN(arr,n,rnd){const a=arr.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(rnd()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a.slice(0,n);}
function deepClone(o){return JSON.parse(JSON.stringify(o));}
function generateReceipts(difficulty, playerName){
  const p=PRESETS[difficulty]??PRESETS.normal;
  const seed=hashSeed(difficulty+"|"+playerName+"|"+new Date().toISOString().slice(0,10));
  const rnd=mulberry32(seed);
  const picked=pickN(RECEIPT_TEMPLATES,p.count,rnd).map(r=>deepClone(r));
  picked.forEach((r,idx)=>{
    r.id=`G${String(idx+1).padStart(3,"0")}`;
    r.generated={difficulty,seed,idx};
    const exp=r.expected||(r.expected={});
    exp.confidence=exp.confidence??0.75;
    if(rnd()<p.unknownPurposeRate){
      r.memo=""; exp.need_confirmation=true; exp.action="要確認"; exp.confidence=Math.min(exp.confidence,0.60);
      exp.confirm_question=exp.confirm_question||"用途/参加者が不明。誰向けの支出か確認。";
    }
    if(rnd()<p.mixedTaxRate){
      exp.action="分割処理"; exp.confidence=Math.min(exp.confidence,0.70);
      r.image_text+="\n（※8%と10%が混在している可能性あり）";
    }
    if(rnd()<p.trapRate){
      exp.need_confirmation=true; exp.action="要確認"; exp.confidence=Math.min(exp.confidence,0.55);
      r.image_text+="\n（※用途が曖昧/私費の可能性：要確認）";
      exp.confirm_question=exp.confirm_question||"私費/業務の境界が怪しい。用途と承認ルールを確認。";
    }
    if(exp.debit_account==="工具器具備品"){
      exp.action="固定資産判定"; exp.need_confirmation=true; exp.confidence=Math.min(exp.confidence,0.65);
      exp.confirm_question=exp.confirm_question||"少額減価償却/固定資産計上ルールを確認。";
    }
    exp.action=exp.action||"そのまま記帳";
  });
  return picked;
}
function msToClock(ms){const t=ms/1000;const m=Math.floor(t/60);const s=t%60;return String(m).padStart(2,"0")+":"+s.toFixed(1).padStart(4,"0");}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function getHighscores(){try{const raw=localStorage.getItem(HIGHSCORE_KEY);if(!raw)return[];const arr=JSON.parse(raw);return Array.isArray(arr)?arr:[]}catch{return[]}}
function saveHighscores(arr){localStorage.setItem(HIGHSCORE_KEY,JSON.stringify(arr.slice(0,MAX_HIGHSCORES)));}
function renderHighscores(){
  const hs=getHighscores(); el.highscoreList.innerHTML="";
  if(hs.length===0){const li=document.createElement("li");li.textContent="まだ記録がありません";el.highscoreList.appendChild(li);return;}
  hs.forEach(h=>{const li=document.createElement("li");const meta=document.createElement("span");meta.className="hs-meta";meta.textContent=`(${h.time})`;
    li.innerHTML=`<strong>${escapeHtml(h.name)}</strong>：${Number(h.score).toLocaleString()} `; li.appendChild(meta); el.highscoreList.appendChild(li);});
}
function updateHeader(){el.progressPill.textContent=`${state.index+1} / ${state.receipts.length}`;el.stepPill.textContent=`STEP ${state.step} / 4`;el.playerPill.textContent=state.player;}
function updateScoreUI(){el.scoreText.textContent=String(state.score);el.missText.textContent=String(state.miss);el.holdText.textContent=String(state.hold);el.penaltyText.textContent=`+${(state.timePenaltyMs/1000).toFixed(1)}s`;}
function renderReceipt(){
  const r=state.receipts[state.index];
  el.receiptText.textContent=[`【${r.id}】 ${r.date}`,`支払先: ${r.vendor}`,`金額: ¥${Number(r.amount_total).toLocaleString()}`, r.memo?`メモ: ${r.memo}`:"メモ: （空欄）","","---- レシート本文 ----",r.image_text].join("\n");
  el.npcBubble.textContent=r.expected?.need_confirmation?"これは迷うやつ。STEP4で「要確認」も選択肢だよ。":"OK、落ち着いていこう。";
  state.confirmedThisStep=false;
}
function setPressed(value){[...el.stepChoices.querySelectorAll("button")].forEach(btn=>btn.setAttribute("aria-pressed",btn.dataset.value===value?"true":"false"));}
function renderStep(){
  const cfg=CHOICES["step"+state.step]; el.stepTitle.textContent=cfg.title; el.stepChoices.innerHTML="";
  const currentValue=state.step===1?state.selected.s1:state.step===2?state.selected.s2:state.step===3?state.selected.s3:state.selected.s4;
  cfg.values.forEach(v=>{const b=document.createElement("button");b.className="choice-btn";b.type="button";b.dataset.value=v;b.setAttribute("aria-pressed","false");b.textContent=v;
    b.addEventListener("click",()=>{if(state.step===1)state.selected.s1=v;if(state.step===2)state.selected.s2=v;if(state.step===3)state.selected.s3=v;if(state.step===4)state.selected.s4=v;setPressed(v);renderPicked();});
    el.stepChoices.appendChild(b);});
  if(currentValue) setPressed(currentValue);
  el.btnPrevStep.disabled=state.step===1; el.btnPrevStep.style.opacity=state.step===1?"0.55":"1"; updateHeader();
}
function renderPicked(){el.picked1.textContent=state.selected.s1??"—";el.picked2.textContent=state.selected.s2??"—";el.picked3.textContent=state.selected.s3??"—";el.picked4.textContent=state.selected.s4??"—";}
function openModal(title,html){el.modalTitle.textContent=title;el.modalBody.innerHTML=html;el.modal.classList.remove("hidden");}
function closeModal(){el.modal.classList.add("hidden");}
function correctForCurrentStep(){const exp=state.receipts[state.index].expected; if(state.step===1)return exp.debit_account;if(state.step===2)return exp.credit_account;if(state.step===3)return exp.tax_category;return exp.action;}
function applyCorrect(value){if(state.step===1)state.selected.s1=value;if(state.step===2)state.selected.s2=value;if(state.step===3)state.selected.s3=value;if(state.step===4)state.selected.s4=value;setPressed(value);renderPicked();}
function confirmHint(){
  if(state.difficulty!=="easy")return;
  if(state.confirmedThisStep)return;
  state.timePenaltyMs += PRESETS.easy.confirmPenaltyMs;
  state.confirmedThisStep=true;
  const ans=correctForCurrentStep(); applyCorrect(ans);
  const r=state.receipts[state.index]; const stepName=["","科目","支払","税区分","処理方針"][state.step];
  const q=r.expected?.confirm_question?`（確認ポイント：${r.expected.confirm_question}）`:"";
  el.npcBubble.textContent=`ヒント：この${stepName}は「${ans}」で確定！ ${q}`.trim();
  updateScoreUI();
}
function currentStepAnswered(){if(state.step===1)return!!state.selected.s1;if(state.step===2)return!!state.selected.s2;if(state.step===3)return!!state.selected.s3;return!!state.selected.s4;}
function nextStep(){if(!currentStepAnswered()){openModal("未入力","このSTEPの答えを選んでから進んでね。");return;}
  if(state.step<4){state.step+=1;renderStep();return;} gradeAndAdvance();}
function prevStep(){if(state.step>1){state.step-=1;renderStep();}}
function getDifficultyFactor(){if(state.difficulty==="easy")return 1.00;if(state.difficulty==="hard")return 1.05;return 1.02;}
function gradeAndAdvance(){
  const exp=state.receipts[state.index].expected; let correct=0;
  if(state.selected.s1===exp.debit_account)correct++; if(state.selected.s2===exp.credit_account)correct++; if(state.selected.s3===exp.tax_category)correct++; if(state.selected.s4===exp.action)correct++;
  const conf=exp.confidence??0.75; const diff=getDifficultyFactor();
  const base=Math.round(90*conf*diff); const bonus=correct===4?160:correct*40; const penalty=correct===4?0:35;
  state.score += base+bonus-penalty; if(correct<4)state.miss+=1; if(state.selected.s4==="要確認")state.hold+=1;
  updateScoreUI();
  state.index+=1; state.step=1; state.selected={s1:null,s2:null,s3:null,s4:null}; renderPicked();
  if(state.index>=state.receipts.length){finish();} else {renderReceipt(); renderStep();}
}
function finish(){
  state.running=false;
  const timeMs=(performance.now()-state.startAt)+state.timePenaltyMs;
  const time=msToClock(timeMs);
  const accuracy=Math.max(0,(state.receipts.length-state.miss)/state.receipts.length);
  const hs=getHighscores();
  const record={name:state.player,score:state.score,time,at:new Date().toISOString(),difficulty:state.difficulty};
  const canEnter=hs.length<MAX_HIGHSCORES || hs.some(h=>state.score>h.score);
  if(canEnter){hs.push(record);hs.sort((a,b)=>b.score-a.score);saveHighscores(hs);}
  openModal("リザルト",[
    `プレイヤー：${escapeHtml(state.player)}<br>`,
    `難易度：${escapeHtml(state.difficulty.toUpperCase())}<br>`,
    `タイム：${time}（確認ペナルティ込み）<br>`,
    `正解率(ざっくり)：${(accuracy*100).toFixed(1)}%<br>`,
    `スコア：${Number(state.score).toLocaleString()}<br>`,
    `ミス：${state.miss}<br>`,
    `要確認：${state.hold}<br><br>`,
    canEnter ? "🎉 ハイスコアに登録しました！" : "（今回はハイスコア圏外でした）",
  ].join(""));
  renderHighscores();
}
function goHome(){state.running=false;closeModal();el.screenGame.classList.add("hidden");el.screenStart.classList.remove("hidden");renderHighscores();}
function startGame(){
  const name=(el.playerName.value||"").trim()||"名無し";
  const difficulty=el.difficulty.value||"normal";
  state=resetState(); state.player=name; state.difficulty=difficulty;
  state.receipts=generateReceipts(difficulty,name);
  state.startAt=performance.now(); state.running=true;
  el.easyActions.style.display = (difficulty==="easy") ? "block" : "none";
  el.screenStart.classList.add("hidden"); el.screenGame.classList.remove("hidden");
  renderReceipt(); renderStep(); renderPicked(); updateScoreUI(); updateHeader();
  requestAnimationFrame(tick);
}
function tick(){ if(!state.running)return; const shown=(performance.now()-state.startAt)+state.timePenaltyMs; el.timerPill.textContent=msToClock(shown); requestAnimationFrame(tick); }
function init(){
  renderHighscores();
  el.btnStart.addEventListener("click", startGame);
  el.playerName.addEventListener("keydown",(e)=>{if(e.key==="Enter") startGame();});
  el.btnHome.addEventListener("click", goHome);
  el.btnPrevStep.addEventListener("click", prevStep);
  el.btnNextStep.addEventListener("click", nextStep);
  el.btnConfirmHint.addEventListener("click", confirmHint);
  el.btnModalPrimary.addEventListener("click", goHome);
  el.modal.addEventListener("click",(e)=>{if(e.target===el.modal) goHome();});
}
init();
