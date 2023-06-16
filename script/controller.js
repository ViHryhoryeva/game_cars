'use strict'
function Controller(car, view, storage) {

    document.addEventListener('keydown', function(event){
        const code = event.code;
        if (code === 'ArrowUp') {
            car.moveTop();
        } else if(code === 'ArrowDown') {
            car.moveBottom();
        } else if (code === 'ArrowLeft') {
            car.moveLeft()
        } else if (code === 'ArrowRight') {
            car.moveRight();
        }
    })

    document.addEventListener('keyup', function (event) {
        const code = event.code;
        if (code === 'ArrowUp') {
            car.stopMoveTop()
        } else if(code === 'ArrowDown') {
            car.stopMoveBottom()
        } else if (code === 'ArrowLeft') {
            car.stopMoveLeft()
        } else if (code === 'ArrowRight') {
            car.stopMoveRight()
        }
    })


    view.getRecordsBtn().addEventListener('click', () => {
        storage.restoreInfo();
    });

    view.getNewGameBtn().addEventListener('click', () => {
        view.showNewGameForm();
    });

    view.getPauseBtn().addEventListener('click', () => {
        if (state !== 0) {
            if (state === 1) {
                state = 2;
                view.unpause();
            } else {
                state = 1;
                view.pause();
            }
        }
    });

    view.getSaveBtn().addEventListener('click', () => {
        player = view.getPlayerName();
        state = 2
        view.saveFormHide();

    });

    view.getRestartBtn().addEventListener('click', () => {
        state = 0;
        view.restart();
    });


    window.onbeforeunload = befUnload();

    function befUnload(eo) {
        eo = eo || window.event;
        if (state === 2) {
            eo.returnValue = 'Данные не будут сохранены!';
        }
    }

    window.onload = function () { // однократное нажатие на кнопку "Рекорды"
        document.getElementById('one-time').onclick = function () {
            this.disabled = 'disabled';
        }
    }


    view.getMoveArrowLeft.addEventListener('touchstart', car.moveLeft(), false);
    view.getMoveArrowLeft.addEventListener('touchend', car.stopMoveLeft(), false);

    view.getMoveArrowTop.addEventListener('touchstart', car.moveTop(), false);
    view.getMoveArrowTop.addEventListener('touchend', car.stopMoveTop(), false);

    view.getMoveArrowRight.addEventListener('touchstart', car.moveRight(), false);
    view.getMoveArrowRight.addEventListener('touchend', car.stopMoveRight(), false);

    view.getMoveArrowDown.addEventListener('touchstart', car.moveBottom(), false);
    view.getMoveArrowDown.addEventListener('touchend', car.stopMoveBottom(), false);

}