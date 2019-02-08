function start(){
  
  console.log("hello world");
  alert("This is a test of webgl");
  
  var test = 100;
  
  var canvas = document.getElementById('test');
  var ctx = canvas.getContext('2d',{ alpha: false });
  ctx.fillStyle = 'green';
  ctx.fillRect(10, 10, 100, test);
  
  function test(a){
    
    if(a.keyCode == 13){
      test = 200;
    }
    
  }
  
  document.addEventListener('keydown', test(event));
  
  document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
        alert('Left was pressed');
    }
    else if(event.keyCode == 39) {
        alert('Right was pressed');
    }
  });

}
