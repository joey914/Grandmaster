$(document).ready(function() {
  $('#login').click(function() {
    var regdata = "pw="+$("#inputPassword").val();
    $.ajax({        
        type: "POST",
        url: "http://soylatte.kr:3000/login",
            data: regdata,
            success: function(data)     {         //data - response from server
            if (data.success == true) {
            }
            else{
              alert("틀린 암호이거나 잘못된 접근입니다.");
            }
        },
            error: function(xhr, status, error)     {
            alert("서버에 문제가 있습니다. 관리자에게 문의하세요");
        }
    });
  });
});
