'use strict'
function View() {

    let self = this;

    const menuForm = document.querySelector('.menu-form');
    const newGameBtn = document.querySelector('.game-btn');
    const recordsBtn = document.querySelector('.records-btn');
    const recordTable = document.querySelector('.table-records');
    const gameScore = document.querySelector('.game-score');
    const restartForm = document.querySelector('.game-off');
    const gamePlayerForm = document.querySelector('.player');
    const pauseBtn = document.querySelector('.pause-btn');
    const saveBtn = document.querySelector('.save');
    const playerNameField = document.getElementById('IName');
    const restartBtn = document.querySelector('.restart-btn');
    const errorName = document.querySelector('.errorName');

    const arrowTop = document.querySelector('.arrowTop');
    const arrowLeft = document.querySelector('.arrowLeft');
    const arrowRight = document.querySelector('.arrowRight');
    const arrowDown = document.querySelector('.arrowDown');


    self.getNewGameBtn = function () {
        return newGameBtn;
    }

    self.getRecordsBtn = function () {
        return recordsBtn;
    }

    self.showRecordTable = function (users) {

        let tableDiv = document.querySelector('.table-records');
        let table = document.createElement('table');
        let lineTable = document.createElement('tr');

        let cellHeader1 = document.createElement('th');
        cellHeader1.textContent = '№';
        let cellHeader2 = document.createElement('th');
        cellHeader2.textContent = 'Имя игрока';
        let cellHeader3 = document.createElement('th');
        cellHeader3.textContent = 'Рекорд игрока';


        lineTable.appendChild(cellHeader1);
        lineTable.appendChild(cellHeader2);
        lineTable.appendChild(cellHeader3);
        table.appendChild(lineTable);

        for (let i= 0; i < users.length && i < 9; i++) {
            //console.log(users[i])
            let currentRow = document.createElement('tr');
            let cellTable1 = document.createElement('td');
            cellTable1.textContent = (i+1).toString();
            let cellTable2 = document.createElement('td');
            cellTable2.textContent = users[i].name;
            let cellTable3 = document.createElement('td');
            cellTable3.textContent = users[i].score;


            currentRow.appendChild(cellTable1);
            currentRow.appendChild(cellTable2);
            currentRow.appendChild(cellTable3);
            table.appendChild(currentRow);

        }
        tableDiv.appendChild(table);
        recordTable.style.display = 'block';
    }



    self.showNewGameForm = function () {
        recordTable.style.display = 'none';
        menuForm.style.display = 'none';
        gamePlayerForm.style.display = 'block';
    }

    self.update = function (element, x, y) {
        element.style.transform = `translate( ${x}px, ${y}px )`;
    }

    self.setDisplay = function (element, value) {
        element.style.display = value;
    }

    self.updateScore = function () {
        gameScore.innerHTML = score.toString();
    }

    self.gameOffDisplay = function (value) {
        restartForm.style.display = value;
        const text = restartForm.querySelector('.text-score');
        text.innerHTML = score.toString();
    }

    self.pause = function () {
        console.log("pause")
        pauseBtn.children[1].style.display = 'block';
        pauseBtn.children[0].style.display = 'none';
    }

    self.unpause = function () {
        console.log("unpause")
        pauseBtn.children[1].style.display = 'none';
        pauseBtn.children[0].style.display = 'block';
    }

    self.saveFormHide = function () {
        gamePlayerForm.style.display = 'none'
    }

    self.getPauseBtn = function () {
        return pauseBtn;
    }

    self.getSaveBtn = function () {
        return saveBtn;
    }

    self.getPlayerName = function () {
        return playerNameField.value;
    }

    self.getRestartBtn = function () {
        return restartBtn;
    }

    self.restart = function () {
        window.location.reload();
    }

    self.getMoveArrowTop = function () {
        return arrowTop;
    }
    self.getMoveArrowLeft = function () {
        return arrowLeft;
    }
    self.getMoveArrowRight = function () {
        return arrowRight;
    }
    self.getMoveArrowDown = function () {
        return arrowDown;
    }

    // self.validName = function () {
    //     if (playerNameField.value === null) {
    //     }
    //     alert('Введите имя игрока');
    //     return false;
    // }
}