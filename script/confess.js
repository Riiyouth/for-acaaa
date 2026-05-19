// confess.js — behavior for confess.html
(function(){
  const clickSound = new Audio('https://public.youware.com/users-website-assets/prod/06f02491-b6fe-43bd-82b4-8b0add34ed70/Button-SoundBible.com-1420500901.mp3');

  window.handleYesClick = function(){
    clickSound.currentTime = 0; clickSound.play().catch(()=>{});
    // simple success animation then redirect to love.html
    const btn = document.querySelector('.yes-button');
    btn.style.transform = 'scale(.95)';
    setTimeout(()=>{btn.style.transform='scale(1)';},120);
    setTimeout(()=>{window.location.href = 'https://wa.me/6285861256540?text=Gimaanaa%20mau%20gaa?%20tulis%20jawaban%20nya%20terus%20kirim';},800);
  }

  window.handleNoClick = function(){
    // attempt to move button away when clicked
    moveNoButton();
  }

  function moveNoButton(){
    const btn = document.querySelector('.no-button');
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    const bw = btn.offsetWidth;
    const bh = btn.offsetHeight;
    const padding = 20;
    const maxX = Math.max(0, vw - bw - padding);
    const maxY = Math.max(0, vh - bh - padding);
    const left = Math.floor(Math.random() * maxX) + padding;
    const top = Math.floor(Math.random() * maxY) + padding;
    btn.style.position = 'fixed';
    btn.style.left = left + 'px';
    btn.style.top = top + 'px';
  }

  // make No button dodge on hover for fun
  document.addEventListener('DOMContentLoaded', function(){
    const no = document.querySelector('.no-button');
    if(!no) return;
    no.addEventListener('mouseenter', moveNoButton);
    no.addEventListener('click', function(e){ e.preventDefault(); moveNoButton(); });
  });

})();
