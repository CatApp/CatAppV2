
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

function onloadTab()
{ 
  var i,tablinks,anyactive,home;
  anyactive = false;
  tablinks = document.getElementsByClassName("tablinks");
  home = document.getElementById("Home")
  for(i = 0; i < tablinks.length; i++)
  {
    if(tablinks[i].classList.contains('active'))
    {
      anyactive = true;
    }
  }

  if(!anyactive)
  {
    for(i = 0; i < tablinks.length; i++)
    {
      if(tablinks[i].id.includes('H'))
      {
        tablinks[i].className += " active";
        
        var activeItemNewAnim = tablinks[i];

        home.style.display = "block"
        
      }
    }
  }

  // for(i = 0; i < tablinks.length; i++)
  // {
  //   if(tablinks[i].classList.contains('active'))
  //   {
  //     var activeItemNewAnim = tablinks[i];
  //   }
  // }
  var activeWidthNewAnimWidth = $(activeItemNewAnim).innerWidth();
  var itemPosNewAnimLeft = $(activeItemNewAnim).position();
  $(".hori-selector").css({
    "left":itemPosNewAnimLeft.left + "px",
    "width": activeWidthNewAnimWidth + "px"
  });

}

function openTab(evt, findTab) {
  // Declare all variables
  var i, tabcontent, tablinks, tabstudent;

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

  var tabsNewAnim = $('.tab');
  var selectorNewAnim = tablinks.length;
  // var activeItemNewAnim = tabsNewAnim.find('tablinks active')
  // var selectorNewAnim = $(".tabs").find(".selector");
  for(i = 0; i < tablinks.length; i++)
  {
    if(tablinks[i].classList.contains('active'))
    {
      var activeItemNewAnim = tablinks[i];
    }
  }
  var activeWidthNewAnimWidth = $(activeItemNewAnim).innerWidth();
  var itemPosNewAnimLeft = $(activeItemNewAnim).position();
  $(".hori-selector").css({
    "left":itemPosNewAnimLeft.left + "px",
    "width": activeWidthNewAnimWidth + "px"
  });
  // $(".tab").on("click",function(e){
  //   var activeWidthNewAnimWidth = $(this).innerWidth();
  //   var itemPosNewAnimLeft = $(this).position();  
  //   $(".hori-selector").css({
  //     "left":itemPosNewAnimLeft.left + "px",
  //     "width": activeWidthNewAnimWidth + "px"
  //   });
  // });
}

function onhoverTabs(tab)
{
  var activetab = document.getElementById(tab);

  if(activetab.classList.contains(".active")){
    var hover = document.getElementById("b")
    hover.style.boxShadow = "inset -5px -5px 5px white";
  }

}


function checkTherapist(StudentTID,Therapists){
  

  for (let i = 0; i< Therapists.length; i++) {
    
    if(Therapists[i].TID = StudentTID)
    {
      return Therapists[i].Fname;
    }
    
  }

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
  helpfulThing.value = "";
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
  //console.log("hitting here");
  $("#changework tbody").append("<tr>" +
      "<td>3</td>" +
      "<td>Visualisations</td>" +
      "<td>15/02/2021</td>"+
      "</tr>");  
}

function IsSlider(slider,recog)
{
  var s = document.getElementsByClassName(slider)[0];
  var Tchoice = recog;
  var children = s.children;
  var sclass = s.className;
  
  if(Tchoice != "slider-bar")
  {
    for (let i = 0; i < children.length; i++) {

      var name = children[i].nodeName;

      if(name != "SCRIPT")
      {
        children[i].style.visibility = "hidden";
      }
    }
    
    document.getElementById(slider).style.boxShadow = "none";
    document.getElementById(slider).style.margin = "auto";
    document.getElementById(slider).style.marginBottom  = "2%"

    var input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Please Enter answer here ...";
    input.className = "Textbox-" + slider; // set the CSS class
    s.appendChild(input); // put it into the DOM


  }

  

}