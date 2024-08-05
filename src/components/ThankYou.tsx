import thankyou from "../assets/icon-thank-you.svg";

const ThankYou = () => {
	return (
		<div className="items-center mx-10 h-full flex flex-col justify-center my-auto">
			<img
				src={thankyou}
				className="w-24 md:w-32 h-24 md:h-32 md:mt-0 mt-8"
				alt="Thank_you_image"
			/>
			<p className="text-4xl font-bold text-blue-900 mt-8 md:mt-16 mb-4">
				Thank you!
			</p>

			<p className="text-gray-500 md:text-base text-sm leading-loose">
				Thank for comfirming your subscription! We hope you have fun using our
				platform. If you evern need support, please feel free to email us at
			</p>
			<p className="text-gray-500 text-sm md:text-base mt-4">
				support@loremgaming.com
			</p>
		</div>
	);
};

export default ThankYou;
