import React, { useState, useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [returnRate, setReturnRate] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);
  const [investedAmount, setInvestedAmount] = useState(0);
  const [estimatedReturns, setEstimatedReturns] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  const investedAmountChartRef = useRef(null);
  const estimatedReturnsChartRef = useRef(null);

  useEffect(() => {
    const investedAmountCtx = document.getElementById('investedAmountChart').getContext('2d');
    const estimatedReturnsCtx = document.getElementById('estimatedReturnsChart').getContext('2d');

    if (investedAmountChartRef.current) investedAmountChartRef.current.destroy();
    if (estimatedReturnsChartRef.current) estimatedReturnsChartRef.current.destroy();

    investedAmountChartRef.current = new Chart(investedAmountCtx, {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: [0, 100],
            backgroundColor: ['#a390f0', '#e0d7fb'],
          },
        ],
      },
      options: {
        plugins: { tooltip: { enabled: false } },
        cutout: '70%',
      },
    });

    estimatedReturnsChartRef.current = new Chart(estimatedReturnsCtx, {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: [0, 100],
            backgroundColor: ['#a390f0', '#e0d7fb'],
          },
        ],
      },
      options: {
        plugins: { tooltip: { enabled: false } },
        cutout: '70%',
      },
    });

    calculateSIP();

    return () => {
      if (investedAmountChartRef.current) investedAmountChartRef.current.destroy();
      if (estimatedReturnsChartRef.current) estimatedReturnsChartRef.current.destroy();
    };
  }, []);

  useEffect(() => {
    calculateSIP();
  }, [monthlyInvestment, returnRate, timePeriod]);

  const calculateSIP = () => {
    const monthlyRate = returnRate / 100 / 12;
    const totalPayments = timePeriod * 12;
    const maturityAmount =
      monthlyInvestment *
      ((Math.pow(1 + monthlyRate, totalPayments) - 1) / monthlyRate) *
      (1 + monthlyRate);

    const totalInvested = monthlyInvestment * totalPayments;
    const returns = maturityAmount - totalInvested;

    setInvestedAmount(totalInvested);
    setEstimatedReturns(returns);
    setTotalValue(maturityAmount);

    updateCharts(totalInvested, returns);
  };

  const updateCharts = (invested, returns) => {
    const total = invested + returns;
    const investedPercentage = ((invested / total) * 100).toFixed(1);
    const returnsPercentage = ((returns / total) * 100).toFixed(1);

    investedAmountChartRef.current.data.datasets[0].data = [investedPercentage, 100 - investedPercentage];
    investedAmountChartRef.current.update();

    estimatedReturnsChartRef.current.data.datasets[0].data = [returnsPercentage, 100 - returnsPercentage];
    estimatedReturnsChartRef.current.update();
  };

  return (
    <div className="sip-calculator-wrapper">
      <h1 className="sip-calculator-title">SIP CALCULATOR</h1>
      <hr className="sip-calculator-divider" />
      <div className="sip-calculator">
        <div className="slider-container">
          <div className="slider-label">
            <span>Monthly Investment (₹):</span>
            <input
              type="number"
              min="100"
              max="100000"
              step="100"
              value={monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(parseInt(e.target.value))}
            />
          </div>
          <input
            type="range"
            min="100"
            max="100000"
            step="100"
            value={monthlyInvestment}
            onChange={(e) => setMonthlyInvestment(parseInt(e.target.value))}
          />

          <div className="slider-label">
            <span>Expected Return Rate (p.a) %:</span>
            <input
              type="number"
              min="1"
              max="20"
              step="0.1"
              value={returnRate}
              onChange={(e) => setReturnRate(parseFloat(e.target.value))}
            />
          </div>
          <input
            type="range"
            min="1"
            max="20"
            step="0.1"
            value={returnRate}
            onChange={(e) => setReturnRate(parseFloat(e.target.value))}
          />

          <div className="slider-label">
            <span>Time Period (Years):</span>
            <input
              type="number"
              min="1"
              max="30"
              value={timePeriod}
              onChange={(e) => setTimePeriod(parseInt(e.target.value))}
            />
          </div>
          <input
            type="range"
            min="1"
            max="30"
            value={timePeriod}
            onChange={(e) => setTimePeriod(parseInt(e.target.value))}
          />
        </div>

        <div className="chart-container">
          <div className="chart">
            <canvas id="investedAmountChart"></canvas>
            <span className="chart-label">Invested Amount</span>
          </div>
          <div className="chart">
            <canvas id="estimatedReturnsChart"></canvas>
            <span className="chart-label">Estimated Returns</span>
          </div>
        </div>

        <div className="investment-details">
          <p>Invested Amount: ₹{investedAmount.toFixed(2)}</p>
          <p>Estimated Returns: ₹{estimatedReturns.toFixed(2)}</p>
          <p>Total Value: ₹{totalValue.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default SIPCalculator;
