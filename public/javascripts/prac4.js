function get_time(){
  var content=document.getElementById("lastView");
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
      if(this.readyState == 4 && this.status ==200){
          content.innerText="The page was last viewed "+ this.responseText;
          console.log(this.responseText);
      }
  };
  xhttp.open('GET','/last.txt',true);
  xhttp.send();
}

function get_color(){
  var h = document.getElementById('h42');
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
          h.innerHTML=this.responseText;
          h.style.color=this.responseText;
      }
  };
  xhttp.open("GET","/color.txt",true);
  xhttp.send();
}


function get_time2(){
  let content_time=document.getElementById("p43");
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
      if(this.readyState == 4 && this.status ==200){
          var time43 = JSON.parse(this.responseText);
          for (let i = 0; i < time43.length; i++) {
              content_time.innerHTML+= "<li>"+time43[i]+"</li>";
          }
      }

  };
  xhttp.open('GET','/log.json',true);
  xhttp.send();
}

setInterval(get_time3, 10000);
function get_time3(){
  let content_time=document.getElementById("p43");
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
      if(this.readyState == 4 && this.status ==200){
          var time43 = JSON.parse(this.responseText);
          content_time.innerHTML='';
          for (let i = 0; i < time43.length; i++) {
              content_time.innerHTML+= "<li>"+time43[i]+"</li>";
          }
      }

  };
  xhttp.open('GET','/log-ro.json',true);
  xhttp.send();
}

function get_content(){
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange() = function(){
      if(this.readyState ==4 && this.status ==403 ){
          var div = document.getElementById('d45');
          div.innerHTML =`<p>not accepted</p>
          <button type="button" onclick="button()">click me! </button>`;
      }else if(this.readyState ==4 && this.status ==200){
          var div = document.getElementById('d45');
          div.innerHTML = this.responseText;
      }
  }
  xhttp.open('GET','/content.ajax',true);
  xhttp.send();
}

function accept(){
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange() = function(){
      get_content();
  };
  xhttp.open('GET','/accept',true);
  xhttp.send();
}