import React from "react";

interface SidebarsStepProps {
	currentStep: number;
	stepNumber: number;
	isActive: boolean;
	stepName: string;
	handleClick: (step: number) => void;
}

const SideBarStep = ({
	currentStep,
	stepNumber,
	isActive,
	stepName,
	handleClick,
}: SidebarsStepProps) => {
	isActive = currentStep >= stepNumber;
	return (
		<>
			<div
				className="w-fit md:w-10/12 mx-auto flex md:my-4 cursor-pointer"
				onClick={() => handleClick(stepNumber)}>
				<div
					className={`w-8 h-8 md:w-14 md:h-14 rounded-full border-white border-2 flex items-center justify-center ${
						isActive && "bg-blue-300"
					}`}>
					<p
						className={` md:text-2xl md:font-bold  ${
							isActive ? "text-blue-600" : " text-white"
						}`}>
						{stepNumber}
					</p>
				</div>
				<div className="hidden md:flex md:flex-col ml-3 justify-center">
					<p className="text-blue-100">STEP {stepNumber}</p>
					<p className={"text-lg text-white font-bold"}>{stepName}</p>
				</div>
			</div>
		</>
	);
};

export default SideBarStep;
