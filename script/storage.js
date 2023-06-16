'use strict';
function Storage(view) {

    let self = this;

    const url = 'https://fe.it-academy.by/AjaxStringStorage2.php';
    const stringName='HRYHORYEVA_VI_RECORD_CARS_TEST';
    let updatePassword;


    class User {
        constructor(name, score) {
            this.name = name;
            this.score = score;

        }
    }

    self.storeInfo = function () {
        updatePassword = Math.random();
        $.ajax( {
                url : url, type : 'POST', cache : false, dataType:'json',
                data : { f : 'LOCKGET', n : stringName, p : updatePassword },
                success : lockGetReady, error : errorHandler
            }
        );
    }

    function lockGetReady(response) {
        if (response.error !== undefined)
            alert(response.error);
        else {
            let currentUser = new User(player, score);

            let users;

            if (response.result === '') {
                users = [];
            } else {
                users = JSON.parse(response.result);
            }

            // let isCurrentUserExists = false;
            // for (let i = 0; i < users.length; i++) {
            //     if (currentUser.name === users[i].name) {
            //         users[i].score = currentUser.score;
            //         isCurrentUserExists = true;
            //         break;
            //     }
            // }
            //
            // if (!isCurrentUserExists) {
            //     users.push(currentUser);
            // }

            users.push(currentUser);

            $.ajax( {
                    url : url, type : 'POST', cache : false, dataType:'json',
                    data : { f : 'UPDATE', n : stringName,
                        v : JSON.stringify(users), p : updatePassword },
                    success : updateReady, error : errorHandler
                }
            );
        }
    }

    function updateReady(response) {
        if (response.error !== undefined)
            alert(response.error);
    }

    self.restoreInfo = function () {
        $.ajax(
            {
                url : url, type : 'POST', cache : false, dataType:'json',
                data : { f : 'READ', n : stringName },
                success : readReady, error : errorHandler
            }
        );
    }

    function readReady(response) {
        if ( response.error !== undefined )
            alert(response.error);
        else if (response.result !== '') {
            let users = JSON.parse(response.result);
            users.sort(compareScore);
            view.showRecordTable(users);
        }
    }

    function errorHandler(jqXHR,statusStr,errorStr) {
        alert(statusStr+' '+errorStr);
    }

    function compareScore(a, b) {
        return b.score - a.score;
    }

}
