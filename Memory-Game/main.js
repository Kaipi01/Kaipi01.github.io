let soundPermission;if("/Memory-Game/pages/endgame.html"!==window.location.pathname){const a=document.querySelector(".soundBtn");soundPermission=localStorage.getItem("soundPermission"),null===soundPermission&&(soundPermission=!0,localStorage.setItem("soundPermission",soundPermission)),soundPermission=!("true"!==soundPermission),a.innerHTML=!0===soundPermission?`<i class="icon-volume-up"></i>`:`<i class="icon-volume-off"></i>`,a.addEventListener("click",()=>{const a=document.querySelector(".soundBtn i");localStorage.removeItem("soundPermission"),!0===soundPermission?(a.classList.remove("icon-volume-up"),a.classList.add("icon-volume-off"),soundPermission=!1):(a.classList.remove("icon-volume-off"),a.classList.add("icon-volume-up"),soundPermission=!0),localStorage.setItem("soundPermission",soundPermission)})}if("/Memory-Game/"===window.location.pathname){localStorage.removeItem("userName"),localStorage.removeItem("time"),localStorage.removeItem("seconds"),localStorage.removeItem("trialsNumber");const a=document.querySelector(".start"),b=document.querySelector("#userName");b.addEventListener("input",()=>{userName=b.value,localStorage.setItem("userName",userName)}),a.addEventListener("click",()=>{window.location.replace("/Memory-Game/pages/game.html")})}else"/Memory-Game/pages/game.html"===window.location.pathname?startGame():showResults();function startGame(){function a(a,b){function c(a){k.forEach(a=>{a.setAttribute("block","block")}),setTimeout(()=>{p.removeAttribute("data-active"),r.removeAttribute("data-active"),p.style.backgroundColor="",r.style.backgroundColor="",p.classList.add(a),r.classList.add(a),"delete"===a&&(p.setAttribute("tabindex","-1"),r.setAttribute("tabindex","-1")),k.forEach(a=>{a.removeAttribute("block","block")})},1e3)}function e(a,b){a.style.backgroundColor=d[o[b]],a.classList.remove("hide")}if(!a.hasAttribute("block")){switch(z){case 0:e(a,b),p=a,q=a.style.backgroundColor,p.setAttribute("data-active","true"),z++;break;case 1:if(e(a,b),r=a,r.setAttribute("data-active","true"),r===p)return;s=a.style.backgroundColor,q===s?(c("delete"),soundPermission&&h.cloneNode().play(),A--):(c("hide"),soundPermission&&g.cloneNode().play()),z=0,x++,l.textContent=x;}0===A&&(soundPermission&&j.play(),clearInterval(B),localStorage.setItem("time",t),localStorage.setItem("seconds",y),localStorage.setItem("trialsNumber",x),document.querySelector(".main").innerHTML+=`
          <h2 class="winTitle">You Win!</h2>
        `,setTimeout(()=>{window.location.replace("/Memory-Game/pages/endgame.html")},3e3))}}function b(a){k.forEach((a,b)=>{a.classList.contains("delete")||(a.setAttribute("block","block"),a.style.backgroundColor=d[o[b]],a.classList.remove("hide"))}),setTimeout(()=>{k.forEach(a=>{a.classList.contains("delete")||a.hasAttribute("data-active")||(a.classList.add("hide"),a.style.backgroundColor="",a.removeAttribute("block","block"))})},a)}function c(){59<=u?(u=0,v++):u++,59<=v&&(v=0,w++),n.textContent=`${10>w?"0"+w:w}:${10>v?"0"+v:v}:${10>u?"0"+u:u}`,t=n.textContent,y++}const d=["#fa0000","#fa0000","#2d19ff","#2d19ff","#159c00","#159c00","#e3fc03","#e3fc03","#ff0051","#ff0051","#6e6e6e","#6e6e6e","#000","#000","#fff","#fff","#8800ff","#8800ff","#4b0082","#4b0082","#ffa600","#ffa600","#211600","#211600","#5e64ff","#5e64ff","#00ff95","#00ff95","#0f00e6","#0f00e6","#e0d666","#e0d666","#008080","#008080","#8a2be2","#8a2be2","#ff7f50","#ff7f50","#750000","#750000","#3c005c","#3c005c","#00ff15","#00ff15","#cd853f","#cd853f","#cccfa5","#cccfa5","#a35a00","#a35a00"],f=new Audio("/Memory-Game/sounds/freetip.wav"),g=new Audio("/Memory-Game/sounds/bad.wav"),h=new Audio("/Memory-Game/sounds/good.wav"),j=new Audio("/Memory-Game/sounds/win.wav"),k=document.querySelectorAll(".card"),l=document.querySelector(".trials"),m=document.querySelectorAll(".tip"),n=document.querySelector(".time"),o=function(){const a=[];for(;50>a.length;){const b=Math.floor(50*Math.random());let c=!0;for(let d=0;50>d;d++)if(b===a[d]){c=!1;break}c&&a.push(b)}return a}();let p,q,r,s,t,u=0,v=0,w=0,x=0,y=0,z=0,A=25;const B=setInterval(c,1e3);b(5e3),k.forEach((b,c)=>{b.addEventListener("click",()=>{a(b,c)})}),m.forEach(a=>{a.addEventListener("click",c=>{a.classList.contains("disable")||(soundPermission&&f.cloneNode().play(),b(3e3),c.target.classList.add("disable"),c.target.setAttribute("tabindex","-1"))})})}function showResults(){let a,b=localStorage.getItem("userName")||"User",c=localStorage.getItem("time"),d=localStorage.getItem("seconds"),e=localStorage.getItem("trialsNumber");a=0!==e&&e?Math.round(9999/e)-Math.round(d/10):0,0>a?a=0:a;let f=localStorage.getItem("userNameRecord"),g=localStorage.getItem("timeRecord"),h=localStorage.getItem("secondsRecord"),i=localStorage.getItem("trialsNumberRecord"),j=localStorage.getItem("scoreRecord");(f||g||h||i||j)&&!(a>j)||(f=b,g=c,h=d,i=e,j=a,localStorage.setItem("userNameRecord",b),localStorage.setItem("timeRecord",c),localStorage.setItem("secondsRecord",d),localStorage.setItem("trialsNumberRecord",e),localStorage.setItem("scoreRecord",a)),document.querySelector(".userNameResults").textContent=b,document.querySelector(".timeResults").textContent=c,document.querySelector(".trialsResults").textContent=e,document.querySelector(".scoreResults").textContent=a,document.querySelector(".userNameRecord").textContent=f||"User",document.querySelector(".timeRecord").textContent=g,document.querySelector(".trialsRecord").textContent=i,document.querySelector(".scoreRecord").textContent=j}