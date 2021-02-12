
const areaOfTriangle = ()=> {
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
let base
let height
const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question('What is the base of the triangle? ', (input) => {
      base = input
      resolve()
    })
  })
}

const question2 = () => {
  return new Promise((resolve, reject) => {
    rl.question('What is the height of the triangle? ', (input) => {
      height = input
      resolve()
    })
  })
}

const main = async () => {
  await question1()
  await question2()
  console.log(base * height/2);
  rl.close()
}

main()
}


areaOfTriangle({base:4, height: 5})