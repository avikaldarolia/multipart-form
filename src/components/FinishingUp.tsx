import React from "react";
interface FinishingUpProps {
	step: number;
	setStep: (step: number) => void;
}

const FinishingUp = ({ step, setStep }: FinishingUpProps) => {
	return (
		<div className="py-8 w-11/12 mx-auto flex flex-col">
			<p className="text-4xl font-bold text-blue-900">Finishing up</p>
			<p className="my-4 text-gray-500">
				Double-check everthing looks OK before confirming.
			</p>

			<div className="my-8">
				<div className="w-full flex flex-col">
					<div className="flex text-lg justify-between font-semibold text-blue-900">
						<p className="">Pro (monthly)</p>
						<p className="">$15/mo</p>
					</div>
					<div className="w-full border my-3 border-gray-500" />

					<div className="my-3 flex justify-between">
						<p className="text-gray-500 font-medium">Online service</p>
						<p className="text-blue-900">+$2/mo</p>
					</div>
					<div className="my-3 flex justify-between">
						<p className="text-gray-500 font-medium">Online service</p>
						<p className="text-blue-900">+$2/mo</p>
					</div>
					<div className="my-3 flex justify-between">
						<p className="text-gray-500 font-medium">Online service</p>
						<p className="text-blue-900">+$2/mo</p>
					</div>

					<div className="flex justify-between mt-32">
						<p className="text-lg text-gray-500">Total (per month)</p>
						<p className="text-violet-700 text-xl font-bold">$20/mo</p>
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
			</div>
		</div>
	);
};

export default FinishingUp;
