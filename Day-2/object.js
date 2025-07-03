// object is the pair of key and value
// key is the name of the property
// value is the value of the property
// object is a collection of properties

console.log(typeof Math);

const introduction = {
    // key: "value"
    name: "Roman",
    email: "contact@romanstha.com.np",
    intro : function() {
         console.log(`Hello, my name is ${this.name} and my email is ${this.email}`);
     // console.log(`Hello, my name is ${name} and my email is ${email}`);
        
    }
};

// Math.random(); // returns a random number between 0 and 1

introduction.intro();


// console.log(introduction.name)

// const name = introduction.name;   //object.key
// console.log(name);

// distructure Method
const {name} = introduction;
console.log(name);

// enum c ma chha js ma yeslai freeze object bata garna milchha
// enum Role{
//     user = "user",
//     uploader = "uploader",
//     admin = "admin"
// }

const Role = {
    user: "user",
    uploader: "uploader",
    admin: "admin"
};

Object.freeze(Role); // prevents modification of the object
Role.thirdperson = "admin"
console.log(Role);