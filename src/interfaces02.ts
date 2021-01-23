interface Pessoa {
    nome: string;
    sexo: 'M' | 'F';
    idade: number
}

const p1: Pessoa = {
    nome: 'MP',
    sexo: 'F',
    idade: 6
}

const ola = (pessoa: Pessoa) => {
    console.log('ola', pessoa.nome)
}

ola(p1)

ola({
    nome: 'Liliam',
    sexo: 'F',
    idade: 40
})

class Product {

    name: string

    constructor(name: string){
        this.name = name
    }
}

const prod1: Product = new Product('iPhone')