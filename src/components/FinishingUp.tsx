import { useFormContext } from "react-hook-form";
import { StepFormSchema } from "../schema/formSchema";
interface FinishingUpProps {
	step: number;
	setStep: (step: number) => void;
}

const FinishingUp = ({ step, setStep }: FinishingUpProps) => {
	const { getValues } = useFormContext<StepFormSchema>();
	let { planName, planPrice, monthly } = getValues("stepTwo");
	let priceUnit = monthly ? "monthly" : "yearly";
	let priceUnitSymbol = priceUnit === "monthly" ? "mo" : "yr";
	let total = planPrice;
	const selectedAddOns = getValues("stepThree.addOns") || [];

	return (
		<div className="md:py-8 w-11/12 md:p-0 p-5 mx-auto flex flex-col">
			<p className="text-3xl md:text-4xl font-bold text-blue-900">
				Finishing up
			</p>
			<p className="my-2 md:my-4 text-gray-500">
				Double-check everthing looks OK before confirming.
			</p>

			<div className="my-2 md:my-8">
				<div className="w-full flex flex-col">
					<div className="flex text-lg justify-between font-semibold text-blue-900">
						<p className="">
							{planName} ({priceUnit})
						</p>
						<p className="">
							${planPrice}/{priceUnitSymbol}
						</p>
					</div>
					<div className="w-full border my-3 border-gray-500" />

					{selectedAddOns.map((addOn, index) => {
						let price = priceUnit === "yearly" ? addOn.price * 12 : addOn.price;
						total += price;
						return (
							<div key={index} className="my-3 flex justify-between">
								<p className="text-gray-500 font-medium">{addOn.name}</p>
								<div className="flex flex-col">
									<p className="text-blue-900 font-medium">+${price}</p>
									<p className="text-blue-900 text-xs">${addOn.price}/mo</p>
								</div>
							</div>
						);
					})}

					<div className="flex justify-between mt-12 md:mt-32 md:text-lg">
						<p className=" text-gray-500">Total ({priceUnit})</p>
						<p className="text-violet-700 font-bold">
							${total}/{priceUnit}
						</p>
					</div>

					<div className="w-full flex justify-between items-center mt-6 md:mt-10">
						<button
							onClick={() => setStep(step - 1)}
							type="submit"
							className="rounded bg-gray-500 text-white py-2 px-3 md:py-3 md:px-4 md:font-semibold tracking-wide">
							Go Back
						</button>
						<button
							onClick={() => setStep(step + 1)}
							type="submit"
							className="rounded bg-blue-900 text-white py-2 px-3 md:py-3 md:px-4 md:font-semibold tracking-wide">
							Next Step
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FinishingUp;
