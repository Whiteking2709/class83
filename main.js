
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
var new_width = screen.width - 100;
var new_height = screen.height - 100;
var width = screen.width;
if(width < 992){
    document.getElementById("myCanvas").height = new_height;
    document.getElementById("myCanvas").width = new_width;
    document.body.style.overflow = "hidden";
}

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends
console.log("touchstart");
last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;

last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
        
    }

    canvas.addEventListener("touchmove", my_touchmove);
    
    function my_touchmove(e)
        
    
    {
console.log("touchmove");
         current_position_of_touchx = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;


        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touchx + "y = " + current_position_of_touchy);
        ctx.lineTo(current_position_of_touchx, current_position_of_touchy);
        ctx.stroke();
        }

        last_position_of_x = current_position_of_touchx; 
        last_position_of_y = current_position_of_touchy;
    }




    
    

