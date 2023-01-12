let products = {
    "chaussures de sport": 49.99,
    "pantalon": 29.99,
    "chemise": 15.99
}

function getProductPrice(productName) {
    return products[productName]
}

function getProductInfo(productNames) {
    const productNameList = productNames.split(',');
    let productInfo = "";
    for (let i = 0; i < productNameList.length; i++) {
      let productName = productNameList[i].trim();
      let productPrice = getProductPrice(productName);
      if (i === productNameList.length - 1) {
        productInfo += ` et ${productName} coûte ${productPrice}€.`;
      } else if (i === 0) {
        productInfo += `Les ${productName} coûtent ${productPrice}€`;
      } else {
        productInfo += `, ${productName} coûte ${productPrice}€`;
      }
    }
    return productInfo;
  }

  function getTotalPrice(productNames) {
    let totalPrice = 0;
    const productNameList = productNames.split(',');
    for (let i = 0; i < productNameList.length; i++) {
      let productName = productNameList[i].trim();
      let productPrice = getProductPrice(productName);
      totalPrice += productPrice;
    }
    return totalPrice;
  }
  
console.log(getProductInfo("chaussures de sport, pantalon, chemise"))
console.log(getTotalPrice("chaussures de sport, pantalon, chemise"))





// -----------------------------------------------------




