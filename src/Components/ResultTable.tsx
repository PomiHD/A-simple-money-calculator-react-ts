﻿import React from "react";
import { formatter } from "../util/investment";
import { calculateInvestmentResults } from "../util/investment";
export function ResultTable({ userInput }) {
  console.log(userInput);
  const results = calculateInvestmentResults(userInput);
  console.log(results);
  return (
    <p>result...</p>
    // <>
    //   <table id={"result"}>
    //     <thead id={"result"}>
    //       <tr>
    //         <th>Year</th>
    //         <th>Investment Value</th>
    //         <th>Interest (Year)</th>
    //         <th>Total Interest</th>
    //         <th>Invest Capital</th>
    //       </tr>
    //     </thead>
    //     <tbody id={"result"}>
    //       {results.map((result, index) => (
    //         <tr key={index}>
    //           <td>{result.year}</td>
    //           <td>{formatter.format(result.valueEndOfYear)}</td>
    //           <td>{formatter.format(result.interest)}</td>
    //           <td>{formatter.format(result.totalInterest)}</td>
    //           <td>{formatter.format(result.totalCapitalInvested)}</td>{" "}
    //           {/* Updated line */}
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </>
  );
}
