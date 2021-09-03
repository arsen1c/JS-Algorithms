// const { ll } = require('../Algorithms/LinkedList/ll');

const arr = [2, 3, 4, 5, 6, 7, 8, 9];
const target = 11;

// 1. One pointer at each end approach
function findPairs(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while(start < end) {
    let currSum = nums[start] + nums[end];
    if (currSum === target) {
      return true;
    } else if(currSum < target) {
      start++;
    } else {
      end--;
    }
  } 

  return false;
};

function findMiddleNode(head) {
  let count = 0;
  let totalNodes = 0; 
  let curr = head;

  while(curr) {
    curr = curr.next;
    totalNodes++;
  }

  let middleNode = head;
  while(count < Math.floor(totalNodes / 2)) {
    middleNode = head.next;
    count++;
  }

  console.log(middleNode);
} 
// findMiddleNode(ll.head);

/**
 *  2. Different Paces
 * Example: Find the middle of a linked list 
*/
function findMiddleNode2(head) {
  slow = head;
  fast = head;

  while(fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
  } 
  console.log(slow);
}

// findMiddleNode(ll.head);


// Reverse an array using 2 pointers
function reverseArray(arr) {
  let length = arr.length;
  // Pointers
  let i = 0;
  let j = length - 1;

  while(i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
  console.log(arr);
}

reverseArray([1,2,3,4,5,6]);