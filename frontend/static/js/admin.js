//input and button of createProduct
const cname = document.querySelector("#Cname");
const cprice = document.querySelector("#Cprice")
const insbtn = document.querySelector("#ins");
// input and button of updateProduct
const uid = document.querySelector("#Uid");
const uname = document.querySelector("#Uname");
const uprice = document.querySelector("#Uprice")
const updbtn = document.querySelector("#upd");
// input and button of deleteProduct
const did = document.querySelector("#Did")
const delbtn = document.querySelector("#del");


document.addEventListener("DOMContentLoaded", ()=>{

insbtn.addEventListener("click", async()=>{
    const datas = {name: cname.value, price: cprice.value}
    
   const data = await fetch("/insertProduct", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify(datas)
        
    })
    const result = await data.json()
    
} )
updbtn.addEventListener("click", async()=>{
    const datas = {id: uid.value, name: uname.value, price: uprice.value}
    
   const data = await fetch("/updateProduct", {
        method: "PUT", 
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify(datas)
        
    })
    const result = await data.json()
    console.log(result)
   
} )

delbtn.addEventListener("click", async()=>{
    const datas = {id: did.value}
    
   const data = await fetch("/deleteProduct", {
        method: "DELETE", 
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify(datas)
        
    })
    await data.json()
 
   
} )

})
