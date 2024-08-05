import { useState } from "react";
import "./App.css";
import SideBarStep from "./components/SideBarStep";
import steps from "./data/steps.json";
import PersonalInformation from "./components/PersonalInformation";
import PlanSelection from "./components/PlanSelection";
import PickAddOns from "./components/PickAddOns";
import FinishingUp from "./components/FinishingUp";
import ThankYou from "./components/ThankYou";

function App() {
	const [step, setStep] = useState(1);

	const renderStep = (step: number) => {
		switch (step) {
			case 1:
				return <PersonalInformation step={step} setStep={setStep} />;
			case 2:
				return <PlanSelection step={step} setStep={setStep} />;
			case 3:
				return <PickAddOns step={step} setStep={setStep} />;
			case 4:
				return <FinishingUp step={step} setStep={setStep} />;
			case 5:
				return <ThankYou />;

			default:
				return <PersonalInformation step={step} setStep={setStep} />;
		}
	};

	return (
		<div className="w-10/12 mx-auto md:w-7/12 my-32 md:my-24 rounded-3xl flex flex-col md:flex-row bg-white md:p-4">
			<div className="sidebar flex w-full p-16 md:p-0 md:flex-col h-96 md:h-auto md:w-1/2 md:m-4 md:rounded-xl absolute left-0 top-0 md:relative md:py-10">
				{steps.map((st) => (
					<SideBarStep
						currentStep={step}
						stepName={st.name}
						key={st.id}
						stepNumber={st.id}
						isActive={false}
						handleClick={setStep}
					/>
				))}
			</div>
			{/* Step - 1 FORM */}
			<div className="w-full my-4">{renderStep(step)}</div>
		</div>
	);
}

export default App;
