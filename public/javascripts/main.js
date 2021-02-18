(function(){
$(window).on("resize", function(ev) {
  //console.info(window.innerWidth);
  if (window.innerWidth > 720) {
    $("nav ul").attr("style", "");
  }
});
function navHighlight(elem, home, active) {
    var url = location.href.split('/'),
        loc = url[url.length -1],
        link = document.querySelectorAll(elem);
    for (var i = 0; i < link.length; i++) {
        var path = link[i].href.split('/'),
            page = path[path.length -1];
        if (page == loc || page == home && loc == '') {
            link[i].parentNode.className += ' ' + active;
            document.body.className += ' ' + page.substr(0, page.lastIndexOf('.'));
            }
        }
    }
navHighlight('.mainNav ul li a', 'index.html', 'current'); /* menu link selector, home page, highlight class */
})();
function openTab(evt, findTab) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(findTab).style.display = "block";
  evt.currentTarget.className += " active";
}



// Add products to <table>
function studentAdd() {

  
  // First check if a <tbody> tag exists, add one if not
  if ($("#student tbody").length == 0) {
      $("#student").append("<tbody></tbody>");
  }
  // Append product to the table
  $("#student tbody").append("<tr>" +
      "<td>3</td>" +
      "<td>4</td>" +
      '<td><button class = "studentbtn" >Theo</button></td>' +
      "<td>13/12/2000</td>"+
      "</tr>");  

  $("#student tbody").append("<tr>" +
  "<td>9</td>" +
  "<td>1</td>" +
  '<td><button class = "studentbtn" >Lauren</button></td>' +
  "<td>18/04/1996</td>"+
  "</tr>"); 

}

$(document).ready(function(){
  $(".studentbtn").click(function(){
      location.href = "/studentinfo"
  });
});


function addItem() {
  console.log("pls work");
	var changeworkul = document.getElementById("dynamic-list");
	var helpfulThing = document.getElementById("helpfulThing");
	var changeworkli = document.createElement("li");
  changeworkli.classList.add("changework");
  //testList.value = helpfulThing.value;
	changeworkli.setAttribute('id', helpfulThing.value);
	 changeworkli.appendChild(document.createTextNode(helpfulThing.value));
	changeworkul.appendChild(changeworkli);
}


function removeItem() {
	var ul = document.getElementById("dynamic-list");
	var helpfulThing = document.getElementById("helpfulThing");
	var item = document.getElementById(helpfulThing.value);
	ul.removeChild(item);
}
function changeworkAdd() {
  if ($("#changework tbody").length == 0) {
    $("#changework").append("<tbody></tbody>");
  }

  // Append product to the table
  console.log("hitting here");
  $("#changework tbody").append("<tr>" +
      "<td>3</td>" +
      "<td>Visualisations</td>" +
      "<td>15/02/2021</td>"+
      "</tr>");  
}
var recognitionCanvas = document.getElementById("recognitionCanvas");
recognitionCanvas.width = 300;
recognitionCanvas.height = 300;
   
var ctx = recognitionCanvas.getContext("2d");
 
function drawLine(ctx, startX, startY, endX, endY,color){
    ctx.save();
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(startX,startY);
    ctx.lineTo(endX,endY);
    ctx.stroke();
    ctx.restore();
}
 
function drawBar(ctx, upperLeftCornerX, upperLeftCornerY, width, height,color){
    ctx.save();
    ctx.fillStyle=color;
    ctx.fillRect(upperLeftCornerX,upperLeftCornerY,width,height);
    ctx.restore();
}
 
var results = {
    "Happiness": 10,
    "Content": 14,
    "Anxious": 2,
    "Sad": 12
};
 
var Barchart = function(options){
    this.options = options;
    this.canvas = options.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.colors = options.colors;
  
    this.draw = function(){
        var maxValue = 0;
        for (var categ in this.options.data){
            maxValue = Math.max(maxValue,this.options.data[categ]);
        }
        var canvasActualHeight = this.canvas.height - this.options.padding * 2;
        var canvasActualWidth = this.canvas.width - this.options.padding * 2;
 
        //drawing the grid lines
        var gridValue = 0;
        while (gridValue <= maxValue){
            var gridY = canvasActualHeight * (1 - gridValue/maxValue) + this.options.padding;
            drawLine(
                this.ctx,
                0,
                gridY,
                this.canvas.width,
                gridY,
                this.options.gridColor
            );
             
            //writing grid markers
            this.ctx.save();
            this.ctx.fillStyle = this.options.gridColor;
            this.ctx.textBaseline="bottom"; 
            this.ctx.font = "bold 10px Arial";
            this.ctx.fillText(gridValue, 10,gridY - 2);
            this.ctx.restore();
 
            gridValue+=this.options.gridScale;
        }      
  
        //drawing the bars
        var barIndex = 0;
        var numberOfBars = Object.keys(this.options.data).length;
        var barSize = (canvasActualWidth)/numberOfBars;
 
        for (categ in this.options.data){
            var val = this.options.data[categ];
            var barHeight = Math.round( canvasActualHeight * val/maxValue) ;
            drawBar(
                this.ctx,
                this.options.padding + barIndex * barSize,
                this.canvas.height - barHeight - this.options.padding,
                barSize,
                barHeight,
                this.colors[barIndex%this.colors.length]
            );
 
            barIndex++;
        }
 
        //drawing series name
        this.ctx.save();
        this.ctx.textBaseline="bottom";
        this.ctx.textAlign="center";
        this.ctx.fillStyle = "#000000";
        this.ctx.font = "bold 14px Arial";
        this.ctx.fillText(this.options.seriesName, this.canvas.width/2,this.canvas.height);
        this.ctx.restore();  
         
        //draw legend
        barIndex = 0;
        var legend = document.querySelector("legend[for='recognitionCanvas']");
        var ul = document.createElement("ul");
        legend.append(ul);
        for (categ in this.options.data){
            var li = document.createElement("li");
            li.style.listStyle = "none";
            li.style.borderLeft = "20px solid "+this.colors[barIndex%this.colors.length];
            li.style.padding = "5px";
            li.textContent = categ;
            ul.append(li);
            barIndex++;
        }
    }
}
 
 
var myBarchart = new Barchart(
    {
        canvas:recognitionCanvas,
        seriesName:"Vinyl records",
        padding:20,
        gridScale:5,
        gridColor:"#eeeeee",
        data:myVinyls,
        colors:["#a55ca5","#67b6c7", "#bccd7a","#eb9743"]
    }
);


