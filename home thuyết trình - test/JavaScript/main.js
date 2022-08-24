const btn = document.querySelectorAll(".buynow")
btn.forEach(function(a,index){

a.addEventListener("click",function(event){{
  var btnItem = event.target
  var product = btnItem.parentElement.parentElement
  var productImg = product.querySelector("img").src
  var productName = product.querySelector("h4").innerText
  var productPrice = product.querySelector("span").innerText
  addcart(productImg, productName, productPrice)
}})

})
function   addcart(productImg, productName, productPrice) {
  var addtr = document.createElement("tr")
  var cartItem = document.querySelectorAll("tbody tr")
 for (var i = 0 ; i < cartItem.length ; i++){
   var ProductS = document.querySelectorAll("h5")
   if (ProductS[i].innerHTML == productName){
     alert("Sản phẩm đã có trong giỏ hàng")
     return
   }
 }
  var trcon = '<tr><td style="display: flex; align-items: center"><img style="width: 100px" src="'+productImg+'" alt=""><h5>'+productName+'</h5></td><td><p><span>'+productPrice+'</span>.000<sup>đ</sup></p></td><td><input id ="slide-number" style="width: 40px; outline: none; text-align: center;" type="number" value="1" min="0"></td><td><span style ="cursor: pointer;" class="buttondelete">Xóa</span></td></tr>'
  addtr.innerHTML = trcon
  var cartTable = document.querySelector("tbody")
  //console.log(cartTable)
  cartTable.append(addtr)
  cartTotal()
  deleteCart ()
  inputchange()
}
/* ---------------------------------Total----------------------------------*/
function cartTotal () {
  var cartItem = document.querySelectorAll("tbody tr")
  var TotalAll1 = 0
  for (var i = 0 ; i < cartItem.length ; i++){
    var inputValue = cartItem[i].querySelector("input").value
    var productPrice = cartItem[i].querySelector("span").innerHTML
    var count = (''+productPrice).length
    console.log(count)
    if(count < 4){
      Total = inputValue * productPrice * 1000
    }
    else if(count >= 5){
      Total = inputValue * productPrice * 1000000
    }
    TotalAll1 = TotalAll1+Total
  }
  var cartTotalAll = document.querySelector(".price-cart span")
      cartTotalicon = document.querySelector("#cart span")
  cartTotalAll.innerHTML = TotalAll1.toLocaleString("de-DE")
  cartTotalicon.innerHTML = TotalAll1.toLocaleString("de-DE")
  //console.log(TotalAll2)

}
/* ------------------------------------------------------------------------*/
function deleteCart (){
  var cartItem = document.querySelectorAll("tbody tr")
  for (var i = 0 ; i < cartItem.length ; i++){
    var ProductD = document.querySelectorAll("tbody tr .buttondelete")
    ProductD[i].addEventListener("click", function(event) {
      var btnDelete = event.target
      var Itembtn = btnDelete.parentElement.parentElement 
      console.log(Itembtn)
      Itembtn.remove()
      cartTotal ()
    })
    
  }
}
function inputchange() {
  var cartItem = document.querySelectorAll("tbody tr")
  for (var i = 0 ; i < cartItem.length ; i++){
    var NumerPoDuct = cartItem[i].querySelector("input")
    NumerPoDuct.addEventListener("change", function(){
      cartTotal()
    })
  }
}
const cartClose = document.querySelector(".close")
const cartShow = document.querySelector("#cart")
cartShow.addEventListener("click", function(){
  document.querySelector(".cart").style.right = "0"
})
cartClose.addEventListener("click", function(){
  document.querySelector(".cart").style.right = "-100%"
})