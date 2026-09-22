//object literal
let person = {
        name: "John",
        age: 30,
        city: "New York",
        null:null,
        undefined:undefined,
        "Full name": "John Doe",
        displayInfo: function() {
            console.log(`Name: ${this.name}`,`Age: ${this.age}`,`City: ${this.city}`);
        },
        displayArrow: () => {
            console.log(this)
            console.log(`Name: ${this.name}`,`Age: ${this.age}`,`City: ${this.city}`);
        }
    };
    
    console.log(typeof person);
    person.displayInfo();
    person.displayArrow();
    console.log(person.name);
   
    console.log(person.null);
    
    console.log(person["Full name"]);

    const fnm= "Full name"
    console.log(person[fnm]);

    const {
        name,
        age,
        city:myCityName, 
        null: n
    } = person

    console.log(name,age,myCityName,n);

    //more about function
    function printData(fnm,lnm,city){
        this.name = fnm
      
        console.log(`this: ${this},${this.name}`);
        console.log(`First name: ${fnm}`,`Last name: ${lnm}`,`City: ${city}`);
        console.log(arguments);
        console.log(`arguments[0]: ${arguments[0]},arguments[1]: ${arguments[1]},arguments[2]: ${arguments[2]}`);
    }

    printData("John","Doe","New York");

    
