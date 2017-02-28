$(document).ready(function() {
    $('#subt').click(function() {
        alert("clicked. ajax실행합니다.");
        var userid = $("#reg_id").val();
        var userpw = $("#reg_pw").val();
        var userrpw = $("#reg_rpw").val();
        var username = $("#reg_username").val();

        if (userpw != userrpw) {
            $("#rpw").addClass('has-error');
        }
        else {
            var regdata = "username="+username+"&id=" + userid + "&password=" + userpw;
            $.ajax({        
                type: "POST",
                url: "http://58.78.248.164:3000/register",
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
        }
    })
});
