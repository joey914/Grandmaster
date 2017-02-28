$(document).ready(function() {
    $('#subt').click(function() {
        var name = $("#name").val();
        var kt = $("#kt").val();
        var pn = $("#pn").val();
        var email = $("#email").val();
        var nsc = $("#nsc").val();
        var wsc = $("#wsc").val();
        var btg = $("#bt").val();


            var regdata = "name=" + name + "&kakaotalk=" + kt + "&Phonenum=" + pn +"&email=" + email + "&Wantscore=" + wsc +"&Nowscore=" + nsc + "&battletag=" + btg;
            $.ajax({        
                type: "POST",
                url: "http://soylatte.kr:3000/bill",
                    data: regdata,
                    success: function(data)     {         //data - response from server
                    if (data.success == true) {
                        alert("정상적으로 접수되었습니다.");
                    }
                },
                    error: function(xhr, status, error)     {
                    alert("서버에 문제가 있습니다. 관리자에게 문의하세요");
                }
            });
    })
});
