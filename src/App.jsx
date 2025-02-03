import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
import "./index.css";

function App() {
  const [annualInvestment, setAnnualInvestment] = useState(1200);
  const [expectedReturn, setExpectedReturn] = useState(6);
  const [duration, setDuration] = useState(10);
  const [initialInvestment, setInitialInvestment] = useState(10000);

  const handleAnnualInvestment = (newAnnualInvestment) => {
    setAnnualInvestment(newAnnualInvestment);
  };

  const handleExpectedReturn = (newExpectedReturn) => {
    setExpectedReturn(newExpectedReturn);
  };

  const handleDuration = (newDuration) => {
    setDuration(newDuration);
  };

  const handleInitialInvestment = (newInitialInvestment) => {
    setInitialInvestment(newInitialInvestment);
  };

  return (
    <div>
      <Header />
      <UserInput
        initialInvestment={initialInvestment}
        handleInitialInvestment={handleInitialInvestment}
        duration={duration}
        handleDuration={handleDuration}
        expectedReturn={expectedReturn}
        handleExpectedReturn={handleExpectedReturn}
        annualInvestment={annualInvestment}
        handleAnnualInvestment={handleAnnualInvestment}
      />
      <Result
        initialInvestment={initialInvestment}
        duration={duration}
        expectedReturn={expectedReturn}
        annualInvestment={annualInvestment}
      />
    </div>
  );
}

export default App;
