const times = [
  "8:00",
  "8:15",
  "8:30",
  "8:45",
  "9:00",
  "9:15",
  "9:30",
  "9:45",
  "10:00",
  "10:15",
  "10:30",
  "10:45",
  "11:00",
  "11:15",
  "11:30",
  "11:45",
  "12:00",
  "12:15",
  "12:30",
  "12:45",
  "13:00",
  "13:15",
  "13:30",
  "13:45",
  "14:00",
  "14:15",
  "14:30",
  "14:45",
];
const personalDB = [
  ["Легкова А.П", times],
  ["Валеева Н.Д", times],
  ["Крылова О.О", times],
  ["Санникова Д.Я", times],
  ["Хлебникова В.С", times],
  ["Александрова В.С", times],
  ["Фетисова С.Н", times],
  ["Жданова Ю.С", times],
  ["Долгова Л.Ю", times],
  ["Павлова Е.Э", times],
  ["Симонова И.М", times],
  ["Евлампиева О.Г", times],
  ["Тихонова Т.К", times],
  ["Никонова Н.С", times],
  ["Красносельских Д.О", times],
  ["Сочникова Д.Б", times],
  ["Касаткина У.Ф", times],
  ["Смирнова Ю.С", times],
  ["Васина Г.Н", times],
  ["Тишкина Д.Д", times],
  ["Заметова Л.П", times],
  ["Костина М.Д", times],
  ["Усова И.О", times],
  ["Старкова Е.М", times],
];

function handleSelectedTime() {
    this.classList.add('selected');
}






function renderList(personalDB) {
  let personalList = document.querySelector(".personal_list");
  
  personalList.innerHTML = '';
  personalDB.forEach((person) => {
    const element = document.createElement("li");
    element.onclick = (event) => {
      const shedule = document.querySelector(".shedule");
      shedule.innerHTML = `
            <table>
            <tr><th>Время записи</th></tr> 
            ${person[1].reduce(
              (list, time) => list + `<tr><td>${time}</td></tr>`,
              ""
            )}
            </table>
            `;
    };
    element.innerHTML = `<a href = "#">${person[0]}</a>`;
    personalList.appendChild(element);
  });
}

function sortList() {
  let sortedList = personalDB.sort();

  return sortedList;
}

function handleButtonClick() {
    const sortedList = sortList();

    renderList(sortedList);
}

document.addEventListener("DOMContentLoaded", () => {
  renderList(personalDB);

  let btn = document.querySelector("button");
  btn.addEventListener("click", handleButtonClick);

  // let shedule = document.querySelector('.shedule');
  // shedule.className = 'shedule';
  // shedule.innerHTML = `<table>
  // <tr><th>Время записи</th></tr>
  // <tr><td>8:00</td></tr>
  // <tr><td>8:15</td></tr>
  // <tr><td>8:30</td></tr>
  // <tr><td>8:45</td></tr>
  // <tr><td>9:00</td></tr>
  // <tr><td>9:15</td></tr>
  // <tr><td>9:30</td></tr>
  // <tr><td>9:45</td></tr>
  // <tr><td>10:00</td></tr>
  // <tr><td>10:15</td></tr>
  // <tr><td>10:30</td></tr>
  // <tr><td>10:45</td></tr>
  // <tr><td>11:00</td></tr>
  // <tr><td>11:15</td></tr>
  // <tr><td>11:30</td></tr>
  // <tr><td>11:45</td></tr>
  // <tr><td>12:00</td></tr>
  // <tr><td>12:15</td></tr>
  // <tr><td>12:30</td></tr>
  // <tr><td>12:45</td></tr>
  // <tr><td>13:00</td></tr>
  // <tr><td>13:15</td></tr>
  // <tr><td>13:30</td></tr>
  // <tr><td>13:45</td></tr>
  // <tr><td>14:00</td></tr>
  // <tr><td>14:15</td></tr>
  // <tr><td>14:30</td></tr>
  // </table`;
});
