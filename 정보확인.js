$(document).ready(function() {
    $.ajax({        
        type: "GET",
        url: "http://soylatte.kr:3000/userdataa",
            success: function(data)     {
          var testjson = eval(data);
            for(var i=0;i < testjson.length;i++)
            {
              document.getElementById("table").innerHTML += "<tr><td>"+testjson[i].name+"</td><td>"+testjson[i].kakaotalk+"</td><td>"+testjson[i].email+"</td><td>"+testjson[i].Phonenum+"</td><td>"+testjson[i].Nowscore+"</td><td>"+testjson[i].Wantscore+"</td><td>"+testjson[i].battletag+"</td></tr>"
            }
        },
            error: function(xhr, status, error)     {
            alert("서버에 문제가 있습니다. 관리자에게 문의하세요");
        }
    });
});
