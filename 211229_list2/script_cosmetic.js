const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline' 
const rootDiv=document.getElementById('root')
// 상품 정보에 대한 배열로부터 웹화면에 보여줄 DOM 객체로 이루어진 배열로 변환하기
// product 객체의 image_link, name, price, description 프로퍼티 사용하기
function buildElement(product){
    const item=document.createElement('div')
    item.className='product'
    const itemImgdiv=document.createElement('div')
    itemImgdiv.className='product-img'
    const itemImg=document.createElement('img')
    itemImg.src=`${product.image_link}`
    itemImgdiv.append(itemImg)
    const itemName=document.createElement('div')
    itemName.className='product-name'
    itemName.innerHTML=`${product.name}<br>(${product.price})`
    const itemDescription=document.createElement('div')
    itemDescription.className='product-description'
    itemDescription.innerHTML=`${product.description}`
    item.append(itemImgdiv,itemName,itemDescription)
    return item
}
// DOM 객체로 이루어진 배열을 사용하여 웹 화면에 상품 정보 보여주기
function displayProduct(product){
   rootDiv.appendChild(product)
}

fetch(API_URL)
.then(function(res){
    return res.json()
})
.then(function(products){
    console.log(products)

    // 상품 정보에 대한 배열로부터 웹화면에 보여줄 DOM 객체로 이루어진 배열로 변환하기
    const productsRefined = products.map(buildElement)
    
    // DOM 객체로 이루어진 배열을 사용하여 웹 화면에 상품 정보 보여주기
    productsRefined.forEach(displayProduct)
})
