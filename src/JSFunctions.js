//Promise resolves callback hell problem

const newPromise = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => resolve("I am resolved"), 1000);
  } else {
    reject("I am rejected");
  }
});

newPromise()
  .then(resp => console.log(res))
  .catch(err => console.log(err));

//map
const arr = [1, 2, 3, 4, 5];

arr.map(i => i + 1);
arr.filter(i => i > 2); // Filter elements creater than 2
arr.includes(3); // check whether item is there
arr.includes(3, 1);

const obj1 = { id: 4 };
const newArr = [{ id: 1 }, { id: 2 }, { id: 3 }, obj1];
newArr.includes({ id: 2 }); // return false as 2 objects are diff
newArr.includes(obj1); // return true;

//Async await
const myFun = async () => {
  try {
    await SVGComponentTransferFunctionElement();
  } catch (error) {
    console.log("this is how we handle any exception in async await");
  }
};

//Memoization - Caching
function addTo80(n) {
  return n + 80;
}
addTo80(5); // Called again and again
let cache = {};
function memoizedTAddTo80(n) {
  if (n in cache) {
    return cache[n];
  } else {
    cache[n] = 5 + 80;
    return cache[n];
  }
}

console.log("1", memoizedTAddTo80(5));

//currying
//evaluating a function one step at a time
const multiply = (a, b) => a * b;
//closure helps the inner function to get access of the outer variable
const curriedMultiply = a => b => a * b;

curriedMultiply(5)(3);
//we can store a function which can be used at any point in the future
const curriedMultiplyBy5 = curriedMultiply(5);

// we want to use the curried function
curriedMultiplyBy5(4);
