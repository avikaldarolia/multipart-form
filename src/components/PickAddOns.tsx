import React from "react";
import addons from "../data/addons.json";

interface PickAddOnsProps {
	step: number;
	setStep: (step: number) => void;
}

const PickAddOns = ({ step, setStep }: PickAddOnsProps) => {
	return (
		<div className="py-8 w-11/12 mx-auto flex flex-col">
			<p className="text-4xl font-bold text-blue-900">Pick add-ons</p>
			<p className="my-4 text-gray-500">
				Add-ons help enhance your gaming experience.
			</p>

			<div className="my-8">
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

			<div className="w-full flex justify-between items-center mt-10">
				<button
					onClick={() => setStep(step - 1)}
					type="submit"
					className="rounded bg-gray-400 text-white py-3 px-4 font-semibold tracking-wide">
					Go Back
				</button>
				<button
					onClick={() => setStep(step + 1)}
					type="submit"
					className="rounded bg-blue-900 text-white py-3 px-4 font-semibold tracking-wide">
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
		<div className="w-full p-3 my-6 flex shadow items-center cursor-pointer justify-between rounded-xl  border-2 hover:border-blue-600 outline-gray-400">
			<input type="checkbox" name="" id="" />
			<div className="flex-1 flex-col items-center mx-4">
				<p className="text-blue-900 font-semibold text-lg">{name}</p>
				<p className="text-gray-500">{description}</p>
			</div>
			<div className="text-blue-900">+${price}/mo</div>
		</div>
	);
};

export default PickAddOns;
