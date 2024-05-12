import inquirer from "inquirer"

// inquirer 
// array
// function
// operators

let todos : string [] = ["Shoaib","Zain"];

async function createTodo(todos:string[]){
  do{ let ans = await inquirer.prompt({
    type:"list",
    message:"select an operation",
    name: "select",
    choices:["Add","update","view","remove"],
   })
   if (ans.select== "Add"){
       let addTodo = await inquirer.prompt({
           type:"input",
           message:"add items in the list",
           name:"todo",
       });
       todos.push(addTodo.todo);
       todos.forEach(todo=> console.log(todo))
   }
   if (ans.select== "update"){
       let updatetodo = await inquirer.prompt({
       type:"list",
       message: "update items in the list",
       name:"todo",
       choices: todos.map(item=>item)

       })
       let addTodo = await inquirer.prompt({
           type:"input",
           message:"add items in the list",
           name:"todo",
   });
   let newtodo= todos.filter(val=>val !== updatetodo.todo)
   todos= [...newtodo,addTodo.todo];
   console.log(todos);
}
  
  if (ans.select== "view"){
   console.log("*** TO DO LIST ***");
   console.log(todos);
   console.log("********");

  }
  
if (ans.select== "remove"){
   let removetetodo = await inquirer.prompt({
       type:"list",
       message: "update items in the list",
       name:"todo",
       choices: todos.map(item=>item)
      });
      let newtodo= todos.filter(val=>val !== removetetodo.todo)
   todos= [...newtodo];
   console.log(todos);
} 
    
  } while(true)
    
}

createTodo(todos);