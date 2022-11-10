async function fetchData(){
    let url="https://636cbb2bab4814f2b26c7037.mockapi.io/products"
    let res=await fetch(url)
    let data= await res.json()
    card(data)
  }



      function card(arr){
         
          arr.forEach((el)=>{
            let card=document.createElement("div")
            let image=document.createElement("img")
            image.src=el.avatar
             
             let detail=document.createElement("p")
             detail.innerHTML=el.description;
             
             let price=document.createElement("p")
             price.innerText=el.price
             let btn1=document.createElement("button")
             let btn2=document.createElement("button")
             btn1.innerHTML="Add to cart"
             btn2.innerHTML="♡"
             btn1.addEventListener("click",()=>{
              addCart(el)
             })
             btn2.addEventListener("click",()=>{
                addCart(el)
               })
             card.append(image,detail,price,btn2,btn1);
             document.getElementById("products").append(card)
          })
      }
      fetchData()


      function addCart(el){
        let arr=JSON.parse(localStorage.getItem("cart"))||[]
        let arr2=arr.filter((e)=>{
          return e.id==el.id
        })
         if(arr2.length!=0){
          alert("Product Already in Cart")
         }else{
          arr.push(el)
        
        localStorage.setItem("cart", JSON.stringify(arr))
        alert("Product Added To Cart")
         }
       
      }
       let filtBtn=document.querySelector("#filter")
         filtBtn.addEventListener("change",(el)=>{
          fetchData1()
         })
   

          
 