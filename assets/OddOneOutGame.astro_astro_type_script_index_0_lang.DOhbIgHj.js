import{t as e}from"./progress.CSSrL5Fb.js";import{n as t}from"./gameSounds.NIc3mBjX.js";var n=class{container;id;allQuestions=[];sessionQuestions=[];currentQuestion=0;nextUrl=`/adventurers/`;isWaiting=!1;constructor(e){this.container=e,this.id=this.container.dataset.id||``,this.allQuestions=JSON.parse(this.container.dataset.questions||`[]`),this.nextUrl=this.container.dataset.nextUrl||`/adventurers/`,this.initSession(),this.init()}initSession(){let e=[...this.allQuestions].sort(()=>.5-Math.random());this.sessionQuestions=e.slice(0,Math.min(8,e.length))}init(){document.addEventListener(`celebration-replay`,()=>window.location.reload()),document.addEventListener(`celebration-next`,()=>{window.location.href=this.nextUrl}),this.updateProgress(),this.loadQuestion()}loadQuestion(){if(this.currentQuestion>=this.sessionQuestions.length){this.finishGame();return}this.isWaiting=!1;let e=this.sessionQuestions[this.currentQuestion],t=this.container.querySelector(`#category-badge`);t&&(t.textContent=e.category);let n=this.container.querySelector(`#current-q-index`);n&&(n.textContent=(this.currentQuestion+1).toString());let r=[...e.items].sort(()=>Math.random()-.5),i=this.container.querySelector(`#grid-container`);if(!i)return;i.innerHTML=r.map(e=>`
           <button 
             type="button"
             class="odd-option aspect-square rounded-3xl bg-white dark:bg-zinc-800 shadow-md hover:shadow-xl border-2 border-zinc-200/80 dark:border-zinc-700/80 flex flex-col items-center justify-center p-4 focus:outline-none focus:ring-4 focus:ring-indigo-400/50 cursor-pointer"
             data-id="${e.id}"
             data-name="${e.name}"
             data-odd="${e.isOdd}"
             aria-label="${e.name}"
           >
             <span class="text-6xl sm:text-7xl mb-1">${e.emoji}</span>
             <span class="text-xs font-bold text-zinc-600 dark:text-zinc-300">${e.name}</span>
           </button>
       `).join(``),i.querySelectorAll(`.odd-option`).forEach(e=>{e.addEventListener(`click`,e=>this.handleAnswer(e))});let a=this.container.querySelector(`#feedback-message`);a&&(a.innerHTML=``)}handleAnswer(e){if(this.isWaiting)return;let n=e.currentTarget,r=n.dataset.odd===`true`,i=this.sessionQuestions[this.currentQuestion];this.isWaiting=!0;let a=this.container.querySelector(`#feedback-message`);r?(n.classList.add(`correct`),a&&(a.innerHTML=`
            <div class="p-3 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 rounded-2xl max-w-md w-full animate-pop-in">
              <span class="text-emerald-700 dark:text-emerald-300 font-extrabold text-sm block mb-0.5">🎉 Brilliant! You found the odd one!</span>
              <span class="text-xs text-emerald-800/80 dark:text-emerald-200/80 font-medium">${i.explanation}</span>
            </div>
          `),t&&t.playSuccess(),setTimeout(()=>{this.currentQuestion++,this.updateProgress(),this.loadQuestion()},1600)):(n.classList.add(`wrong`),a&&(a.innerHTML=`
            <div class="p-2.5 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 rounded-xl text-xs font-bold text-rose-600 dark:text-rose-400">
              Not quite! That item belongs with the others. Try again! 🤔
            </div>
          `),t&&t.playWrong(),setTimeout(()=>{n.classList.remove(`wrong`),this.isWaiting=!1},1e3))}finishGame(){e(this.id),window.showCelebration?.(),t&&t.playCelebration()}updateProgress(){let e=this.container.querySelector(`#progress-container`);if(e){let t=e.querySelector(`.font-bold`);t&&(t.textContent=`${this.currentQuestion} / ${this.sessionQuestions.length}`)}}};function r(){document.querySelectorAll(`.odd-one-out-game`).forEach(e=>{let t=e;t.__init||(t.__init=!0,new n(t))})}document.addEventListener(`DOMContentLoaded`,r),document.addEventListener(`astro:page-load`,r);