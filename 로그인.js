$(document).ready(function() {
  $('#login').click(function() {
    var regdata = "password="+$("#inputPassword").val();
    $.ajax({        
        type: "POST",
        url: "http://soylatte.kr:3000/login",
            data: regdata,
            success: function(data)     { 
          
        },
            error: function(xhr, status, error)     {
            alert("서버에 문제가 있습니다. 관리자에게 문의하세요");
        }
    });
  });
});
