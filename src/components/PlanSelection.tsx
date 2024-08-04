import React from "react";
import plans from "../data/plans";

const PlanSelection = () => {
	return (
		<div className="py-8 w-11/12 mx-auto flex flex-col">
			<p className="text-4xl font-bold text-blue-900">Select your plan</p>
			<p className="my-4 text-gray-500">
				You have the option of monthly or yearly billing.
			</p>

			<div className="grid grid-cols-3 gap-6 justify-between my-12">
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

			<div className="mx-auto flex items-center justify-center gap-4 relative">
				<span className="text-xl">Monthly</span>
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

				<span className="text-xl">Yearly</span>
			</div>

			<div className="w-full flex justify-between items-center mt-16">
				<button className="rounded bg-gray-400 text-white py-3 px-4 font-semibold tracking-wide">
					Go Back
				</button>
				<button className="rounded bg-blue-900 text-white py-3 px-4 font-semibold tracking-wide">
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
				className={`w-full flex flex-col border-2 border-gray-300 p-4 rounded-lg cursor-pointer hover:opacity-80 ${
					isSelected && "border-blue-800"
				}`}>
				<img className="w-14 h-14 rounded-full" src={icon} alt="" />
				<p className="text-blue-900 font-semibold text-lg mt-16">{planName}</p>
				<p className="text-gray-400 font-medium">
					${monthly ? priceMonthly : priceYearly}/{monthly ? "mo" : "yr"}
				</p>
			</div>
		</>
	);
};

export default PlanSelection;
