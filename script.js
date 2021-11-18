
const next=document.querySelector(".next");
const previous=document.querySelector(".previous");
const images=["images/image-product-1.jpg","images/image-product-2.jpg","images/image-product-3.jpg","images/image-product-4.jpg"];
const img=document.getElementById("image-product-1");
let counter=document.getElementById("counter");
const minus=document.querySelector(".minus");
const plus=document.querySelector(".plus");
const thumbnails=document.querySelectorAll(".thumbnail");
const largeImg=document.getElementsByClassName("image_1Large")[0];
const lightBox=document.getElementById("lightbox");
const iconClose1=document.getElementById("icon-close");
const addToCartBtn=document.getElementsByClassName("add-to-cart")[0];
const cart=document.getElementsByClassName("cart-div")[0];
const filledCart=document.getElementsByClassName("filled-cart")[0];
const emptyCart=document.getElementsByClassName("empty-cart")[0];
const iconMenu=document.getElementsByClassName("icon-menu")[0];
const lightBoxMenu=document.getElementById("lightbox-menu");
const iconClose2=document.getElementById("icon-close-menu");
const iconDelete=document.getElementById("icon-delete")
const totalPrice1=document.getElementById("total-price-1")
const totalPrice2=document.getElementById("total-price-2")
            
let counterValue=counter.innerHTML;
let i=0;
let j=0;


function switchLargeImg(x){
   thumbnails[x].addEventListener("click", ()=>{
      largeImg.src=images[x]
      /*thumbnails[x].style.border="2px solid hsl(26, 100%, 55%)"*/

   })

}

switchLargeImg(0)
switchLargeImg(1)
switchLargeImg(2)
switchLargeImg(3)

iconMenu.addEventListener("click",()=>{
  lightBoxMenu.classList.add("active-menu")
})

iconClose1.addEventListener("click",()=>{
   lightBox.classList.remove("active")
})

iconClose2.addEventListener("click",()=>{
  lightBoxMenu.classList.remove("active-menu")
})


next.addEventListener("click", ()=>{
   i++
   if(i>images.length-1){
     i=0
   }
    img.src=images[i]
   
})

previous.addEventListener("click", ()=>{
   i--;
   if(i<0){
      i=images.length-1
   }
   img.src=images[i]
})

plus.addEventListener("click",()=>{
   ++counterValue
   document.getElementById("counter").innerHTML=counterValue
    cart.setAttribute('data-count', counterValue);
    
})
minus.addEventListener("click",()=>{
   --counterValue
   if(counterValue<0){
      counterValue=0
   }else if(counterValue===0){
      cart.classList.remove('zero') 
   }
   document.getElementById("counter").innerHTML=counterValue 
   cart.setAttribute('data-count', counterValue);
    
})

largeImg.addEventListener("click",()=>{
   lightBox.classList.add("active");
   const newImgContainer=document.getElementById("new-img-con");
   const newImg=document.createElement("img");
   newImg.id="new-img";
   newImg.src=largeImg.src;
   const previousBtn=document.createElement("button")
   previousBtn.classList.add("prev-btn")
   const prevImg=document.createElement("img")
   prevImg.classList.add("prev-img")
   prevImg.src="images/icon-previous.svg"
   previousBtn.appendChild(prevImg)
   const nextBtn=document.createElement("button")
   nextBtn.classList.add("next-btn")
   const nextImg=document.createElement("img")
   nextImg.classList.add("next-img")
   nextImg.src="images/icon-next.svg"
   nextBtn.appendChild(nextImg)
   while(newImgContainer.firstChild){
      newImgContainer.removeChild(newImgContainer.firstChild)
   }
   newImgContainer.appendChild(newImg)
   newImgContainer.appendChild(previousBtn) 
   newImgContainer.appendChild(nextBtn)
   nextBtn.addEventListener("click",()=>{
      j++
      if(j>images.length-1){
      j=0
      }
      newImg.src=images[j]  
      console.log(newImg)
   })
   previousBtn.addEventListener("click", ()=>{
      j--;
      if(j<0){
         j=images.length-1
      }
      newImg.src=images[j]

   })
         
})

addToCartBtn.addEventListener("click",()=>{
         if(counterValue>0){
            cart.setAttribute('data-count', counterValue);
            cart.classList.toggle('zero') 
         }


        if (typeof code_happened === 'undefined') {
         window.code_happened = true;
         cart.addEventListener("click",()=>{
         if(counterValue>0){
            totalPrice1.innerHTML="$125 x"+counterValue
            totalPrice2.innerHTML="$"+125.00*counterValue
            filledCart.classList.toggle("selection1")
               }
            })
           
         }
         
})

cart.addEventListener("click", ()=>{
   if(counterValue==0){
      emptyCart.classList.toggle("empty-cart-no-display")
   }else{
      emptyCart.classList.remove("empty-cart-no-display")
   }
})

iconDelete.addEventListener("click",()=>{
     totalPrice1.innerHTML="$125 x"+(--counterValue)
     totalPrice2.innerHTML="$"+125.00*(counterValue)
     document.getElementById("counter").innerHTML=counterValue 
     cart.setAttribute('data-count', counterValue)
     if(counterValue<=0){
       filledCart.classList.toggle("selection1")
       cart.classList.toggle('zero') 
     }
              
})

