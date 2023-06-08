const customer = {

    firstName:" ",
    grandtotal: 0,
    coupon:true,
    subscription :true,
      
};

const custNew = (firstName) =>{
    firstName = ""
  
    return custNew;
}

const custCost = (amount, subscription, coupon) => {
    let grandtotal = 0;
    if(subscription){
        subscription = 25;
        grandtotal = grandtotal - subscription;
        console.log("Your grand total is",$(grandtotal))
    }
    else if(coupon){
        coupon = 10;
        grandtotal = grandtotal - coupon;
        console.log("Your grand total is",$(grandtotal))
    }
}


console.log(custNew("Timmy"),custCost(100,"subscription"))
console.log(custNew("Sarah"),custCost(300,coupon))
console.log(custNew("Rocky"),custCost(200,subscription))