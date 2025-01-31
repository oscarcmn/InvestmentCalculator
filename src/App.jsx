import { useState } from "react";
import Header from "./components/Header";
function App() {
  const [annualInvestment, setAnnualInvestment] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);
  const [initialInvestment, setInitialInvestment] = useState(0);

  const handleAnnualInvestment = (newAnnualInvestment) => {
    setAnnualInvestment((currentAnnualInvestment) => [
      ...currentAnnualInvestment,
      newAnnualInvestment,
    ]);
  };

  const handleExpectedReturn = (newExpectedReturn) => {
    setExpectedReturn((currentExpectedReturn) => [
      ...currentExpectedReturn,
      newExpectedReturn,
    ]);
  };

  const handleDuration = (newDuration) => {
    setDuration((currentDuration) => [...currentDuration, newDuration]);
  };

  const handleInitialInvestment = (newInitialInvestment) => {
    setInitialInvestment((currentInitialInvestment) => [
      ...currentInitialInvestment,
      newInitialInvestment,
    ]);
  };

  return (
    <div>
      <Header />
      <InputForm
        handleInitialInvestment={handleInitialInvestment}
        handleDuration={handleDuration}
        handleExpectedReturn={handleExpectedReturn}
        handleAnnualInvestment={handleAnnualInvestment}
      />
      <OutputList />
    </div>
  );
}

export default App;
