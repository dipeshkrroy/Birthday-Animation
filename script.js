var grid = document.getElementsByClassName("grid");
var items = grid[0].children;
//console.log(items);
/*for(i=0;i<items.length;i++){
   items[i].classList.add("animate");
}
for(i=0;i<items.length;i++){
    items[i].classList.remove("animate");
 }*/
 id=0;
 var timer =setInterval(bgchange,5000);
 function bgchange(){
    if(id>=items.length){
        removeClass();
        //clearInterval(timer);
        id=0;
    }else{
        changeColor(id);
        id++;
    }
 }
 function changeColor(id){
    console.log(id);
    items[id].classList.add("animate");
 }
 end = true;
 function removeClass(){
    for(i=0;i<items.length;i++){
        items[i].classList.remove("animate");
    }
    if(end){
        grid[0].style.backgroundImage="url('./assest/bday1.jpg')";
        end=!end;
    }else{
        grid[0].style.backgroundImage="url('./assest/bday2.jpg')";
        end=!end;
    }
    
 }
 
 for(i=0;i<items.length;i++){
    items[i].addEventListener("click",function(){
        if(end){
            clearInterval(timer);
            end =!end;
            console.log("clk");
        }else{
            timer =setInterval(bgchange,1000);
            end=!end;
            console.log("clk");
        }
     });
 }