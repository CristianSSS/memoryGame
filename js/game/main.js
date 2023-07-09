import MemoryGame from "./memoryGame.js";


const prueba = new MemoryGame();


prueba.drawTable();

let toques = 0;

$(".card-game").click((e)=>{

    const frontCard = e.currentTarget.children[0];
    const backCard = e.currentTarget.children[1];

    if(toques < 2){

        frontCard.classList.add("front-active");
        backCard.classList.add("back-active");

        toques++;

    }else{
        backCard.addEventListener("transitionend",()=>{
            
            



        });
    }

    

   
    
});


