import React from "react";

interface PersonalInformationProps {
	step: number;
	setStep: (step: number) => void;
}

const PersonalInformation = ({ step, setStep }: PersonalInformationProps) => {
	return (
		<div className="md:py-8 w-11/12 md:p-0 p-5 mx-auto flex flex-col">
			<p className="text-3xl md:text-4xl font-bold text-blue-900">
				Personal info
			</p>
			<p className="my-2 md:my-4 text-gray-500">
				Please provide your name, email address, and phone number.
			</p>
			<div className="mt-2 md:mt-10 flex flex-col">
				<label className="form-label" htmlFor="name">
					Name
				</label>
				<input
					className="form-input"
					placeholder="e.g. Avikal Darolia"
					type="text"
					name="name"
					id=""
				/>
				<label className="form-label" htmlFor="email">
					Email
				</label>
				<input
					className="form-input"
					placeholder="e.g. abcdef@lorem.com"
					type="text"
					name="Email"
					id=""
				/>
				<label className="form-label" htmlFor="phone">
					Phone Number
				</label>
				<input
					className="form-input"
					placeholder="e.g. 1234567890"
					type="text"
					name="phone"
					id=""
				/>
			</div>
			<button
				onClick={() => setStep(step + 1)}
				type="submit"
				className="ml-auto rounded bg-blue-900 mt-8 md:mt-16 text-white py-3 px-4 font-semibold tracking-wide">
				Next Step
			</button>
		</div>
	);
};

export default PersonalInformation;
