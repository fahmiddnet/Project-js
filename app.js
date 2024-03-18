// Leed code solution 24

// var nums1 = [1,2,3,0,0,0];
// var m = 3;
// var nums2 = [2,5,6];
// var n = 3;

// var merge = function(nums1, m, nums2, n) {
//     nums1.splice(m, nums1.length - m, ...nums2);
//     nums1.sort((a, b) => a - b);
//     console.log(nums1);
// }

// merge(nums1, m, nums2, n);



// Leed code solution 25

// It is sorted with no values equaling val.

// // var k = removeElement(nums, val); // Calls your implementation
// var nums = [3,2,2,3]; // Input array
// var val = 3; // Value to remove

// var removeElement = function(nums,val){
//     let k = 0;
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[j] !== val) {
//         nums[k] = nums[j];
//         k++;
//       }
//     }
//     return k;
// }
// let k = removeElement(nums, val);
// console.log(nums.slice(0, k));


// ecma script solution 

// var arr = [0,1,2,2,3,0,4,2];
// var value = 2;

// var removeElement = function(arr, value){
//     let array = arr.filter(item => item !== value);
//     console.log(array);
// }

// removeElement(arr,value)


// 26. Remove Duplicates from Sorted Array

//var nums = [3,2,2,3]; // Input array
 // remove duplicate value

// Solution 1

//  let uniqueArr = [...new Set(nums)];
//    console.log(uniqueArr);


// Solution 2

// function removeDuplicates(data){
//   return data.filter((value,index) => data.indexOf(value) == index)
// }
// console.log(removeDuplicates(nums));



// find prime number


// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,12,43,23,32.545,545,433,343,43,43,43,43,4,34,3];

// function isprime(num){
//   for (let i=2; num > i; i++){
//     if(num % i === 0 ){
//       return false;
//     }
//   }
//   return num > 1;
// }

// console.log(array.filter(isprime));




// Filtering invalid entries from JSON

// const arr = [
//   { id: 15 },
//   { id: -1 },
//   { id: 0 },
//   { id: 3 },
//   { id: 12.2 },
//   {},
//   { id: null },
//   { id: NaN },
//   { id: "undefined" },
// ];
// let invalidEntries = 0;

// function filterByID(item) {
//   if (Number.isFinite(item.id) && item.id !== 0) {
//     return true;
//   }
//   invalidEntries++;
//   return false;
// }

// const arrByID = arr.filter(filterByID);

// console.log("Filtered Array\n", arrByID);
// // Filtered Array
// // [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

// console.log("Number of Invalid Entries =", invalidEntries);
// // Number of Invalid Entries = 5

// const fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * Filter array items based on search criteria (query)
 */

// function filterItems(arr, query) {
//   return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
// }

// console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
// console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']




// Using the third argument of callbackFn

// const names = ["JC63", "Bob132", "Ursula89", "Ben96"];
// const greatIDs = names
//   .map((name) => parseInt(name.match(/[0-9]+/)[0], 10))
//   .filter((id, idx, arr) => {
//     // Without the arr argument, there's no way to easily access the
//     // intermediate array without saving it to a variable.
//     if (idx > 0 && id <= arr[idx - 1]) return false;
//     if (idx < arr.length - 1 && id <= arr[idx + 1]) return false;
//     return true;
//   });
// console.log(greatIDs); // [132, 96]



// You work in a 100 floor building and you get 2 identical eggs. 
//You need to figure out the highest floor an egg can be dropped 
//without breaking. Find an algorithm that is minimizing number of 
//throws in the worst-case scenario. 

// function findHighestFloor() {
//   const totalFloors = 100;
//   const intervalSize = 10;
//   let currentFloor = intervalSize;
//   let previousFloor = 0;
//   let egg1 = currentFloor;

//   while (currentFloor <= totalFloors) {
//     if (dropEgg(egg1)) {
//       // Egg 1 broke, perform linear search
//       for (let i = previousFloor + 1; i <= currentFloor; i++) {
//         if (dropEgg(i)) {
//           return i - 1; // Egg broke, return previous floor
//         }
//       }
//     } else {
//       // Egg 1 didn't break, move to the next interval
//       previousFloor = currentFloor;
//       currentFloor += intervalSize;
//       egg1 = currentFloor;
//     }
//   }

//   return totalFloors; // Egg didn't break, return highest floor
// }

// function dropEgg(floor) {
//   // Simulate dropping the egg and return true if it breaks
//   // Replace this with your own implementation
//   // For demonstration purposes, let's assume the egg breaks on floor 50
//   return floor >= 50;
// }

// const highestFloor = findHighestFloor();
// console.log("The highest floor the egg can be dropped from without breaking is:", highestFloor);



