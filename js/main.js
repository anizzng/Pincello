/* total menu */
allmenu = document.getElementsByClassName("allmenu"); //배열값
allmenu[0].style.display = "none";
// btn_all = document.getElementsByClassName("btn_all");

var opened = 0; //열리지 않음


function toggleCateBtn(x) {
  if (opened == 0) {
    allmenu[0].style.display = "block";
    opened = 1;
  } else if (opened == 1) {
    allmenu[0].style.display = "none";
    opened = 0;
  }
  x.classList.toggle("openMenu");
}



/* 메인 탑 슬라이드 배너 */
 var slideIndex = 0;
 showSlides(slideIndex);

 function plusSlides(n) {
   showSlides(slideIndex += n);
 }

 function currentSlide(n) {
   showSlides(slideIndex = n);
 }

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  //setInterval("plusSlides(1)", 3000);
  setTimeout("plusSlides(1)", 2000);
}


/* brand tab */
let tabList = document.querySelectorAll('.tab_menu .tab_name li');
let contents = document.querySelectorAll('.tab_menu .tab_container .tab_cont')
let activeCont = ''; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)

  for(var i = 0; i < tabList.length; i++){
    tabList[i].querySelector('.tabBrn').addEventListener('click', function(e){
      e.preventDefault();
      for(var j = 0; j < tabList.length; j++){
        // 나머지 버튼 클래스 제거
        tabList[j].classList.remove('current');

        // 나머지 컨텐츠 display:none 처리
        contents[j].style.display = 'none';
      }

      // 버튼 관련 이벤트
      this.parentNode.classList.add('current');

      // 버튼 클릭시 컨텐츠 전환
      activeCont = this.getAttribute('href');
      document.querySelector(activeCont).style.display = 'block';
    });
  }



/* 1:1문의하기 */
function inquiryBtn(){
  alert("로그인이 필요합니다.");
  location.href = "http://sunlight.dothome.co.kr/login.html";
}

/* 1:1문의하기_2 */

var modal = document.getElementById('id01');
window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
  }
}



/* 탑으로 이동 버튼 */
var btnTop = document.getElementById("btnTop");
btnTop.style.display = "none"; // 초기값은 숨기기

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


/* 각인서비스 버튼 */
function sendBtn() {
  let uname = document.getElementById("form1").value;
  if (uname == "") {
    alert("이름를 입력하세요.");
    return; // 함수를 나오도록 리턴 키워드
  }
  let uemail = document.getElementById("form2").value;
  if (uemail == "") {
    alert("이메일을 입력하세요.");
    return; // 함수를 나오도록 리턴 키워드
  }
  let ucall = document.getElementById("form3").value;
  if (ucall == "") {
    alert("연락처를 입력하세요.");
    return; // 함수를 나오도록 리턴 키워드
  }
  let utitle = document.getElementById("form4").value;
  if (utitle == "") {
    alert("제목을 입력하세요.");
    return; // 함수를 나오도록 리턴 키워드
  }
  let ucont = document.getElementById("form5").value;
  if (ucont == "") {
    alert("내용을 입력하세요.");
    return; // 함수를 나오도록 리턴 키워드
  }
  alert("전송되었습니다.");
}

/* 로그인 페이지 */
function loginBtn() {
  let ckid = document.getElementById("chkId").value;
  if (ckid == "") {
    alert("아이디를 입력하세요.");
    return; // 함수를 나오도록 리턴 키워드
  }
  let ckpw = document.getElementById("chkPw").value;
  if (ckpw == "") {
    alert("비번을 입력하세요.");
    return; // 함수를 나오도록 리턴 키워드
  }
  alert("로그인 되었습니다.");
}
 
/* 비회원 주문조회 */
function noUserLogin() {
  let ckid1 = document.getElementById("chkId1").value;
  if (ckid1 == "") {
    alert("주문번호를 입력하세요.");
    return; // 함수를 나오도록 리턴 키워드
  }
  let ckpw1 = document.getElementById("chkPw1").value;
  if (ckpw1 == "") {
    alert("비번을 입력하세요.");
    return; // 함수를 나오도록 리턴 키워드
  }
  alert("주문조회 되었습니다.");
} 

/* 비회원 주문조회 회원가입 버튼 */
function joinUs(){
  alert("회원가입 페이지는 준비중입니다.");
}