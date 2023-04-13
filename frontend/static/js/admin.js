//input and button of createProduct
const cname = document.querySelector("#Cname");
const cprice = document.querySelector("#Cprice")
const insbtn = document.querySelector("#ins");
const cpictureloc = document.querySelector("#Cpictureloc");
// input and button of updateProduct
const uid = document.querySelector("#Uid");
const uname = document.querySelector("#Uname");
const uprice = document.querySelector("#Uprice")
const updbtn = document.querySelector("#upd");
const upictureloc = document.querySelector("#Upictureloc");
// input and button of deleteProduct
const did = document.querySelector("#Did")
const delbtn = document.querySelector("#del");
// truncate button
const truncatebtn = document.querySelector("#truncate")


document.addEventListener("DOMContentLoaded", ()=>{

  truncatebtn.addEventListener("click", async ()=>{
    const data = await fetch("/truncate", {
      method: "DELETE",
      headers:{
        "content-type": "application/json"
      }
    })

    const result = await data.json()
    alert(result.message)
  })

insbtn.addEventListener("click", async()=>{
    
  try {
    const datas = {name: cname.value, price: cprice.value, PicFileLocation: cpictureloc.value}
    
   const data = await fetch("/insertProduct", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify(datas)
        
    })
    const result = await data.json()
    alert(result.message)
    
  } catch (error) {
    alert(result.message)
  }
  
  
    
} )
updbtn.addEventListener("click", async()=>{

  try {
    const datas = {id: uid.value, name: uname.value, price: uprice.value, PicFileLocation: upictureloc.value}
    
    const data = await fetch("/updateProduct", {
         method: "PUT", 
         headers: {
             "Content-Type": "application/json"
           },
         body: JSON.stringify(datas)
         
     })
     const result = await data.json()
     alert(result.message)
  } catch (error) {
    alert(result.message)
  }
   
   
} )

delbtn.addEventListener("click", async()=>{
   
  try {
    // alert("Deleted Successfully!")
    const datas = {id: did.value}
    const data = await fetch("/deleteProduct", {
         method: "DELETE", 
         headers: {
             "Content-Type": "application/json"
           },
         body: JSON.stringify(datas)
         
     })
     const result = await data.json() 
     alert(result.message)
    
   
    
  } catch (error) {
    
    console.log(error)
    alert(result.message)
  }
 
 
   
} )

})
