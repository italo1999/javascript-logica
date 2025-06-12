//Nova classe 
class Carro{

//atributos
constructor(marca,modelo){
    this.marca = marca ;
this.modelo = modelo;
}
//método
exibirInfo(){
    return `Carro: ${this.marca} ${this.modelo}`;
}
}

//Instância
const meuCarro = new Carro("Fusca","1974");
console.log(meuCarro.exibirInfo());