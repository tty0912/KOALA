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

function displayMain() {
  const displayMain = document.getElementById("displayMain");
  displayMain.innerHTML = "";

  const boards = JSON.parse(localStorage.getItem("boards")) || [];
  for (let i = boards.length-1; i >= 0; i--) {
    const url = 'searchListPage.html';
    const board = boards[i];
    const div = document.createElement("div");
    div.innerHTML = `
                        <div class="restaurant-list-item">
                            <div class="img">
                            <a href="${url}?search=${board.id}"><img src="${
                              imgs[board.img]
                            } "style="width: 300px; height: 300px; border-radius: 15px;"></a>
                            </div>
                            <div class="detail">
                                <div class="boardListPage-header">
                                    <h3 class="name">${board.title}</h3>
                                    <div>지역 : ${board.area}</div>
                                    <div>방문일 : ${board.date}</div>
                                </div>
                            </div>
                        </div>
      `;
    displayMain.appendChild(div);
  }
}
displayMain();
