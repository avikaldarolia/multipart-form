import arcade from "../assets/icon-arcade.svg";
import pro from "../assets/icon-pro.svg";
import advanced from "../assets/icon-advanced.svg";

const plansData = [
	{
		id: 1,
		plan: "Arcade",
		icon: arcade,
		priceMonthly: 9,
		priceYearly: 95,
	},
	{
		id: 2,
		plan: "Pro",
		icon: pro,
		priceMonthly: 12,
		priceYearly: 120,
	},
	{
		id: 3,
		plan: "Advanced",
		icon: advanced,
		priceMonthly: 15,
		priceYearly: 160,
	},
];

export default plansData;
