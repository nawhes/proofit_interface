
var ip = "127.0.0.1";

$(document).ready(() => {
    $('#USEREMAIL').val("");
    $('#RECORD').val("");
});

$(document).on("click", "#BTN_INPUT", () => {
    var email = $('#USEREMAIL').val();
    var pin  = prompt("Enter the PIN");
    var record = $('#RECORD').val();
    var target = "http://" + ip + ":4000/api/smu/input";
    $.post(target,
        {
            email: email,
            pin: pin,
            record: record
        }, (data, status, res) => {
            
            var result = (res) => {
                return new Promise((resolve, reject) => {
                    if (res.responseJSON.status == 200) {
                        // var temp = JSON.parse(res.responseJSON.payload);
                        // var career = JSON.parse(temp);
                        // console.log(career);
                        // resolve(career);
                        resolve();
                    } else {
                        reject(res.responseJSON.message);
                    }
                });
            }
            result(res).then(() => {
                alert("done");
            }).catch((err) => {
                alert(err);
            });
        });
});

$(document).on("click", "#BTN_QUERY", () => {
    var email = $('#USEREMAIL').val();
    var pin  = prompt("Enter the PIN");
    var target = "http://" + ip + ":4000/api/smu/query";
    $.post(target,
        {
            email: email,
            pin: pin
        }, (data, status, res) => {
            
            var result = (res) => {
                return new Promise((resolve, reject) => {
                    if (res.responseJSON.status == 200) {
                        var temp = JSON.parse(res.responseJSON.payload);
                        console.log(temp);
                        resolve(temp);
                    } else {
                        reject(res.responseJSON.message);
                    }
                });
            }
            result(res).then((result) => {
                var strBuilder = [];
                for (key in result) {
                  if (key != 'class') {
                    if (result.hasOwnProperty(key)) {
                      strBuilder.push("<div style='font-size:20px;'>" + key + " : " + result[key] + "<br /> </div> ");
                    }
                  }
                }
                $('#PROOFIT').html(strBuilder.join(""));
            }).catch((err) => {
                alert(err);
            });
        });
});

$(document).on("click", "#BTN_DELETE", () => {
    var email = $('#USEREMAIL').val();
    var pin  = prompt("Enter the PIN");
    var target = "http://" + ip + ":4000/api/smu/delete";
    $.post(target,
        {
            email: email,
            pin: pin
        }, (data, status, res) => {
            
            var result = (res) => {
                return new Promise((resolve, reject) => {
                    if (res.responseJSON.status == 200) {
                        resolve();
                    } else {
                        reject(res.responseJSON.message);
                    }
                });
            }
            result(res).then(() => {
                alert("done");
            }).catch((err) => {
                alert(err);
            });
        });
});