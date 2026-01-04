import { PASSKEYS } from '../passkey.js';

const passInput = document.getElementById("passkey");
const verifyBtn = document.getElementById("verifyBtn");
const msg = document.getElementById("message");
const loginPage = document.getElementById("loginPage");
const dashboardPage = document.getElementById("dashboardPage");

if(verifyBtn){
  verifyBtn.addEventListener("click",()=>{
    const key = passInput.value.trim();
    if(PASSKEYS.includes(key)){
      sessionStorage.setItem("verified", key);
      if(loginPage) loginPage.style.display="none";
      if(dashboardPage) dashboardPage.style.display="block";
    } else msg.innerText="Wrong Access Key!";
  });
}

/* Send Telegram */
const sendMsgBtn=document.getElementById("sendMsgBtn");
if(sendMsgBtn){
  sendMsgBtn.addEventListener("click", async ()=>{
    const cmd = document.getElementById("command").value.trim();
    const num = document.getElementById("number").value.trim();
    if(!num) return alert("Enter number!");
    const message = `/${cmd.replace(/\s+/g,'_')} ${num}`;
    try{
      await fetch("/api/telegram-notify", {
        method:"POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({message})
      });
      alert("Message sent!");
    } catch(e){console.error(e); alert("Failed!");}
  });
}

/* Theme toggle */
const themeToggle = document.getElementById("themeToggle");
if(themeToggle){
  themeToggle.addEventListener("click",()=>{
    document.body.classList.toggle("light-theme");
    themeToggle.innerText = document.body.classList.contains("light-theme") ? "⚙" : "🌙";
  });
  }
