import { useEffect } from "react";
import React from "react";
import { calculateInvestmentResults } from "../util/investment";

function Result(duration, initialInvestment, annualInvestment, expectedReturn) {
  const investmentResults = calculateInvestmentResults(
    duration,
    initialInvestment,
    annualInvestment,
    expectedReturn
  );
  return (
    <table>
      <tr>
        <th>year</th>
        <th>investment value</th>
        <th>interest (year)</th>
        <th>total interest</th>
        <th>invested capital</th>
      </tr>
      <tr>
        <th>1</th>
        <th>100</th>
        <th>600</th>
        <th>45613</th>
        <th>87</th>
      </tr>
    </table>
  );
}
