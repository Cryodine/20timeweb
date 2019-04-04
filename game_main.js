function start(){
  
  console.log("hello world");
  alert("This game is still very in development");
  
  var canvas = document.getElementById('test');
  var ctx = canvas.getContext('2d',{ alpha: false });
  document.body.insertBefore(canvas, document.body.childNodes[0]);
  var interval = setInterval(update, 20);
  
  function cube(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.update = function(){
      ctx = canvas.getContext('2d',{ alpha: false });
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }
  
  var Player = new cube(100,100,"purple",40,40);
  
  function update(){
     ctx.clearRect(0,0,canvas.width,canvas.height);
     cube.x++;
     Player.update();
  }
  
  
  //function test(a){
    
  //  if(a.keyCode == 13){
    //  test = 200;
    //}
    
  //}
  
 // document.addEventListener('keydown', test(event));
  
  document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
        alert('Left was pressed');
    }
    else if(event.keyCode == 39) {
        alert('Right was pressed');
    }
  });

}
