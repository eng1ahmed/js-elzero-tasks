document.write('<h1>Elzero</h1>')
document.querySelector('h1').style = `color: blue;
font-size: 80px;
font-weight: bold;
text-align: center;
font-family: Arial`;
console.log('%cELZERO %cWEB %cSCHOOL','color:red;font-size:40px;','color:green;font-size:40px; font-weight:bold;','background-color:blue;color:white;font-size:40px;');
console.group('group 1');
console.log('Message One');
console.log('Message two');
console.group('child group');
console.log('Message One');
console.log('Message two');
console.group('grand child group');
console.log('Message One');
console.log('Message two');
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group('group 2');
console.log('Message One');
console.log('Message two');
console.table(["Elzero","Ahmed","Sameh","Gamal","Aya"]);

/* 
console.log("Iam In Console");
document.write("Iam In Page");
*\*/
// console.log("Iam In Console");
// document.write("Iam In Page");