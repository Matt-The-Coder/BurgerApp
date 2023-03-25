
//POST
const insertBtn = document.querySelector("#Insert");
insertBtn.addEventListener("click", async ()=>{
    

        //values
       const username = document.querySelector("#username").value
       const password = document.querySelector("#password").value
       
        const values = {username,  password}
        console.log(values)
           const data = await fetch("http://localhost:5000/",{
               method: "POST",
               body:JSON.stringify(values),
               headers:{
                   'content-type': 'application/json'
               }
           })
           const result = await data.json()
           console.log(result)
       
})
//GET
const retbtn = document.querySelector("#retrieve");
retbtn.addEventListener("click", async ()=>{
    

           const data = await fetch("http://localhost:5000/",{
               method: "GET",
               headers:{
                   'content-type': 'application/json'
               }
           })
           const result =  await data.json()
           
              //values
       const username = document.querySelector("#username").value = result.username
       const password = document.querySelector("#password").value = result.password
       
       
})


