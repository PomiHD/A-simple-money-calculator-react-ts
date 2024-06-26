﻿import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";
import { UserInputProps } from "../App";

export function ResultTable({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}: UserInputProps) {
  const results = calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  });
  const initialInvestment_ =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;
  console.log(results);
  return (
    <table id="result">
      <thead>
        <tr>
          <td>Year</td>
          <td>Investment Value</td>
          <td>Interest (Year)</td>
          <td>Total Interest</td>
          <td>Invest Capital</td>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => {
          const totalInterest =
            result.valueEndOfYear -
            initialInvestment_ -
            result.annualInvestment * result.year;
          const totalCapitalInvested = result.valueEndOfYear - totalInterest;
          return (
            <tr key={result.year}>
              <td>{result.year} </td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalCapitalInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
