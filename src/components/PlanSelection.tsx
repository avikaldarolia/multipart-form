import React from "react";
import plans from "../data/plans";

interface PlanSelectionProps {
	step: number;
	setStep: (step: number) => void;
}

const PlanSelection = ({ step, setStep }: PlanSelectionProps) => {
	return (
		<div className="md:py-8 w-11/12 md:p-0 p-5 mx-auto flex flex-col">
			<p className="text-3xl md:text-4xl font-bold text-blue-900">
				Select your plan
			</p>
			<p className="my-2 md:my-4 text-gray-500">
				You have the option of monthly or yearly billing.
			</p>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 justify-between my-2 md:my-12">
				{plans.map((plan: any) => (
					<PlanChoice
						icon={plan.icon}
						planName={plan.plan}
						priceMonthly={plan.priceMonthly}
						priceYearly={plan.priceYearly}
						monthly={true}
						isSelected={false}
					/>
				))}
			</div>

			<div className="mx-auto flex md:text-xl items-center justify-center gap-4 relative">
				<span>Monthly</span>
				{/* <label
					htmlFor=""
					className="bg-gray-100 cursor-pointer relative w-20 h-9 rounded-full">
					<input type="checkbox" className="sr-only peer" name="" id="" />
					<span className="w-2/5 h-4/5 bg-blue-700 absolute top-1 left-1 rounded-full peer-checked:left-9"></span>
				</label> */}
				{/* <input
					type="checkbox"
					className="appearance-none transition-colors cursor-pointer w-14 h-7 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-blue-500 bg-red-500"
				/> */}
				<input type="checkbox" name="" id="" />
				{/* <span className="w-7 h-7 right-7 absolute rounded-full transform transition-transform bg-gray-200" /> */}

				<span>Yearly</span>
			</div>

			<div className="w-full flex justify-between items-center mt-8 md:mt-16">
				<button
					onClick={() => setStep(step - 1)}
					type="submit"
					className="back-btn">
					Go Back
				</button>
				<button
					onClick={() => setStep(step + 1)}
					type="submit"
					className="next-btn">
					Next Step
				</button>
			</div>
		</div>
	);
};

interface PlanChoiceProps {
	icon: any;
	planName: string;
	priceMonthly: number;
	priceYearly: number;
	monthly: boolean;
	isSelected: boolean;
}

const PlanChoice = ({
	icon,
	planName,
	priceMonthly,
	priceYearly,
	monthly,
	isSelected,
}: PlanChoiceProps) => {
	return (
		<>
			<div
				className={`w-full flex md:flex-col md:items-start hover:border-blue-800 items-center border-2 border-gray-300 p-4 md:p-4 rounded-lg cursor-pointer hover:opacity-80 ${
					isSelected && "border-blue-800"
				}`}>
				<img
					className="w-10 md:w-14 h-10 md:h-14 rounded-full"
					src={icon}
					alt=""
				/>
				<div className="flex flex-col justify-center mx-4 md:mx-0">
					<p className="text-blue-900 font-semibold text-lg md:mt-12">
						{planName}
					</p>
					<p className="text-gray-500 font-medium">
						${monthly ? priceMonthly : priceYearly}/{monthly ? "mo" : "yr"}
					</p>
				</div>
			</div>
		</>
	);
};

export default PlanSelection;
