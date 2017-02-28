$(document).ready(function() {
  /*var jsonpar;
  var testjson = eval([{"name":"name","id":"id","pw":"pw"},{"name":"name1","id":"id1","pw":"pw1"}]);
  for(var i=0;i < testjson.length;i++)
  {
    document.getElementById("table").innerHTML += "<tr><td>"+testjson[i].name+"</td><td>"+testjson[i].id+"</td><td>"+testjson[i].pw+"</td></tr>"
  }*/
    $.ajax({        
        type: "GET",
        url: "http://soylatte.kr:3000/userdataa",
            success: function(data)     {
          var testjson = eval(data);
            for(var i=0;i < testjson.length;i++)
            {
              document.getElementById("table").innerHTML += "<tr><td>"+testjson[i].name+"</td><td>"+testjson[i].kakaotalk+"</td><td>"+testjson[i].email+"</td><td>"+testjson[i].Phonenum+"</td><td>"+testjson[i].email+"</td><td>"+testjson[i].Nowscore+"</td><td>"+testjson[i].Wantscore+"</td></tr>"
            }
        },
            error: function(xhr, status, error)     {
            alert("서버에 오류생겼다 bro; jqXHR : " + xhr + " status : " + status + " error : " + error);
        }
    });
});
