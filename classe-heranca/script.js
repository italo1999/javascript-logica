//Superclasse
class Animal {

//Atributo
constructor(nome) {
    this.nome = nome;

}
//método
fazerSom(){
    console.log("o animal fez um som ");
}
}
//Subclasse
class Cachorro extends Animal{

}
let rex = new Cachorro ("rex");
console.log(rex.nome);
rex.fazerSom();