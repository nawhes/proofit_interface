
var ip = "127.0.0.1";

$(document).on("click", "#BTN_READ", (event) => {
    var email = $('#USEREMAIL').val();
    var id = $('#DOCUMENTID').val();
    var target = "http://" + ip + ":4000/api/sk/read";
    $.post(target,
        {
            email: email,
            id: id
        }, (data, status, res) => {
            
            var result = (res) => {
                return new Promise((resolve, reject) => {
                    if (res.responseJSON.status == 200) {
                        var temp = JSON.parse(res.responseJSON.payload);
                        // var career = JSON.parse(temp);
                        // console.log(career);
                        // resolve(career);
                        console.log(temp);
                        resolve(temp);
                    } else {
                        reject(res.responseJSON.message);
                    }
                });
            }
            result(res).then((result) => {
                var strBuilder = [];
                var univBuilder = [];
                var licenseBuilder = [];
                var languageBuilder = [];
                for (key in result) {
                  if (key != 'class') {
                    if (key != 'digest') {
                      if (result.hasOwnProperty(key)) {
                        if (key == 'univ'){
                          for (var i = 0;i<result.univ.length;i++){
                            univBuilder.push("<div style='font-size:20px;'>" + key + "<br /> </div> ");
                            for(key2 in result.univ[i]) {
                              univBuilder.push("<div style='font-size:20px;text-indent: 2em;'>" + key2 + " : " + result[key][i][key2] + "<br /> </div> ");
                            }
                          }
                        } else if (key == 'license'){
                          for (var i = 0;i<result.license.length;i++){
                            licenseBuilder.push("<div style='font-size:20px;'>" + key + "<br /> </div> ");
                            for(key2 in result.license[i]) {
                              licenseBuilder.push("<div style='font-size:20px;text-indent: 2em;'>" + key2 + " : " + result[key][i][key2] + "<br /> </div> ");
                            }
                          }
                        } else if (key == 'language'){
                          for (var i = 0;i<result.language.length;i++){
                            languageBuilder.push("<div style='font-size:20px;'>" + key + "<br /> </div> ");
                            for(key2 in result.language[i]) {
                              languageBuilder.push("<div style='font-size:20px;text-indent: 2em;'>" + key2 + " : " + result[key][i][key2] + "<br /> </div> ");
                            }
                          }
                        }
                         else {
                          strBuilder.push("<div style='font-size:20px;'>" + key + " : " + result[key] + "<br /> </div> ");
                        }
                      }
                    }
                  }
                }
                var proofit = [];
                proofit = univBuilder.concat(licenseBuilder);
                proofit = proofit.concat(languageBuilder);
                proofit = proofit.concat(strBuilder);
                $('#PROOFIT').html(proofit.join(""));
            }).catch((err) => {
                alert(err);
            });
        });
});