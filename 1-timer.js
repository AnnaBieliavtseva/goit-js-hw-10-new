import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as d,i as s}from"./assets/vendor-BbSUbo7J.js";const u=document.querySelector("#datetime-picker"),n=document.querySelector(".start-btn");let o;const m={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=new Date;o=e[0],o<=t?(s.error({message:"Please choose a date in the future",closeOnEscape:!0,messageColor:"#FFFFFF",position:"topRight",maxWidth:"300px",progressBar:!1,close:!1}),n.classList.add("disable")):(s.destroy(),n.classList.remove("disable"),console.log(o))}};d(u,m);console.log(o);const r=o-dateNow;console.log(r);function f(e){const a=Math.floor(e/864e5),c=Math.floor(e%864e5/36e5),i=Math.floor(e%864e5%36e5/6e4),l=Math.floor(e%864e5%36e5%6e4/1e3);return{days:a,hours:c,minutes:i,seconds:l}}console.log(f(r));
//# sourceMappingURL=1-timer.js.map
