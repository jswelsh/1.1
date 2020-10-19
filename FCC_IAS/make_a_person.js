const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly

  let [firstName, lastName] = firstAndLast.split(' ');
  
  console.log(firstName,lastName)
  this.getFirstName = function() {
    return firstName;
  };
  this.getLastName = function(){
    return lastName
  }
  this.getFullName = function(){
    return firstName + ' ' + lastName
  }
  this.setFirstName = function(props){
    firstName = props
  }
  this.setLastName = function(props){
    lastName = props
  }
  this.setFullName = function(props){
    [firstName, lastName] = props.split(' ')
  }
  return firstAndLast;

};

const bob = new Person('Bob Ross');
bob.getFullName();
