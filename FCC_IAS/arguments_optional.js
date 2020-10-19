/* function addTogether(x, y) {
  console.log(typeof x,y)
    if(typeof x === 'number'){
      if(y === undefined){
        return (z => {
          if(typeof z === 'number'){
            return z+x
        }
      })
      }
      if(typeof y === 'number'){
        return x+y
      }
    return undefined
  }
  return undefined
}
 */
/* function addTogether(x, y) {
  console.log(typeof x,typeof y)
    if((typeof x === 'number') && (typeof y === 'number')){
      console.log('blue')
      return x+y
    }
    if(typeof x === 'number' && y === undefined){
    return (z => {
      if(typeof z === 'number'){
        return z+x
    }
    return undefined
    })
  }
  return undefined
}
 */
function addTogether(x, y) {
  const isNumber = (payload) => {
    return typeof payload === 'number'
  }
  if(isNumber(x)) {
    if (isNumber(y)) {
      return x+y
    } 
    if (y === undefined){
      return (z => {
          if(isNumber(z)){
            return z+x  
          }
        })
    }}

}