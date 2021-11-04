var employeeList = [ 
 { id:100001, name:"John", salary:3500, numOfLeave:0 }, 
 { id:100002, name:"Mandy", salary:3500, numOfLeave:1 }, 
 { id:100003, name:"Lily", salary:5000, numOfLeave:3 }, 
 { id:100004, name:"Jack", salary:6000, numOfLeave:2 } 
] 

const numberOne=()=>{
  const res=employeeList
  .find(res=>res.id===100002)
  if(typeof res !=="undefined")return console.log(res)
  console.log("data not found")
}
const numberTwo=()=>{
  const res=employeeList.find(res=>res.salary==3500 && res.numOfLeave===0)
   if(typeof res !=="undefined")return console.log(res)
  console.log("data not found")
}
const numberThree=()=>{
  for (var i = 0; i < employeeList.length; i++) {
    employeeList[i].amountToPay=employeeList[i].salary-(employeeList[i].numOfLeave*100)
  }
  console.log(employeeList)
}
numberOne()
unmberTwo()
numberThree()
