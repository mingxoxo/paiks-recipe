var i;
var tag = {
    h1: ["#spicy", "#sweet", "#chicken"],
    h2: ["#sweet", "#salty"],
    h3: ["#spicy", "#soft", "#chicken"],
    j1: ["#spicy", "#salty", "#soft"],
    j2: ["#spicy", "#salty", "#soy"],
    j3: ["#spicy", "#salty", "#soft"],
    y1: ["#spicy", "#sweet", "#chicken"],
    y2: ["#salty", "#soy", "#chicken"],
    y3: ["#sweet", "#salty", "#onion"],
    il1: ["#spicy"],
    il2: ["#sweet", "#salty", "#onion"],
    il3: ["#sweet", "#salty"]
}
$(document).ready(function () {
    (function () {
        for (var key in tag) {
            $("#" + key).hide();
        }// execute immediately-> remove all values ​​at first
    })()
    $("#all").click(function () {
        for (var key in tag)
            $("#" + key).show();
    });
    $("#hide").click(function () {
        for (var key in tag)
            $("#" + key).hide();
    });
    $("#tag1").click(function () {
        for (var key in tag) {
            $("#" + key).hide();
        }
        for (var key in tag) {
            for (i = 0; i < tag[key].length; i++) {
                if (tag[key][i] === "#spicy") {
                    $("#" + key).show(); break;
                }
            }
        }
    });
    $("#tag2").click(function () {
        for (var key in tag) {
            $("#" + key).hide();
        }
        for (var key in tag) {
            for (i = 0; i < tag[key].length; i++) {
                if (tag[key][i] === "#sweet") {
                    $("#" + key).show(); break;
                }
            }
        }
    });
    $("#tag3").click(function () {
        for (var key in tag) {
            $("#" + key).hide();
        }
        for (var key in tag) {
            for (i = 0; i < tag[key].length; i++) {
                if (tag[key][i] === "#chicken") {
                    $("#" + key).show(); break;
                }
            }
        }
    });
    $("#tag4").click(function () {
        for (var key in tag) {
            $("#" + key).hide();
        }
        for (var key in tag) {
            for (i = 0; i < tag[key].length; i++) {
                if (tag[key][i] === "#salty") {
                    $("#" + key).show(); break;
                }
            }
        }
    });
    $("#tag5").click(function () {
        for (var key in tag) {
            $("#" + key).hide();
        }
        for (var key in tag) {
            for (i = 0; i < tag[key].length; i++) {
                if (tag[key][i] === "#soft") {
                    $("#" + key).show(); break;
                }
            }
        }
    });
    $("#tag6").click(function () {
        for (var key in tag) {
            $("#" + key).hide();
        }
        for (var key in tag) {
            for (i = 0; i < tag[key].length; i++) {
                if (tag[key][i] === "#soy") {
                    $("#" + key).show(); break;
                }
            }
        }
    });
    $("#tag7").click(function () {
        for (var key in tag) {
            $("#" + key).hide();
        }
        for (var key in tag) {
            for (i = 0; i < tag[key].length; i++) {
                if (tag[key][i] === "#onion") {
                    $("#" + key).show(); break;
                }
            }
        }
    });
});