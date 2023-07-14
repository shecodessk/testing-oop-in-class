const { Friend } = require("./components/friend")

class Person extends Friend{
    constructor(name, power, friend){
        super(name, power)
        this.friend = []

        
        
        this.addFriend(friend)
         //utilizing this when an instance is pass through a another class instance as an argument.
    }

    addFriend(friendName){
        if(friendName instanceof Friend){
             this.friend.push(friendName)
        }//utilizing this when you want to pass an instance through a method
    }
}


const hermione = new Friend('Hermione', 'Witch')
const harry = new Person('Harry', 'Wizzard', hermione)
const ron = new Friend('ron', 'Wizzard')
harry.addFriend(ron)

console.log(harry)






