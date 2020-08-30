var _data = [];
var _appointments = [];

function getnextMeeting(){
    d3.json('http://127.0.0.1:3000/nextMeeting', {
      method:"POST",
      body: JSON.stringify({
        user: document.getElementById("user").value
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(function(_data){
        console.log(_data);
        
        let htmlTag = d3.select('#dailyData');
        htmlTag.select("#dataTable").remove();
        var headlineData = ["Next case starts at","Priority","Client","Case Type", "Preparation", "court","Approx. Duration"];
        var table = d3.select("#dailyData").append("table").attr("id","dataTable");
        var headLine = table.append("thead").append("tr");
        headLine.selectAll("th").data(headlineData)//supplies data
              .enter()
              .append("th")
              .attr("class","headline")// set class for CSS
              .text(function(d){return d;});//Add text
        var tbody = table.selectAll("tbody").data(_data).enter().append("tbody")
        var dataLine = tbody.append("tr");
        dataLine.append("td").attr("class","tdLeft").text(function(d){return d["time"];});
        dataLine.append("td").attr("class","tdLeft").text(function(d){return d["priority"];});
        dataLine.append("td").attr("class","tdLeft").text(function(d){return d["client"];});
        dataLine.append("td").attr("class","tdLeft").text(function(d){return d["type"];});
        dataLine.append("td").attr("class","tdLeft").text(function(d){return d["preparation_done"];});
        dataLine.append("td").attr("class","tdLeft").text(function(d){return d["place"];});
        dataLine.append("td").attr("class","tdLeft").text(function(d){return d["workload"];});
        
      });
  }

function getMeetings(){
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
    _data = data;
       console.log(data);
       let htmlTag = d3.select('#meetingsData');
       htmlTag.select("#dataTable").remove();
       var table = d3.select("#meetingsData").append("table").attr("id","dataTable");
       var headlineData = ['Date','Time','Priority'];
       var headLine = table.append("thead").append("tr");
       headLine.selectAll("th").data(headlineData)//supplies data
             .enter()
             .append("th")
             .attr("class","headline")// set class for CSS
             .text(function(d){return d;});//Add text
       var tbody = table.selectAll("tbody").data(_data).enter().append("tbody")
       var dataLine = tbody.append("tr");
       dataLine.append("td").attr("class","tdleft").text(function(d){return d["date"];});
       dataLine.append("td").attr("class","tdleft").text(function(d){return d["time"];});
       dataLine.append("td").attr("class","tdleft").text(function(d){return d["priority"];});    
  });
}

function getClients(){
  d3.json('http://127.0.0.1:3000/getClients', {
    method:"POST",
    body: JSON.stringify({
      user: document.getElementById("user").value,
      client: document.getElementById("client").value
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(function(data){
       console.log(data);
       let htmlTag = d3.select('#clientsData');
       htmlTag.select("#dataTable").remove();
       var table = d3.select("#clientsData").append("table").attr("id","dataTable");
       var headlineData = ['1','2','3','4'];
       var headLine = table.append("thead").append("tr");
       headLine.selectAll("th").data(headlineData)//supplies data
             .enter()
             .append("th")
             .attr("class","headline")// set class for CSS
             .text(function(d){return d;});//Add text
       var tbody = table.selectAll("tbody").data(_data).enter().append("tbody")
       var dataLine = tbody.append("tr");
       dataLine.append("td").attr("class","tdleft").text(function(d){return d["client"];});
       dataLine.append("td").attr("class","tdleft").text(function(d){return d["time"];});
       dataLine.append("td").attr("class","tdleft").text(function(d){return d["priority"];});    
    });
}

var currentDate = new Date();
var month = currentDate.getMonth();
var day = currentDate.getDate();
var year = currentDate.getUTCFullYear();
var fullDate = day + "." + month + "." + year;
console.log(fullDate);


