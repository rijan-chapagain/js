  var d = new Date();
  var day = d.getDay().toString(10);
  var date = d.getDate().toString(10);
  var month = d.getMonth().toString(10);
  var year = d.getFullYear().toString(10);
  var hours = d.getHours().toString(10);
  var minutes = d.getMinutes().toString(10);
  
  var result = day.fontcolor("red") + "/" + date.fontcolor("green") + "/" +  month.fontcolor("yellow") + "/"+
                year.fontcolor("blue") + "&nbsp; &nbsp;"  +  hours.fontcolor("brown") + ":"  + minutes.fontcolor("brown");
  
  document.getElementById("Result").innerHTML = result;
                                            


  var x = "User-agent header Information: " + navigator.userAgent;
  document.getElementById("bInfo").innerHTML = x;


  var nLinks = document.links.length;
  document.getElementById("numLinks").innerHTML = nLinks;

  var nForms = document.forms.length;
  document.getElementById("numForms").innerHTML = nForms;
