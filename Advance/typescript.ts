// let a: Number = 1123
// let b: String = 'bhadresh'
// let c: null = null
// let d: boolean = false

// const car: { color: string, speed: number } = { color:'red',speed:200 }
//  console.log(d);

// abstract class have abstract method that can be extends in child class 
abstract class Sum {
    num1: Number
    num2:Number
    constructor(a:Number,b:Number) { 
        this.num1 = a
        this.num2 = b
    }

    abstract add():void
}

// const obj = new Sum(2,3)
class Multi extends Sum { 
    n1:number
    n2:number
    constructor(a:number,b:number) { 
        super(a, b)
        this.n1 = a
        this.n2 = b
    }

    add() { 
       console.log(this.n1+this.n2);
       
    }
} 


const multi = new Multi(3, 2)
multi.add()