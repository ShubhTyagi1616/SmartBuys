
// ye niche (formatprice) hai jisme (rupees ka sign) aur paise ko convert karenge with divided by 100..
// yaha use kia hai currency k liye (....INTL.NUMBERFORMAT....)
const FormatPrice = ({ price }) => {
    return Intl.NumberFormat("en-In",
        {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 2,
        }).format(price / 100);
}

export default FormatPrice;