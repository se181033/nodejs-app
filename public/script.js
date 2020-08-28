var dataLink = "http://127.0.0.1:3000/getMeeting";
var _data;
// Call interval function for periodic 
/*var intervall = setInterval(function() {
   getData();
}, 3000); */

getData();

function login(){
    console.log(document.getElementById("user").value);
    d3.json('http://127.0.0.1:3000/getMeetings', {
      method:"POST",
      body: JSON.stringify({
        user: document.getElementById("user").value
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(function(data){
         console.log(data);
        
    });
}

function getData(){console.log(dataLink);
    d3.json(dataLink).then(function(data){
        _data = data;
        drawDataTable();
        let tickLabels = [];
        for(i=0;i<Object.keys(_data).length;i++)
        {
            tickLabels.push("Asset " + (i+1).toString());
		}
      console.log(data);
    });
}
function drawDataTable(){
    d3.select("#dataDIV").select("#dataTable").remove();
    var _assets = Object.keys(_data);
    var headlineData = ["Next Case Starts in","Priority","Client","Case type","Case file", "Court", "Approx. Duration"];
    var table = d3.select("#dataDIV").append("table").attr("id","dataTable");
    var headLine = table.append("thead").append("tr");
        headLine.selectAll("th").data(headlineData)//supplies data
                .enter()
                .append("th")
                .attr("class","valDescription")// set class for CSS
                .text(function(d){return d;});//Add text   
    var tbody = table.selectAll("tbody").data(_assets).enter().append("tbody");
    var dataLine = tbody.append("tr");
    //dataLine.append("td").attr("class","tdLeft").text(function(d,i){return d;});
    dataLine.append("td").attr("class","tdLeft").text(function(d){return _data[d]["workload"];});
    dataLine.append("td").attr("class","tdRight").text(function(d){return _data[d]["priority"];});
    dataLine.append("td").attr("class","tdLeft").text(function(d){return _data[d]["client"];});
    dataLine.append("td").attr("class","tdLeft").text(function(d){return _data[d][""];});
    dataLine.append("td").attr("class","tdLeft").text(function(d){return _data[d]["preparation_done"];});
    dataLine.append("td").attr("class","tdLeft").text(function(d){return _data[d]["place"];});
    dataLine.append("td").attr("class","tdLeft").text(function(d){return _data[d]["time"];});
}

var currentDate = new Date();
var month = currentDate.getMonth();
var day = currentDate.getDate();
var year = currentDate.getUTCFullYear();
var fullDate = day + "." + month + "." + year;
console.log(fullDate);


