import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as p,i}from"./assets/vendor-BbbuE1sJ.js";const a=document.querySelector("#datetime-picker"),n=document.querySelector(".start-btn"),s={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};let d,u=null;n.disabled=!0;const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=new Date;d=e[0],d<=t?(i.error({message:"Please choose a date in the future",closeOnEscape:!0,messageColor:"#FFFFFF",position:"topRight",maxWidth:"300px",progressBar:!1,close:!1}),n.disabled=!0):(i.destroy(),n.disabled=!1)}};p(a,S);n.addEventListener("click",b);function b(){n.disabled=!0,a.disabled=!0,u=setInterval(()=>{const t=d-new Date;if(t<=0){clearInterval(u),l(0,0,0,0),a.disabled=!1;return}const o=C(t);l(o.days,o.hours,o.minutes,o.seconds)},1e3)}function l(e,t,o,c){s.days.textContent=r(e),s.hours.textContent=r(t),s.minutes.textContent=r(o),s.seconds.textContent=r(c)}function r(e){return String(e).padStart(2,"0")}function C(e){const m=Math.floor(e/864e5),f=Math.floor(e%864e5/36e5),h=Math.floor(e%864e5%36e5/6e4),y=Math.floor(e%864e5%36e5%6e4/1e3);return{days:m,hours:f,minutes:h,seconds:y}}
//# sourceMappingURL=1-timer.js.map
