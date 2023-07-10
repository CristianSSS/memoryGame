import MemoryGame from "./memoryGame.js";


const game = new MemoryGame();


game.drawTable();

let toques = 0;
let card1Id = null;
let card2Id = null;

$(".card-game").click((e)=>{

    const frontCard = e.currentTarget.children[0];
    const backCard = e.currentTarget.children[1];

    frontCard.classList.add("front-active");
    backCard.classList.add("back-active");

    toques++;
    console.log(toques);

    if(toques === 1){
        card1Id = e.currentTarget;
    }
        

    if(toques === 2){
        toques = 0;
        
        backCard.addEventListener("transitionend",()=>{

            card2Id = e.currentTarget;

         

            if(game.checkCoincidencia(card1Id.id,card2Id.id)){

                card1Id.children[0].classList.add("front-fijo")
                card1Id.children[1].classList.add("back-fijo")

                card2Id.children[0].classList.add("front-fijo")
                card2Id.children[1].classList.add("back-fijo")

            }else{
                
                card1Id = null;
                card2Id = null;

                $(".card-game").find(".front").removeClass("front-active")
                $(".card-game").find(".back").removeClass("back-active")
            }
            

        });
    }

 
});


