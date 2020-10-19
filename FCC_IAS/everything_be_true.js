function truthCheck(collection, pre) {
  for(const obj of collection){
    console.log(obj[pre])
    if(!!!obj[pre]){
      return false
    }
  }
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
