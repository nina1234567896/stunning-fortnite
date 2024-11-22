
let board = document.querySelector("#board")
let blocks = document.querySelectorAll(".tile");
let message =document.querySelector(".message");
let bitton = document.querySelector("button");
let par = document.querySelector(".message p");
let array =[]
let player =1;
let all=0;


for(let i=0;i<blocks.length;i++){
    blocks[i].addEventListener("click", function c(){
       
        if(player==1){
            this.innerText ="X" 
      this.style.color ="rgb(77, 209, 203,0.5)"
            player =2;
            all++

        } else if(player==2){
             this.innerText ="O" 
      this.style.color ="rgb(175, 189, 188,0.5)"
            player=1;
            all++
        } this.removeEventListener("click", c);Game();
    })
    
    }

    for(let i =0; i<blocks.length;i+=3){
        array.push([blocks[i],blocks[i+1],blocks[i+2]])           ;
        
    }

   function Game(){
    let columns = [];
    let diagonals=[[array[0][0],array[1][1],array[2][2]],[array[0][2],array[1][1],array[2][0]]]
      for (let col = 0; col < array[0].length; col++) { 
        let column = [];
        for (let row = 0; row < array.length; row++) { 
            column.push(array[row][col]); 
        }
        columns.push(column); 
    }
       for(let i=0;i<array.length;i++){ 
        if(array[i].every((el)=>el.innerText==="X")|| array[i].every((el)=>el.innerText==="O")){
          message.style.display ="flex";
          par.innerHTML = array[i].every((el)=>el.innerText==="X")===true?"X Won!" :"O Won!"
        
             
         }
           for(let j=0;j<array[i].length;j++){            
             }  
             if(columns[i].every((el)=>el.innerText==="X")|| columns[i].every((el)=>el.innerText==="O")){
                message.style.display ="flex";
                par.innerHTML = columns[i].every((el)=>el.innerText==="X")===true?"X Won!" :"O Won!"
             }
            }
            for(let i=0;i<diagonals.length;i++){ 
if(diagonals[i].every((el)=>el.innerText==="X")|| diagonals[i].every((el)=>el.innerText==="O")){
    message.style.display ="flex";
    par.innerHTML = diagonals[i].every((el)=>el.innerText==="X")===true?"X Won!" :"O Won!"
}
if(all===9){ par.innerHTML = "Draw..."   
    message.style.display ="flex";
   
}
}
           
        
    }
    
bitton.addEventListener("click",Reset);
    
    function Reset(){
        for(i=0;i<blocks.length;i++){
            blocks[i].innerText="";
            player=1;
            message.style.display="none";
            location.reload()
        }
    }
    

   
  