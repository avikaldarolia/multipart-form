import thankyou from "../assets/icon-thank-you.svg";

const ThankYou = () => {
	return (
		<div className="items-center mx-10 h-full flex flex-col justify-center my-auto">
			<img src={thankyou} className="w-32 h-32" alt="Thank_you_image" />
			<p className="text-4xl font-bold text-blue-900 mt-16 mb-4">Thank you!</p>

			<p className="text-gray-500 leading-loose">
				Thank for comfirming your subscription! We hope you have fun using our
				platform. If you evern need support, please feel free to email us at
			</p>
			<p className="text-gray-500 mt-4">support@loremgaming.com</p>
		</div>
	);
};

export default ThankYou;
