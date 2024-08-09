import React, { useEffect, useState } from "react";
import plans from "../data/plans";
import { get, useFormContext } from "react-hook-form";

interface PlanSelectionProps {
	step: number;
	setStep: (step: number) => void;
}

interface Plan {
	id: number;
	plan: string;
	price: number;
	monthly: boolean;
}

const PlanSelection = ({ step, setStep }: PlanSelectionProps) => {
	const [isMonthly, setIsMonthly] = useState(true);
	const [selectedPlan, setSelectedPlan] = useState<Plan | undefined>();
	const {
		register,
		trigger,
		setValue,
		formState: { errors },
	} = useFormContext();

	useEffect(() => {
		if (selectedPlan) {
			setValue("stepTwo.planName", selectedPlan.plan);
			setValue("stepTwo.planPrice", selectedPlan.price);
		}
		setValue("stepTwo.monthly", isMonthly);
	}, [selectedPlan, isMonthly, setValue]);

	const onNext = async () => {
		const isValid = await trigger("stepTwo");
		console.log(isValid);
		console.log(errors);

		if (isValid) {
			setStep(step + 1);
		}
	};

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
						key={plan.id}
						id={plan.id}
						icon={plan.icon}
						planName={plan.plan}
						priceMonthly={plan.priceMonthly}
						priceYearly={plan.priceYearly}
						monthly={isMonthly}
						isSelected={selectedPlan?.id === plan.id ? true : false}
						selectPlan={setSelectedPlan}
					/>
				))}
			</div>

			<div className="mx-auto flex md:text-xl items-center justify-center gap-4 relative">
				<span>Monthly</span>
				<input
					type="checkbox"
					{...register("stepTwo.monthly")}
					checked={isMonthly}
					onChange={() => setIsMonthly(!isMonthly)}
				/>
				<span>Yearly</span>
			</div>

			{get(errors, "stepTwo.message") && (
				<p className="error">{get(errors, "stepTwo.message")}</p>
			)}
			<div className="w-full flex justify-between items-center mt-8 md:mt-16">
				<button
					onClick={() => setStep(step - 1)}
					type="submit"
					className="back-btn">
					Go Back
				</button>
				<button onClick={onNext} type="submit" className="next-btn">
					Next Step
				</button>
			</div>
		</div>
	);
};

interface PlanChoiceProps {
	id: string;
	icon: any;
	planName: string;
	priceMonthly: number;
	priceYearly: number;
	monthly: boolean;
	isSelected: boolean;
	selectPlan: (plan: Plan) => void;
}

const PlanChoice = ({
	id,
	icon,
	planName,
	priceMonthly,
	priceYearly,
	monthly,
	isSelected,
	selectPlan,
}: PlanChoiceProps) => {
	return (
		<>
			<div
				className={`w-full flex md:flex-col md:items-start border-2 p-4 md:p-4 rounded-lg cursor-pointer ${
					isSelected ? "border-blue-800" : "border-gray-300"
				}`}
				onClick={() =>
					selectPlan({
						id: parseInt(id),
						plan: planName,
						price: monthly ? priceMonthly : priceYearly,
						monthly,
					})
				}>
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
