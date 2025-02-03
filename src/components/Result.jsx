import React from "react";
import { calculateInvestmentResults } from "../util/investment";

function Result({
  duration,
  initialInvestment,
  annualInvestment,
  expectedReturn,
}) {
  const investmentResults = calculateInvestmentResults(
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration
  );
  const total = initialInvestment + annualInvestment;
  let rest = 0;
  return (
    <table>
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment value</th>
          <th>Interest (year)</th>
          <th>Total Interest</th>
          <th>Invested capital</th>
        </tr>
      </thead>
      <tbody>
        {investmentResults.map((result) => (
          <tr key={result.year}>
            <td>{result.year}</td>
            <td>{result.valueEndOfYear.toFixed(0)}</td>
            <td>{result.interest.toFixed(0)}</td>
            <td>{result.interest}</td>
            <td>{(total + result.interest).toFixed(0)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Result;
