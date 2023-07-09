class MemoryGame{
    constructor(){

        this.cards = ["avion", "diana", "pata", "tierra", "ojo", "corazon", "foco", "telefono", "nieve", "estrella"];

        this.tablero =[];

        const totalCards = this.cards.length * 2;


        const searchPosition = (cardSelect) =>{
            
            let randomPosition =  Math.floor(Math.random() * totalCards);


            if(this.tablero[randomPosition]){

                searchPosition(cardSelect);

            }else{

                this.tablero[randomPosition] = cardSelect;
   
            }
  

        }

        
        for(let i=0 ; i < this.cards.length; i++){

            let cardSelect = this.cards[i]

            for(let b=0; b <2; b++ ){

              searchPosition(cardSelect);
              
              
            }

        }



    }


    drawTable(){

        const mainTable = document.getElementById("gameContainer");

        const fragment = document.createDocumentFragment();

        const sectionCard = document.createElement("section");
        sectionCard.classList.add("card-section");


        this.tablero.forEach((objeto, indexObjeto) =>{
            
            const card = document.createElement("div");
            card.classList.add("card-game");
            card.setAttribute("id",`${indexObjeto}`);

            const front = document.createElement("div");
            const back = document.createElement("div");

            front.classList.add("front");
            back.classList.add("back");

            const img = document.createElement("img");
            img.setAttribute("src", `./assets/logos-card/${this.tablero[indexObjeto]}.png`);
            img.setAttribute("alt", `memoryGame`);
            img.classList.add("card-img")
            


            back.appendChild(img);

            card.appendChild(front);

            card.appendChild(back);

            fragment.appendChild(card);

        })


        sectionCard.appendChild(fragment);

        mainTable.appendChild(sectionCard);

        

        
        
        


        



    }

}

export default MemoryGame;