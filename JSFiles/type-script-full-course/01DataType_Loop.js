/*
1. To Run :- terminal==>[tsc TsP_01_basic.ts] ==>[node TsP_01_basic.js]
2. cannot use the var to declare the variable in Typescript
3. var = let
*/
for (let i = 0; i < 5; i++) {
    setTimeout(function () { console.log(i); }, 100 * i);
}
const a = 4; //this is constant like final cannot be declare again
let c = "apple"; //means we can only reassign string type
let b = 10; //means we can only reassign number only
//if we use any then we can reuse that variable for number, double, or string 
let e = "ball";
e = "This is i'm reusing again";
e = 10;
e = 3.5;
let flag = false;
flag = true;
//Array
let numList = [1, 2, 3, 4, 5];
let strList = ['ant', 'bat', 'cat', 'dog'];
let strList2 = ['ant', 4, 2.5, 'dog'];
console.log(strList2[0]);
console.log(strList2[1]);
console.log(strList2[2]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMDFEYXRhVHlwZV9Mb29wLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdHlwZS1zY3JpcHQtZnVsbC1jb3Vyc2UvMDFEYXRhVHlwZV9Mb29wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VBSUU7QUFFRixLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxFQUFDO0lBQ2hCLFVBQVUsQ0FBQyxjQUFZLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0NBQ3JEO0FBRUQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQWEscURBQXFEO0FBQzlFLElBQUksQ0FBQyxHQUFVLE9BQU8sQ0FBQyxDQUFFLHdDQUF3QztBQUNqRSxJQUFJLENBQUMsR0FBVSxFQUFFLENBQUMsQ0FBTyx3Q0FBd0M7QUFFakUsOEVBQThFO0FBQzlFLElBQUksQ0FBQyxHQUFPLE1BQU0sQ0FBQztBQUNuQixDQUFDLEdBQUcsMkJBQTJCLENBQUE7QUFDL0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNQLENBQUMsR0FBRSxHQUFHLENBQUM7QUFFUCxJQUFJLElBQUksR0FBVSxLQUFLLENBQUM7QUFDeEIsSUFBSSxHQUFHLElBQUksQ0FBQztBQUVaLE9BQU87QUFDUCxJQUFJLE9BQU8sR0FBaUIsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7QUFFeEMsSUFBSSxPQUFPLEdBQWdCLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFFeEQsSUFBSSxRQUFRLEdBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyJ9