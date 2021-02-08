export const getPaymentSumCart = foodData => { //Get the complete sum to pay for the ordered food of user

    let paymentSum = 0;

    foodData.map((values, index) => {

        paymentSum = paymentSum + (values.amount * values.price)
        return null;
    })

    return paymentSum.toLocaleString('de-DE', {
        style: 'currency', currency: 'EUR', minimumFractionDigits: 2
    })
}