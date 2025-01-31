import { useState } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
function App() {
  const [annualInvestment, setAnnualInvestment] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);
  const [initialInvestment, setInitialInvestment] = useState(0);

  const handleAnnualInvestment = (newAnnualInvestment) => {
    setAnnualInvestment(newAnnualInvestment); // Eliminado el intento de esparcir un número en un array
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
      <InputForm
        initialInvestment={initialInvestment}
        handleInitialInvestment={handleInitialInvestment}
        duration={duration}
        handleDuration={handleDuration}
        expectedReturn={expectedReturn}
        handleExpectedReturn={handleExpectedReturn}
        annualInvestment={annualInvestment}
        handleAnnualInvestment={handleAnnualInvestment}
      />
    </div>
  );
}

export default App;
