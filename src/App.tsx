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

	// const handleStep = (step) => {};

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
		<div className="h-screen min-h-screen flex w-full bg-blue-100">
			<div className="w-7/12 my-24 mx-auto rounded-3xl flex bg-white p-4">
				<div className="sidebar w-1/2 m-4 rounded-xl">
					<div className="my-16 w-full">
						{steps.map((st) => (
							<SideBarStep
								currentStep={step}
								stepName={st.name}
								key={st.id}
								stepNumber={st.id}
								isActive={false}
							/>
						))}
					</div>
				</div>
				{/* Step - 1 FORM */}
				<div className="w-full my-4">
					{renderStep(step)}
					{/* <PersonalInformation /> */}
					{/* <PlanSelection /> */}
					{/* <PickAddOns /> */}
					{/* <FinishingUp /> */}
					{/* <ThankYou /> */}
				</div>
			</div>
		</div>
	);
}

export default App;
