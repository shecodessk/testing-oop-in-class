class Friend {
constructor(name, power){
    this.name = name;
    this.power = power;
}


showName(){
    return ` Hi I am ${this.name} and I am a ${this.power}`
}
}



module.exports = { Friend }