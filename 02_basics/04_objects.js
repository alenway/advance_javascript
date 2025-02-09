// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "sammy@gmail.com",
    fullname: {
        userfullname: {
            firstname: "nitin",
            lastname: "soni"
        }
    }
}

// option chaning ?

// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "d", 4: "e"}

// const obj3 = {obj1, obj2}
// console.log(obj3);

// const obj3 = Object.assign({}, obj1,obj2)

// spread operator
const obj3 = {...obj1,...obj2}

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "demo@gmail.com",
    },
    {
        id: 1,
        email: "demo@gmail.com",
    },
    {
        id: 1,
        email: "demo@gmail.com",
    },
    {
        id: 1,
        email: "demo@gmail.com",
    },
    {
        id: 1,
        email: "demo@gmail.com",
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// destructuring

const course = {
    coursename: "js in hindi",
    price: "1000",
    courseInstructor: "Nitin"
}

// console.log(course.courseInstructor);
const {courseInstructor: instructor} = course

console.log(instructor);

// API's
// json
// {
//     "name": "nitin",
//     "cousename": "js in hindi",
//     "price": "free"
// }
