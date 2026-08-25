const canvas=document.getElementById("matrix"),ctx=canvas.getContext("2d");let drops=[];
function resize(){canvas.width=innerWidth;canvas.height=innerHeight;drops=Array(Math.ceil(canvas.width/16)).fill(0).map(()=>Math.random()*-40)}
resize();addEventListener("resize",resize);
function matrix(){ctx.fillStyle="rgba(5,8,6,.12)";ctx.fillRect(0,0,canvas.width,canvas.height);ctx.fillStyle="#29ff69";ctx.font="13px JetBrains Mono";drops.forEach((y,i)=>{const chars="01{}[]<>/\\\\$#@";const t=chars[Math.floor(Math.random()*chars.length)];ctx.fillText(t,i*16,y*16);if(y*16>canvas.height&&Math.random()>.975)drops[i]=0;drops[i]++});requestAnimationFrame(matrix)}matrix();

const toggle=document.querySelector(".menu-toggle"),nav=document.getElementById("nav-links");
toggle.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const email="hello@baldev.dev";
document.getElementById("copyEmail").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(email);document.getElementById("copyEmail").textContent="copied ✓";setTimeout(()=>document.getElementById("copyEmail").textContent="copy_email",1800)}catch(e){alert(email)}});

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".section,.project-card,.timeline-card").forEach(e=>{e.style.transition="opacity .7s ease,transform .7s ease";e.style.opacity="0";e.style.transform="translateY(18px)";observer.observe(e)});
const style=document.createElement("style");style.textContent=".visible{opacity:1!important;transform:none!important}";document.head.appendChild(style);

const mailForm=document.getElementById("mailForm");
mailForm.addEventListener("submit",(event)=>{
  event.preventDefault();
  const name=document.getElementById("senderName").value.trim();
  const email=document.getElementById("senderEmail").value.trim();
  const subject=document.getElementById("mailSubject").value.trim();
  const message=document.getElementById("mailMessage").value.trim();
  const body=`Hello Baldev,

${message}

---
From: ${name}
Email: ${email}`;
  window.location.href=`mailto:hello@baldev.dev?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
