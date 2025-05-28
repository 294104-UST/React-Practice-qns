import React,{useState,useEffect} from "react";
import {
  getSales,
  calculateTotalSales,
  calculateTotalCashSale,
  calculateTotalCreditSale,
  calculateBuyerWithMostSale
} from "./report";


const Dashboard=()=>{
    const [totalSales, setTotalSales] = useState(0);
  const [totalCashSales, setTotalCashSales] = useState(0);
  const [totalCreditSales, setTotalCreditSales] = useState(0);
  const [mostSalesBuyer, setMostSalesBuyer] = useState({ buyerName: "", saleTotal: 0 });

  useEffect(()=>{
    const fetchSales=async ()=>{
        const sales=await getSales();
        setTotalSales(calculateTotalSales(sales));
        setTotalCashSales(calculateTotalCashSale(sales));
        setTotalCreditSales(calculateTotalCreditSale(sales));
        setMostSalesBuyer(calculateBuyerWithMostSale(sales));
    }
    fetchSales();
  },[]);

  return(
    <div>
        <h2>Total sales</h2>
        <p>{totalSales}</p>
        <h2>Total Cash Sales</h2>
        <p>{totalCashSales}</p>
        <h2>Total Credit Sales</h2>
        <p>{totalCreditSales}</p>
        <h2>Buyer with Most Sales</h2>
        <p>{mostSalesBuyer.buyerName}</p>
        <p>{mostSalesBuyer.saleTotal}</p>
    </div>
  );
};
export default Dashboard;