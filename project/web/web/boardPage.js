let imgs = [
  "",
  "./img/1.jpg",
  "./img/연어.jpg",
  "./img/피자.jpg",
  "./img/수육.jpg",
  "./img/꼬치.jpg",
  "./img/전.jpg",
  "./img/쭈꾸미.jpg",
];

var now_utc = Date.now()
var timeOff = new Date().getTimezoneOffset()*60000;
var today = new Date(now_utc-timeOff).toISOString().split("T")[0];
document.getElementById("date").setAttribute("max", today);

// 저장
function saveHandler() {
  const author = document.getElementById("author").value;
  const area = document.getElementById("area").value;
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;
  const date = document.getElementById("date").value;
  // const dateStamp = new Date(date).getTime();
  const img = document.getElementById("img").value;
  const timestamp = new Date().getTime();
  const board = {
    id: timestamp,
    author: author,
    area: area,
    title: title,
    date: date,
    content: content,
    img: img,
  };

  if (isEmpty(author, area, title, content, img)) {
    return false;
  }

  
  // if(isfalse(dateStamp)) {
  //   alert('날짜를 잘못입력하셨습니다. 다시 입력하세요');
  //   return false;
  // }

  let boards = JSON.parse(localStorage.getItem("boards")) || [];
  boards.push(board);
  localStorage.setItem("boards", JSON.stringify(boards));

  document.getElementById("author").value = "";
  document.getElementById("area").value = "";
  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
  document.getElementById("img").value = "";
  displayboards();
}

//빈칸검사
function isEmpty(author, area, title, content, img) {
  if (
    author === "" ||
    area === "지역" ||
    area === "" ||
    title === "" ||
    content === "" ||
    img === ""
  ) {
    alert("작성하지 않은 부분이 있습니다!! 다시 작성해주세요!");
    return true;
  } else return false;
}

// function isfalse(dateStamp) {
//   if (dateStamp > timestamp) {
//     return true;
//   } else return false;
// }