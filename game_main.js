function start(){
  
  console.log("hello world");
  alert("This is a test of the alert system");
  
  var canvas = document.getElementById('test');
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = 'green';
  ctx.fillRect(10, 10, 100, 100);

}
