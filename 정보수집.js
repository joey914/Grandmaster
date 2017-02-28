$(document).ready(function() {
    $('#subt').click(function() {
        alert("clicked. ajax실행합니다.");
        var name = $("#name").val();
        var kt = $("#kt").val();
        var pn = $("#pn").val();
        var email = $("#email").val();
        var nsc = $("#nsc").val();
        var wsc = $("#wsc").val();
        var btg = $("#bt").val();
        alert(name + kt + pn + email + nsc + wsc + btg);


            var regdata = "name=" + name + "&kakaotalk=" + kt + "&Phonenum=" + pn +"&email=" + email + "&Wantscore=" + wsc +"&Nowscore=" + nsc + "&battletag=" + btg;
            $.ajax({        
                type: "POST",
                url: "http://soylatte.kr:3000/bill",
                    data: regdata,
                    success: function(data)     {         //data - response from server
                    if (data.success == true) {
                        alert("회원가입 성공");
                    }
                },
                    error: function(xhr, status, error)     {
                    alert("서버에 오류생겼다 bro; jqXHR : " + xhr + " status : " + status + " error : " + error);
                }
            });
    })
});
