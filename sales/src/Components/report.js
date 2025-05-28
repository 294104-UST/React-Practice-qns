import axios from 'axios'

export const getSales=async ()=>{
    const {data}= await axios.get('/sales.json')
    return data;
};

export const calculateTotalSales=(sales)=>{
    return sales.reduce((sum,sale)=>(sum+sale.saleTotal),0);
};

export const calculateTotalCashSale=(sales)=>{
    const data=sales.filter(sale=>sale.creditCard===false).reduce((sum,sale)=>(sum+sale.saleTotal),0);
    return data;
};

export const calculateTotalCreditSale=(sales)=>{
    const data=sales.filter(sale=>sale.creditCard===true).reduce((sum,sale)=>(sum+sale.saleTotal),0);
    return data;
};

export const calculateBuyerWithMostSale=(sales)=>{
    const buyerMap=sales.reduce((acc,sale)=>{
        acc[sale.buyerName]=sale.saleTotal+(acc[sale.buyerName]||0)
        return acc;
    },{});
    let max=0;
    let buyer='';
    for(let [buyerName,total] of Object.entries(buyerMap)){
        if(total>max){
            max=total;
            buyer=buyerName;
        }
    }
    return { buyerName: buyer, saleTotal: max };
};