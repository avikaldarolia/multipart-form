import React from "react";
import addons from "../data/addons.json";

interface PickAddOnsProps {
	step: number;
	setStep: (step: number) => void;
}

const PickAddOns = ({ step, setStep }: PickAddOnsProps) => {
	return (
		<div className="md:py-8 w-11/12 md:p-0 p-5 mx-auto flex flex-col">
			<p className="text-3xl md:text-4xl font-bold text-blue-900">
				Pick add-ons
			</p>
			<p className="my-2 md:my-4 text-gray-500">
				Add-ons help enhance your gaming experience.
			</p>

			<div className="my-2 md:my-8">
				{addons.map((addon) => (
					<AddOn
						key={addon.id}
						name={addon.name}
						description={addon.description}
						price={addon.price}
					/>
				))}
				{/* 
				<AddOn />
				<AddOn /> */}
			</div>

			<div className="w-full flex justify-between items-center mt-6 md:mt-10">
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

interface AddOnProps {
	name: string;
	description: string;
	price: number;
}

const AddOn = ({ name, description, price }: AddOnProps) => {
	return (
		<div className="w-full p-3 my-3 md:my-6 flex shadown-sm md:shadow items-center cursor-pointer justify-between rounded-xl border-2 hover:border-blue-600 outline-gray-400">
			<input type="checkbox" name="" id="" />
			<div className="flex-1 flex-col items-center mx-4 text-sm md:text-lg">
				<p className="text-blue-900 font-semibold">{name}</p>
				<p className="text-gray-500">{description}</p>
			</div>
			<div className="text-blue-900">+${price}/mo</div>
		</div>
	);
};

export default PickAddOns;
