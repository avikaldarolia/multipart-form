import React from "react";

interface SidebarsStepProps {
	stepNumber: number;
	isActive: boolean;
	stepName: string;
}

const SideBarStep = ({ stepNumber, isActive, stepName }: SidebarsStepProps) => {
	return (
		<>
			<div className="flex w-10/12 mx-auto my-8 cursor-pointer">
				<div
					className={`w-14 h-14 rounded-full border-white border-2 flex items-center justify-center ${
						isActive && "bg-blue-300"
					}`}>
					<p
						className={`text-2xl font-bold  ${
							isActive ? "text-blue-600" : " text-white"
						}`}>
						{stepNumber}
					</p>
				</div>
				<div className="flex flex-col ml-3 justify-center">
					<p className="text-blue-100">STEP {stepNumber}</p>
					<p className={"text-lg text-white font-bold"}>{stepName}</p>
				</div>
			</div>
		</>
	);
};

export default SideBarStep;
