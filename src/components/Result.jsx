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
  console.log(investmentResults);
  return (
    <table>
      <thead>
        <tr>
          <th>Year</th>
          <th>Interest Earned</th>
          <th>Value at Year End</th>
          <th>Annual Investment</th>
        </tr>
      </thead>
      <tbody>
        {investmentResults.map((result) => (
          <tr key={result.year}>
            <td>{result.year}</td>
            <td>{result.interest}</td>
            <td>{result.valueEndOfYear}</td>
            <td>{result.annualInvestment}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Result;
