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
// 검색된 게시글 목록
function searchDisplayboards() {
    
  var param = location.search;
  // param = param.substring(1);
  param = param.split('=');
  param[1]= decodeURI(param[1]);
  const searchWord = param[1];
  const boards = JSON.parse(localStorage.getItem("boards")) || [];
  const filteredboards = boards.filter(
    (board) =>  
      board.id.toString() === searchWord ||
      board.title.toLowerCase().includes(searchWord) ||
      board.content.toLowerCase().includes(searchWord) ||
      board.area.toLowerCase().includes(searchWord) ||
      board.author.toLowerCase().includes(searchWord)
  );
  
  const List = document.getElementById("List");
  List.innerHTML = "";

  for (let i = 0; i < filteredboards.length; i++) {
    const board = filteredboards[i];
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="container">
        <div class="img" style="background-image: url(${
          imgs[board.img]
        }); width: 350px; height: 300px;"></div>
        <div class="contents">
          <div class="contents-header">
            <h2 class="name">[${board.area}] ${board.title}</h2>
            <div class="writer">작성자 : ${board.author}</div>
            </div>
            <div class="writing">
            ${board.content}
            </div>
            <div class="container-option">
              <button class="btn-option" onclick="editHandler(${
                board.id
              })">수정</button>
              <button  class="btn-option" onclick="deleteHandler(${
                board.id
              })">삭제</button>
            </div>
            <div class="content-date">날짜</div>
        </div>
      </div><br>
      `;
    List.appendChild(div);
  }
}

// 수정
function editHandler(id) {
  const boards = JSON.parse(localStorage.getItem("boards")) || [];
  const board = boards.find((board) => board.id === id);

  if (!board) {
    alert("게시글을 찾을 수 없습니다.");
    return;
  }

  const title = prompt("수정할 제목:", board.title);
  const content = prompt("수정할 내용:", board.content);

  if (title !== null && content !== null) {
    board.title = title;
    board.content = content;
    localStorage.setItem("boards", JSON.stringify(boards));
    searchDisplayboards();
  }
}

// 삭제
function deleteHandler(id) {
  let boards = JSON.parse(localStorage.getItem("boards")) || [];
  boards = boards.filter((board) => board.id !== id);
  localStorage.setItem("boards", JSON.stringify(boards));
  searchDisplayboards();
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

searchDisplayboards();
