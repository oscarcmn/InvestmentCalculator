import React from "react";

const InputForm = ({
  initialInvestment,
  handleInitialInvestment,
  duration,
  handleDuration,
  expectedReturn,
  handleExpectedReturn,
  annualInvestment,
  handleAnnualInvestment,
}) => {
  return (
    <form>
      <div>
        <label>Initial Investment:</label>
        <input
          type="number"
          value={initialInvestment}
          onChange={(e) => handleInitialInvestment(e.target.value)}
        />
      </div>
      <div>
        <label>Duration:</label>
        <input
          type="number"
          value={duration}
          onChange={(e) => handleDuration(e.target.value)}
        />
      </div>
      <div>
        <label>Expected Return:</label>
        <input
          type="number"
          value={expectedReturn}
          onChange={(e) => handleExpectedReturn(e.target.value)}
        />
      </div>
      <div>
        <label>Annual Investment:</label>
        <input
          type="number"
          value={annualInvestment}
          onChange={(e) => handleAnnualInvestment(e.target.value)}
        />
      </div>
    </form>
  );
};

export default InputForm;
