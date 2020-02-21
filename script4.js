class Character{
    constructor(image,name,energy,hp,id){
        this.image=image;
        this.name=name;
        this.energy=energy;
        this.hp=hp;
        this.id=id;

    }
    
    display = function (){
        document.getElementById("img"+this.id).innerHTML=`<img class="character" src="${this.image}" alt="Hi Ed">`;
        document.getElementById(this.id).innerHTML=`Name: ${this.name} <br> Energy ${this.energy} <br> HP: ${this.hp}`;
            
    }
    attack = function(opponent,item){
        var newEnergy = opponent.energy - item.imagic;
        opponent.energy= newEnergy;
        //console.log(opponent.energy);
        opponent.display();
        
        if(newEnergy<=0){
        document.getElementById('console').innerHTML=`GAME OVER --- ${this.name} WON!!!`;
        }
        else{
        document.getElementById('console').innerHTML=`${this.name} is attacking with a <br> <img class="character2" src="${item.img}">`;    
        }
}
        //disply GAME OVER MESSAGE
        // display Yoshi is attacking toad with a item -- on the console
        // must use a condition
    }
    

const c1 = new Character("mario.png","Mario",100,10,"c1");
const c2 = new Character("yoshi.png","Yoshi",100,5,"c2");
//const c3 = new Character("shell.png","Goomba",80,15,"c1");

c1.display();
c2.display();


//c1.attack(c2);

class Item{
    constructor(iname,imagic,img){
        this.iname=iname;
        this.imagic=imagic;
        this.img=img;
    }
}

const item1 = new Item("Goomba",20,'shell.png');
const item2 = new Item('star',10,'star.png');
const item3 = new Item('Banana',5,'banana.png');

var items =[item1,item2,item3];

function select(){
    let selection = Math.floor(Math.random()*3);
    return items[selection];

}

//console.log(select());