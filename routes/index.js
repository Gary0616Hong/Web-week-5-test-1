var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

//3.1
let timestamp='';
router.get('/last.txt',function(req,res,next){
  res.send(timestamp);
  timestamp=new Date();
});

//3.2
let index=0;
router.get('/color.html',function(req,res,next){
  const color_array2=["red","yellow","green","blue"];
  const color=color_array2[index];
  index = (index+1)%color_array2.length;
  let html =`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <title>task3.2</title>
  </head>
  <body>
    <h1 id="${color}" style="color:${color};">${color}</h1>
  </body>
  </html>
  `;
  res.send(html);
});


//3.3
var timeList='';
router.get('/log.html',function(req,res,next){
  timeList = timeList + "<li>"+new Date()+"</li>";
  let html=`
<!DOCTYPE html>
<html lang="en">
    <head><title>task3.3</title></head>
    <body>
        <ul>
            ${timeList}
        </ul>
    </body>
</html>
  `;
  res.send(html);
});


//4.2
var index2=0;
router.get('/color.txt',function(req,res,next){
  const color_array2=["red","yellow","green","blue"];
  const color2=color_array2[index2];
  index2 = (index2+1)%color_array2.length;
  res.send(color2);
});


//4.3
let timeList2=[];
router.get('/log.json',function(req,res,next){
  timeList2.push(new Date());
  res.send(timeList2);
});

router.get('/log-ro.json',function(req,res,next){
  res.send(timeList2);
});


//4.5
let accept=false;
router.get('/accept',function(req,res,next){
  accept = true;
  res.sendStatus(200);
});

router.get('/content.ajax',function(req,res,next){
  if(!accept){
    res.status(403).send();
  }else{
    res.send('<p>p1..</p><p>p2..</p>');
  }
});
module.exports = router;