'use client'
import { useState } from "react";
import Input from "./Components/Input/Input";
import Graph from "./Components/Graph/Graph";

export default function Home() {
  const [principal, setPrincipal] = useState<number>(0);
  const [annualRate, setAnnualRate] = useState<number>(0);
  const [timesCompoundedPerYear, setTimesCompoundedPerYear] = useState<number>(1);
  const [years, setYears] = useState<number>(0);
  const [chartData, setChartData] = useState<{ years: number[]; amounts: number[] }>({ years: [], amounts: [] });

  const calculateCompoundInterest = (principal: number, annualRatePercent: number, timesCompoundedPerYear: number, years: number) => {
    const annualRate = annualRatePercent / 100;
    const amounts = [];
    const yearLabels = [];

    for (let i = 1; i <= years; i++) {
      const amount = principal * Math.pow((1 + annualRate / timesCompoundedPerYear), timesCompoundedPerYear * i);
      amounts.push(parseFloat(amount.toFixed(2)));
      yearLabels.push(i);
    }

    setChartData({ years: yearLabels, amounts });
  };

  const handleCalculate = () => {
    calculateCompoundInterest(principal, annualRate, timesCompoundedPerYear, years);
  };

  const calculator = [
    { label: 'เงินต้น', value: principal, onChange: (e: React.ChangeEvent<HTMLInputElement>) => setPrincipal(Number(e.target.value)), placeholder: 'เช่นจำนวนเงิน 10,000 บาท' },
    { label: 'ผลตอบแทนรายปี (%)', value: annualRate, onChange: (e: React.ChangeEvent<HTMLInputElement>) => setAnnualRate(Number(e.target.value)), placeholder: 'เช่น 3%, 5%' },
    { label: 'จำนวนครั้งที่ทบต่อปี', value: timesCompoundedPerYear, onChange: (e: React.ChangeEvent<HTMLInputElement>) => setTimesCompoundedPerYear(Number(e.target.value)), placeholder: 'เช่น 4 (สำหรับรายไตรมาส)' },
    { label: 'ระยะเวลา (ปี)', value: years, onChange: (e: React.ChangeEvent<HTMLInputElement>) => setYears(Number(e.target.value)), placeholder: 'เช่น 5 ปี, 10 ปี' }
  ];

  return (
    <div>
        <Graph data={chartData} />
      <div className="flex flex-row space-x-4 mt-4 justify-center">
        {calculator.map((field, index) => (
          <div key={index}>
            <p className="text-center">{field.label}</p>
            <div className="mt-2">
              <Input
                type='number'
                value={field.value}
                onChange={field.onChange}
                placeholder={field.placeholder}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center">
        <button
          className="border-2 border-black rounded-md p-2"
          onClick={handleCalculate}
        >
          คำนวณ
        </button>
      </div>
      {chartData.amounts.length > 0 && (
        <div className="mt-4 text-center">
          <p>เงินสะสมทั้งหมดหลังจาก {years} ปี คือ {chartData.amounts[chartData.amounts.length - 1]} บาท</p>
        </div>
      )}
    </div>
  );
}
