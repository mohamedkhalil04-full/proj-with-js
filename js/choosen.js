let productsInCart =localStorage.getItem("productsInCart")
let allProducts = document.querySelector(".choosenProducts")
let products =productsInCart ? JSON.parse(productsInCart): []
if(productsInCart){
   let item =JSON.parse(productsInCart)
   drawCarts(item)

}

function drawCarts(){
  let y = products.map((item)=>{
     return`
     <div class="col-6 row">
                <div id="img">
                    <img src="${item.imgUrl}" alt="">
                </div>
                 <div id="contentof">
                     <h2>product :${item.title} </h2>
                     <h2>price :${item.price} </h2>
                     <h2>category :${item.category} </h2>
                     <div class="actions-choosen">
                        <span id="numOf"></span>
                        <span id="plus">+</span>
                        <span id="minus">-</span>
                        <button id="remove" onClick="removeFromCart(${item.id})">Remove</button>
                     </div>
                 </div>

       </div>
     `
  })
  allProducts.innerHTML += y.join("")
}


// function removeFromCartCart(item){
//       let choosenitem= products.find((item)=> item.id===id)
//       choosenitem.remove()
//     }
