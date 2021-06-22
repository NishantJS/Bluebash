// find intersection of two arrays

function findIntersection(arr1, arr2) {
  let largest =
    arr1.length > arr2.length
      ? { arr: arr1, length: arr1.length, smallest: arr2 }
      : { arr: arr2, length: arr2.length, smallest: arr1 }; 

  let inter=[];
    for (let j = 0; j < largest.smallest.length; j++){
      for (let i = 0; i < largest.length; i++){
        if (largest.smallest[j] === largest.arr[i]) {
          inter.push(largest.arr[i]);
      }
    }
  }

  return inter;
}

let arr1 = [1,3,1,3,3,5]

let arr2 = [3, 5, 6]

// removing duplicates array elements
let removeDups = (arr) => {
  let unique = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === arr[i - 1]) { }
    else unique.push(arr[i])
  }
  return unique
}

// sorting array using bubble sort algorithm
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr.length; j++){
      if (arr[i] < arr[j]) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp;
      }
    }
  }

  return arr
}

let inter = findIntersection(arr1, arr2)
let sorted = bubbleSort(inter)
let intersection = removeDups(sorted)


console.log({ intersection });

/* Input 
      arr1 = [1, 3, 1, 3, 3, 5];
      arr2 = [3, 5, 6];

   Output
      [3,5]
*/