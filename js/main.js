var welcome =document.querySelector("#welcome")

var logout = document.querySelector("#logout") 

var links = document.querySelector("nav")

if(localStorage.getItem("firstname")){
  links.remove()
  welcome.style.display="block"
  welcome.innerHTML="welcome "+localStorage.getItem("firstname")
  logout.style.display="block"
}
let logOut = document.querySelector("#logout")
logOut.addEventListener("click",function(){
  localStorage.clear()

  setTimeout(()=> {
            window.location= "login.html";
       }, 1100)
})

let arrow =document.querySelector("#arrow i")
arrow.addEventListener("click",()=>{
  choosenProducts.style.display="block"
  arrow.style.transform ="rotateX(180deg)"
})

var allProducts = document.querySelector(".products")

let products =[
  {
    id:1,
    title:"t-shirt",
    price:"100$",
    category:"fashion",
    imgUrl:"images/t-shirt.png"
  },
  {
    id:2,
    title:"earpodes",
    price:"150$",
    category:"phone accessories",
    imgUrl:"images/earpods.png"
  },
  {
    id:3,
    title:"jacket",
    price:"120$",
    category:"fashion",
    imgUrl:"images/jacket.png"
  },
  {
    id:4,
    title:"sports bottle",
    price:"50$",
    category:"sport",
    imgUrl:"images/bottle.png"
  },
  {
    id:5,
    title:"glasses",
    price:"80$",
    category:"men accessories",
    imgUrl:"images/glasses.png"
  },
  {
    id:6,
    title:"cap",
    price:"20$",
    category:"men accessories",
    imgUrl:"images/cap.png"
  },
  {
    id:7,
    title:"backbag",
    price:"110$",
    category:"bags",
    imgUrl:"images/backbag.png"
  },
  {
    id:8,
    title:"sports shoes",
    price:"80$",
    category:"sports",
    imgUrl:"images/shoes.png"
  },
  {
    id:9,
    title:"bag",
    price:"100$",
    category:"fashion",
    imgUrl:"images/bag.png"
  }
]

function drawItems(){
    let y =products.map((item) => {
      return`
           <div class="product-item col-4">
                    <img src="${item.imgUrl}" alt="">
                    <div class="description">
                         <h2>product : ${item.title}</h2>
                         <h2>price : ${item.price}</h2>
                         <h2>category : ${item.category}</h2>
                    </div>
                    <div class="actions">
                        <button id="add-to-cart" onClick="addTOCart(${item.id})">add to cart</button>
                        <i class="fa-solid fa-heart"></i>
                    </div>
                 </div>
      `
    })
    allProducts.innerHTML=y.join("")
}
drawItems()


let choosenProducts =document.querySelector(".choosen-products")
let choosenProductsDiv = document.querySelector("#title-of-choosen")
let numBadge =document.querySelector(".badge span")
let addedItem =[]

if(localStorage.getItem=("firstname")){
  function addTOCart(id){
    let choosenitem= products.find((item)=> item.id===id)
   //  choosenProducts.style.display="block"
    choosenProductsDiv.style.display="block"
    choosenProductsDiv.innerHTML+=`
    <div class="thecontent">
         <p>${choosenitem.title}</p>
         <div>
              <span id="numOf"></span>
              <span id="plus">+</span>
              <span id="minus">-</span>
         </div>
    </div>`
 
    ///  + , -

    let amount = document.querySelector("#numOf")
    let n =1
    amount.innerHTML=1
    let plus =document.querySelector("#plus")
    let minus =document.querySelector("#minus")
    
    plus.addEventListener("click",()=>{
      // let n =1
      amount.innerHTML=n++
    })

    minus.addEventListener("click",()=>{
      if(n>=1){
        amount.innerHTML=n--
      }else{
        let content =document.querySelector(".thecontent")
        content.remove()
      }
      
    })
    let choosenlength = document.querySelectorAll(".thecontent")
    numBadge.innerHTML= choosenlength.length

    addedItem =[...addedItem, choosenitem]
    localStorage.setItem("productsInCart",JSON.stringify(addedItem))
}
}else{
  window.location="login.html"
}

// if(choosenProductsDiv.innerHTML!=""){
  
// }


let searchBy =document.querySelector("select")
let search = document.querySelector(".search input")


