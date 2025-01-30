//function to generate a random capital letter [Char code : 65 to 90]
function getCap() {
    let rand1 = Math.floor(65 + (Math.random() * 26))
    let cap = String.fromCharCode(rand1)
    return cap
}

//function to generate a random capital letter [Char code : 97 to 122]
function getSmall() {
    let rand2 = Math.floor(97 + (Math.random() * 26))
    let small = String.fromCharCode(rand2)
    return small
}

//array of character codes of special characters
let spcArr = [35, 36, 37, 38, 42, 64]

//function to randomly select an array element
function getSpecial() {
    let rand3 = Math.floor((Math.random() * 6))
    let spec = String.fromCharCode(spcArr[rand3])
    return spec
}

//function to randomly get a capital,small or a special character
function producer() {
    let rand4 = Math.random()
    if (rand4 <= 0.40) {
        return getCap()
    }
    else if (rand4 <= 0.80) {
        return getSmall()
    }
    else {
        return getSpecial()
    }
}

class Password {
    static generate() {
        let scriptArr = []

        for (let index = 1; index < 9; index++) {
            scriptArr.push(producer())
        }
        let pass = scriptArr.join("") //to convert array into string
        return pass
    }
}
// console.log(getCap(), getSmall(), getSpecial())
let final = Password.generate()
console.log(final)