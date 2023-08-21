class Dog {
	constructor(name) {
		this.name = name;
	}
	static makeJet() {
		let answer = new Dog("Jet")
		return answer;
	}
	changeName(newName) {
		this.name = newName;
	}
	speak(word){
		return `${this.name} says ${word}`
	}
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Dog;
} catch {
	module.exports = null;
}