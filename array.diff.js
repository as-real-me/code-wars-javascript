function arrayDiff(a, b) {
    for(let i = 0; i < b.length; i++){
      for(let j = 0; j < a.length; j++){
        if(b[i] == a[j]){
          a.splice(j, 1); // Removing 1 item in the j index from a array
          j = -1; // When spliced one item, assigning j = -1 so that it can start counting from 0 by j++ (j = -1 + 1 = 0)
        }
      }
    }
    return a;
  }

  let result = arrayDiff([-14,-3,-14,-6,-15,-12,5,8,-17], [8,-3,-14,-12,-6,-15,5]);
  console.log(result);