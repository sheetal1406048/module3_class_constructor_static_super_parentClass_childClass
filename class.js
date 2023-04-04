//create new class

class myClass{
    myFunction1(){
        console.log("A")
    }
    myFunction2(){
        console.log("B")
    }
    myFunction3(){
        console.log("C")
    }    
}

var objClass = new myClass;
//objClass.myFunction2(); // output B

//---------------------------

//class constructor

class myclass1{
    constructor(){
        console.log("it is constructor!");
    }
}

//new myclass1();  //output it is constructor!


//----------------------------

//passing parameter through constructor


class myClass3{

    constructor(a,b){
        console.log(a+b);
    }
}

//new myClass3(10,20) //output 30

//---------------------------

//declaring class variable

class myClass4{

    constructor(a,b){
        this.firstNum = a;
        this.secondNum = b;
    }
    add(){
        let result = this.firstNum + this.secondNum;
        console.log(result)
    }
}

var obj4 = new myClass4(100,20)

//obj4.add() // output 120

//-------------------------


//static keyword

class myClass5{
    static hello(){
        console.log("Hello World");
    }
}

//myClass5.hello() //output Hello World

//----------------------

//Class Inheritance

//parent class and Child Class 
//declaration of child Class
//class Child_class_Name extends Parent_Class_Name
//child can modify the property of parent
//PARENT CLASS CANNOT MODIFY ITS OWN PROPERTY

class parentClass{
    hello1(){
        console.log("hello1 in parent")
    }
    hello2(){
        console.log("hello2 in parent")
    }

    hello3(){
        console.log("hello3 in parent")
    }

    
}

class childClass extends parentClass{
    hello3(){
        console.log("hello3 in parent overwriiten")
    }

    demo(){
        super.hello1(); //super keyword 
    }

}

var objNew = new childClass();
//objNew.hello1(); //output hello1 in parent

var objNewParent = new parentClass()
//objNewParent.hello2() //output hello2 in parent

//objNew.hello3() //output hello3 in parent OVER WRITTEN
//objNewParent.hello3()//output hello3 in parent
//objNew.demo() //hello1 in parent

//super class
//----------------------------------------















