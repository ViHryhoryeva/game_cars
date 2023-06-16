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


    view.getMoveArrowLeft().addEventListener('touchstart', arrowTouchStartLeft, false);
    view.getMoveArrowLeft().addEventListener('touchend', arrowTouchEndLeft, false);

    view.getMoveArrowTop().addEventListener('touchstart', arrowTouchStartTop, false);
    view.getMoveArrowTop().addEventListener('touchend', arrowTouchEndTop, false);

    view.getMoveArrowRight().addEventListener('touchstart', arrowTouchStartRight, false);
    view.getMoveArrowRight().addEventListener('touchend', arrowTouchEndRight, false);

    view.getMoveArrowDown().addEventListener('touchstart', arrowTouchStartBottom, false);
    view.getMoveArrowDown().addEventListener('touchend', arrowTouchEndBottom, false);

    function arrowTouchStartLeft(eo) {
        eo.preventDefault();
        car.moveLeft();
    }
    function arrowTouchEndLeft(eo) {
        eo.preventDefault();
        car.stopMoveLeft();
    }
    function arrowTouchStartTop(eo) {
        eo.preventDefault();
        car.moveTop();
    }
    function arrowTouchEndTop(eo) {
        eo.preventDefault();
        car.stopMoveTop();
    }
    function arrowTouchStartRight(eo) {
        eo.preventDefault();
        car.moveRight();
    }
    function arrowTouchEndRight(eo) {
        eo.preventDefault();
        car.stopMoveRight();
    }
    function arrowTouchStartBottom(eo) {
        eo.preventDefault();
        car.moveBottom();
    }
    function arrowTouchEndBottom(eo) {
        eo.preventDefault();
        car.stopMoveBottom();
    }

}