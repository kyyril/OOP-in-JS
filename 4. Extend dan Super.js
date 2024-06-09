// Extend addlah child class
// Super agar dapat memanggil properti pada parent dan mengubah/menambah tanpa mempengaruhi class lain

class Animals{ //parent
    constructor(name,age){ //semua hewan ada nama dan umur
        this.name = name;
        this.age = age;
    };

    eat (){ //semua hewan bisa makan
        return`${this.name} Eating!`
    }
}

class Cat extends Animals {//child
    constructor(name,age,lives){ 
        super (name,age); //memanggil parameer class parent
        this.lives = lives;
    }

    meaw (){ //kucing hanya bisa meaw
        return 'meawww!'
    };
};  

class Dog extends Animals{//child
    guk (){ //anjing hanya bisa gukguk
        return 'Gukguk!'
    }
}

const kuceng = new Cat('kuceng',4,9);
const anjing = new Dog('anjing',6);


console.log(kuceng)
console.log(kuceng.meaw())
console.log(kuceng.eat())
console.log()
console.log(anjing)//anjing tidak ada lives
console.log(anjing.guk())
console.log(anjing.eat())
