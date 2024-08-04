import { useState } from "react";
import "./App.css";
import SideBarStep from "./components/SideBarStep";
import steps from "./data/steps.json";
import PersonalInformation from "./components/PersonalInformation";
import PlanSelection from "./components/PlanSelection";

function App() {
	// const [step, setStep] = useState(1);

	return (
		<div className="h-screen min-h-screen flex w-full bg-blue-100">
			<div className="w-7/12 my-24 mx-auto rounded-3xl flex bg-white p-4">
				<div className="sidebar w-1/2 m-4 rounded-xl">
					<div className="my-16 w-full">
						{steps.map((step) => (
							<SideBarStep
								stepName={step.name}
								key={step.id}
								stepNumber={step.id}
								isActive={false}
							/>
						))}
					</div>
				</div>
				{/* Step - 1 FORM */}
				<div className="w-full my-4">
					{/* <PersonalInformation /> */}
					<PlanSelection />
				</div>
			</div>
		</div>
	);
}

export default App;
