
'use strict';
  window.addEventListener("load", function() {
  const loading = document.querySelector(".loading");
  if (!loading) return;
  // フェードアウト
  loading.style.opacity = "0";

  // 0.5秒後に display: none にして完全に消す
  setTimeout(() => {
    loading.style.display = "none";
  }, 500); // CSS transition と同じ時間
});

function setNavText() {
  const navUl = document.querySelector(".header_nav ul");
  //「class header_navのul」を探してきて「navUl」を代入するよ宣言！

  if (!navUl) return; 

  if (window.innerWidth < 768) { //もし画面の幅が768ピクセル以上なら…
    navUl.innerHTML = `
      <li><a href="../index.html">Top</a></li>
      <li><a href="#">Travel</a></li>
      <li><a href="../tainan/index.html">台南</a></li>
    `;                          //navUlの中のHTMLを↑に書き換えて
  } else {                      //falseなら
    navUl.innerHTML = `
      <li><a href="../index.html">Home</a></li>
      <li><a href="#">Travel</a></li>
      <li><a href="../tainan/index.html">台南</a></li>
    `;
  }                             //navUlのinnerHTMLを↑に書き換える
}

setNavText();                 // ページ読み込み時に
window.addEventListener("resize", setNavText); // ←画面サイズ変更時にも実行される！


// ------------------------------------------
// ★新モーダル（超シンプル版）を入れる ★
// ------------------------------------------

const modal = document.getElementById('modal');
const modalImage = document.querySelector('.modal_image');
const triggers = document.querySelectorAll('.modal_trigger');
const closeBtn = document.querySelector('.modal_close');
const overlay = document.querySelector('.modal_overlay');

if (modal && modalImage && closeBtn && overlay) {

triggers.forEach(trigger => {
  trigger.addEventListener('click', () => {

    const imageSrc =
      window.innerWidth >= 768
        ? trigger.dataset.imagePc
        : trigger.dataset.imageSp;

    modalImage.src = imageSrc;

    modal.classList.add('active');
    overlay.classList.add('active');
  });
});

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

function closeModal() {
  modal.classList.remove('active');
  overlay.classList.remove('active');
}
} // ← ここが重要！
// ドロワー部分のJavaScript

const openNav = document.getElementById('openNav');
const wrapper = document.getElementById('wrapper');
const drawer = document.getElementById('drawer');
const closeNav = document.getElementById('closeNav');
//ハンバーガーの開閉トグル。
openNav.addEventListener('click', function () {
  wrapper.classList.toggle('show');
  drawer.classList.toggle('show');
  openNav.classList.toggle('vanish');
});
//クローズ押したときに、ハンバーガーにクリックを送信
closeNav.addEventListener('click', function () {
  openNav.click();
});