document.getElementById('card-1').addEventListener('click',function(){
    setPrice('price-1','total-price','final-price');
    addToList('product-1');
   })
   document.getElementById('card-2').addEventListener('click',function(){
    setPrice('price-2','total-price','final-price');
    addToList('product-2');
   })
   document.getElementById('card-3').addEventListener('click',function(){
    setPrice('price-3','total-price','final-price');
    addToList('product-3');
   })
   document.getElementById('card-4').addEventListener('click',function(){
    setPrice('price-4','total-price','final-price');
    addToList('product-4');
   })
   document.getElementById('card-5').addEventListener('click',function(){
    setPrice('price-5','total-price','final-price');
    addToList('product-5');
   })
   document.getElementById('card-6').addEventListener('click',function(){
    setPrice('price-6','total-price','final-price');
    addToList('product-6');
   })

// main function 
function setPrice(singlePrice,totalPrice,finalTotal){
    
    const elementtotalPriceNum = createDiscount(totalPrice);
    const elementpriceNum = createDiscount(singlePrice);

    

    const total = (elementtotalPriceNum + elementpriceNum).toFixed(2);
    setValueByid(totalPrice, total)
    setValueByid(finalTotal, total)
    if(total>0 && total>=200){
        document.getElementById('make-purchase').removeAttribute('disabled');
        document.getElementById('apply').removeAttribute('disabled');
    }else if(total>0){
        document.getElementById('make-purchase').removeAttribute('disabled');
    }
    else{
        document.getElementById('make-purchase').setAttribute('disabled',true);
        document.getElementById('apply').setAttribute('disabled',true);
    }
}
// add title in list 
function addToList(productTitle){
    const list = document.getElementById('item-list');
    const title = document.getElementById(productTitle).innerText;
    const count = list.childElementCount;
    const p = document.createElement('p');
    p.innerHTML =` ${count+1}.  ${title} `;
    p.classList.add('para')
    list.appendChild(p);
}

// apply coupon
function createDiscount(elementId){
    const element = document.getElementById(elementId);
    const elementString = element.innerText;
    const elementNum = parseFloat(elementString);
    return elementNum;
}
function setValueByid(elementId, newValue){
    const element = document.getElementById(elementId);
    element.innerText = newValue;
}
document.getElementById('apply').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const inputFieldvalue = inputField.value;
    inputField.value = '';
    const prevtotal = createDiscount('total-price');
    const finalTotal = prevtotal * 0.2;
    const discount = createDiscount('discount');
    const totalDiscount = (finalTotal + discount).toFixed(2);
    const finalPriceAfterDiscount = (prevtotal  - totalDiscount).toFixed(2);
    if(inputFieldvalue === 'SELL200'){
        setValueByid('discount', totalDiscount);
        setValueByid('final-price', finalPriceAfterDiscount);
        // document.getElementById('apply').removeEventListener("click", onClick);
        document.getElementById('apply').setAttribute('disabled',true);
    }else{
        alert('Please insert a valid cupon')
    }
});

// reset everything
document.getElementById('go-home').addEventListener('click',function(){
    setValueByid('total-price', '00.00');
    setValueByid('discount', '00.00');
    setValueByid('final-price', '00.00');
    const listItem = document.querySelectorAll('.para');
    listItem.forEach(item=>item.remove());
    
    document.getElementById('make-purchase').setAttribute('disabled',true);
    const popUp = document.getElementById('my_modal_4');
    popUp.modal('hide');
    
})





