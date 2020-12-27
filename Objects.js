// we can use functions and other data structurs like dictionaries, methods and so on
// an object is a dictionary technically

var dic = new Object();
// you can declare it as {}

var myDict = {"name":"Liberty",
              "LastName":"Mupotsa"};

// console.log(myDict["name"]);

// iteration in a dictionary

// for (var member in myDict){
//     console.log(member);
// }

// this is how you iterate through a dictionary.
for (var  i in myDict){
    if (myDict.hasOwnProperty(i)){
        console.log(myDict[i]);
    }
}

var newDic = {"a":1,"b":2,"c":3,"d":4,"e":5}
// adding an element to the dictionary

newDic["f"]=6;
newDic.g=7;
let sln = [];
for (var key in newDic){ // this is the same as saying for key value in python dictionary
    var value = newDic[key];   
    sln.push([key,value]);
}

console.log(sln);

// You can also access the key values pairs directly.

console.log(newDic.a)

var twoSum = function(nums, target) {
    let compTable = {};
    for (var i in nums){
        var num = nums[i];
        if ((target - num) in compTable){
            console.log(compTable[target - num]);
            return [compTable[target - num],i];
        }
        else{
            compTable[nums[i]]=i;
        }
    }    
};

var test1 = twoSum([1,2,3,4,5],7)
console.log(test1);




// finding the difference between (for var i in something ) and (for const i in something);

function topKFrequent(words,k){
    let wordsFreqTable = {};
    for(const i in words){
        var word = words[i];
        console.log(word);
        if (word in wordsFreqTable){
            wordsFreqTable[word]=wordsFreqTable[word]+1;
        }
        else{
            wordsFreqTable[word]=1;
        }
    }
    
}
var words = ["i", "love", "leetcode", "i", "love", "coding"];
var k = 2;
var Test2 = topKFrequent(words,k);
