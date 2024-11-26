// map function

//Given an arrey, give me a new arrey in which every value is multiplied by 2
//[1,2,3,4,5]
//[2,4,6,8,10]

const input = [1, 2,3, 4, 5 ];

//  Solution
// const newArrey = [];

// for (let i = 0; i < input.length; i++)  {
//         newArrey.push(input[i] * 9)
// };

// console.log(newArrey); 

// Other solution with using map

function transform(i){
    return i * 9;
};
//Map(arr, transform);
const ans = input.map(transform);

console.log(ans);