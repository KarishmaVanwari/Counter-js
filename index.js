console.log("jhscjch");

var plus = document.querySelector('#plus');
//console.log(plus)
var minus = document.querySelector('#minus');
var count = document.querySelector('.num')
var num = 0;


function add (){
    
    //count++
    num = num + 1;
    count.innerHTML=num;
    if(num>0){
        count.style.color="green";
    }
    else if(num<0){
        count.style.color="red";
    }
    else{
        count.style.color="black";
    }
    
    

}



function subtract (){
    
    //count++
    num = num - 1;
    count.innerHTML=num;
    if(num>0){
        count.style.color="green";
    }
    else if(num<0){
        count.style.color="red";
    }
    else{
        count.style.color="black";
    }
    
    

}