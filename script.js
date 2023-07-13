function fadeEffect(pageId1, pageId2, duration) {
    var page1 = document.getElementById(pageId1);
    page1.classList.add("fade-out");

    setTimeout(function() {
      page1.style.display = "none";

      var page2 = document.getElementById(pageId2);
      page2.style.display = "block";
      page2.classList.remove("fade-out");
      page2.classList.add("fade-in");
    }, duration);
  }

function goToHowPage() {
  fadeEffect("main", "how-page", 200);
}

function goToInputPage() {
  fadeEffect("how-page", "input-page1", 300);
}


var inputText = "";  //변수 초기화

function nextpage(ppptext) {
  var pptext = document.getElementById(ppptext).value;
  inputText += " " + pptext;
}

function goTonextPage1() {
  nextpage("input-text1")
  fadeEffect("input-page1", "input-page2", 300);
}

function goTonextPage2() {
  nextpage("input-text2")
  fadeEffect("input-page2", "input-page3", 300);
}
function goToBePage2() {
  fadeEffect("input-page2", "input-page1", 300);
}

function goTonextPage3() {
  nextpage("input-text3")
  fadeEffect("input-page3", "input-page4", 300);
}
function goToBePage3() {
  fadeEffect("input-page3", "input-page2", 300);
}

function goTonextPage4() {
  nextpage("input-text4")
  fadeEffect("input-page4", "input-page5", 300);
}
function goToBePage4() {
  fadeEffect("input-page4", "input-page3", 300);
}

function goTonextPage5() {
  nextpage("input-text5")
  fadeEffect("input-page5", "input-page6", 300);
}
function goToBePage5() {
  fadeEffect("input-page5", "input-page4", 300);
}

function goTonextPage6() {
  nextpage("input-text6")
  fadeEffect("input-page6", "input-page7", 300);
}
function goToBePage6() {
  fadeEffect("input-page6", "input-page5", 300);
}

function goTonextPage7() {
  nextpage("input-text7")
  document.getElementById("result").textContent = inputText;
  fadeEffect("input-page7", "result-page", 300);
}
function goToBePage7() {
  fadeEffect("input-page7", "input-page6", 300);
}



function INFP() {
  fadeEffect("result-page", "INFP", 300);
}
function INTP() {
  fadeEffect("result-page", "INTP", 300);
}
function INFJ() {
  fadeEffect("result-page", "INFJ", 300);
}
function INTJ() {
  fadeEffect("result-page", "INTJ", 300);
}
function ISFP() {
  fadeEffect("result-page", "ISFP", 300);
}
function ISTP() {
  fadeEffect("result-page", "ISTP", 300);
}
function ISFJ() {
  fadeEffect("result-page", "ISFJ", 300);
}
function ISTJ() {
  fadeEffect("result-page", "ISTJ", 300);
}
function ENFP() {
  fadeEffect("result-page", "ENFP", 300);
}
function ENTP() {
  fadeEffect("result-page", "ENTP", 300);
}
function ENFJ() {
  fadeEffect("result-page", "ENFJ", 300);
}
function ENTJ() {
  fadeEffect("result-page", "ENTJ", 300);
}
function ESFP() {
  fadeEffect("result-page", "ESFP", 300);
}
function ESTP() {
  fadeEffect("result-page", "ESTP", 300);
}
function ESFJ() {
  fadeEffect("result-page", "ESFJ", 300);
}
function ESTJ() {
  fadeEffect("result-page", "ESTJ", 300);
}

function INFP2() {
  fadeEffect("INFP", "result-page", 300);
}
function INTP2() {
  fadeEffect("INTP", "result-page", 300);
}
function INFJ2() {
  fadeEffect("INFJ", "result-page", 300);
}
function INTJ2() {
  fadeEffect("INTJ", "result-page", 300);
}
function ISFP2() {
  fadeEffect("ISFP", "result-page", 300);
}
function ISTP2() {
  fadeEffect("ISTP", "result-page", 300);
}
function ISFJ2() {
  fadeEffect("ISFJ", "result-page", 300);
}
function ISTJ2() {
  fadeEffect("ISTJ", "result-page", 300);
}
function ENFP2() {
  fadeEffect("ENFP", "result-page", 300);
}
function ENTP2() {
  fadeEffect("ENTP", "result-page", 300);
}
function ENFJ2() {
  fadeEffect("ENFJ", "result-page", 300);
}
function ENTJ2() {
  fadeEffect("ENTJ", "result-page", 300);
}
function ESFP2() {
  fadeEffect("ESFP", "result-page", 300);
}
function ESTP2() {
  fadeEffect("ESTP", "result-page", 300);
}
function ESFJ2() {
  fadeEffect("ESFJ", "result-page", 300);
}
function ESTJ2() {
  fadeEffect("ESTJ", "result-page", 300);
}

function reset() {
  fadeEffect("INFP", "main", 300);
}

function skip() {
  fadeEffect("main", "result-page", 300);
}
