function percCulc (price, sale) {


    var result = (price * sale) / 100;
    //var saleprice = price - savings;
    return result.toLocaleString();


}

document.write(percCulc(1000, 50), "</br></br>");