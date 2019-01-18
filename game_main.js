function start(){
  
  console.log("hello world");
  alert("This is a test of webgl");
  
  var canvas = document.getElementById('test');
  var ctx = canvas.getContext('2d',{ alpha: false });
  ctx.fillStyle = 'green';
  ctx.fillRect(10, 10, 100, 100);
  
  document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
        alert('Left was pressed');
    }
    else if(event.keyCode == 39) {
        alert('Right was pressed');
    }
  });

}
