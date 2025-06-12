//Superclasse   
class Ave{
    
    //método
    voar(){
        console.log("A ave voa");
    
    }
}
//Subclasse
class Pinguim extends Ave {
    //Polimorfismo
    voar(){
        console.log("Pinguins não podem voar")
    }
}
//Instanciando
let ave = new Ave();
let pinguim = new Pinguim();
ave.voar();
pinguim.voar();