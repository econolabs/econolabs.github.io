(function(s,c){typeof exports=="object"&&typeof module<"u"?module.exports=c():typeof define=="function"&&define.amd?define(c):(s=typeof globalThis<"u"?globalThis:s||self,s.vanillajsdommanagement=c())})(this,(function(){"use strict";const s=document.querySelector.bind(document),c=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];function n(r){let l=`<div class='row g-2'>
       <div class="col-1">
           <input type="text" class="form-control form-control-sm m-1" placeholder="" aria-label="letter" disabled>
       </div>   
    `+r[0].map((e,t)=>`
           <div class="col">
               <input type="text" class="form-control form-control-sm m-1" placeholder="${c[t]}" aria-label="letter" disabled>
           </div>        
     `).join("")+"</div>";return l+=r.map((e,t)=>`
       <div class="row g-2">
           <div class="col-1">
               <input type="text" class="form-control form-control-sm m-1" placeholder="${0+t+1}" aria-label="number" disabled>
           </div>
           <div class="col">
               <input type="text" class="form-control form-control-sm m-1" placeholder="${e[0]}" aria-label="month">
           </div>
           <div class="col">
               <input type="text" class="form-control form-control-sm m-1" placeholder="${e[1]}" aria-label="X1">            
           </div>
           <div class="col">
               <input type="text" class="form-control form-control-sm m-1" placeholder="${e[2]}" aria-label="X2">            
           </div>
            <div class="col">
               <input type="text" class="form-control form-control-sm m-1" placeholder="${e[3]}" aria-label="Y">            
           </div>
       </div>`).join(""),l+=`<div class="row g-3 align-items-center">
   <div class="col-auto">
     <label for="formulacell" class="col-form-label">A${r.length+1}</label>
   </div>
   <div class="col-auto">
     <input name="formulacell" type="text id="formulacell" class="form-control" aria-describedby="formulacell">
   </div>
    <div class="col-auto">
       <span class="form-text" id="formularesult">...</span>
     </div>
   </div>`,l}class m{constructor(l,e){this.ul=s(`#${l}`),this.selector=l,this.callBack=e}addEvents(l){let e=l.map((o,i)=>`
        <div class="form-check">
          <input class="form-check-input ${this.selector}" type="checkbox" value="" id="${i}">
          <label class="form-check-label" for='${i}'>
          ${o}
          </label>
        </div>`).join("");this.ul.innerHTML=e;let t=document.getElementsByClassName(this.selector);for(var a=0;a<t.length;a++)t[a].addEventListener("click",o=>{this.callBack(l[o.target.id])})}}class d{constructor(l,e){this.ul=s(`#${l}`),this.selector=l,this.callBack=e}addEvents(l){let e=l.map((o,i)=>`<div class="form-check">
        <input class="form-check-input ${this.selector}" type="radio" name="quizRadio" id="${i}">
        <label class="form-check-label" for='${i}'>${o}</label>
    </div>`).join("");this.ul.innerHTML=e;let t=document.getElementsByClassName(this.selector);for(var a=0;a<t.length;a++)t[a].addEventListener("click",o=>{this.callBack(l[o.target.id])})}}return Object.assign({},{EconolabsCheckQuiz:m,EconolabsChoiceQuiz:d,markupForDataArray:n})}));
