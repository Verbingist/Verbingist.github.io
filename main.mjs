function outsideRandomiser(thisSeed) {
    let seed = thisSeed
    return function randomize() {
        seed = seed * 23434654 % 34534645
        return seed % 10
    }
}

let mass = new Array(10).fill(0)
console.log(mass)
let j = 0;

for (let i = 0; i < 10000; i++) {
    let ch = outsideRandomiser(Math.floor(Date.now()+j / 1000))()
    j++
    switch (ch) {
        case 0: {
            mass[0]++
            break
        }
        case 1: {
            mass[1]++
            break
        }
        case 2: {
            mass[2]++
            break
        }
        case 3: {
            mass[3]++
            break
        }
        case 4: {
            mass[4]++
            break
        }
        case 5: {
            mass[5]++
            break
        }
        case 6: {
            mass[6]++
            break
        }
        case 7: {
            mass[7]++
            break
        }
        case 8: {
            mass[8]++
            break
        }
        case 9: {
            mass[9]++
            break
        }
    }
}

mass.forEach(function(item, index) {
    let number = document.createElement('p')
    number.textContent = `${index} count: ${item}`
    document.body.append(number)
})