function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let avg = arr.reduce( (acc, current) => {
    return acc + current;
  }, 0);

  avg /= arr.length;

  return { min: Number(min.toFixed(2)), max: Number(max.toFixed(2)), avg: Number(avg.toFixed(2)) };
}

function summElementsWorker(...arr) {
  let sum = arr.reduce( (acc, current) => {
    return acc + current;
  }, 0);
  return sum
}

function differenceMaxMinWorker(...arr) {
  if(arr.length == 0){
    return 0
  }
  
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  return max - min;
   
}

function differenceEvenOddWorker(...arr) {
  if(arr.length == 0){
    return 0;
  } 

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i]
    }
  }

  return sumEvenElement - sumOddElement
  
}

function averageEvenElementsWorker(...arr) {
  if(arr.length == 0){
    return 0;
  }
  
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }

  return sumEvenElement / countEvenElement;
  
  
}

function makeWork (arrOfArr, func) {

  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      
      maxWorkerResult = result;
    }
  }
  
  return maxWorkerResult;
}
