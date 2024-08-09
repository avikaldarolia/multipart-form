import { z } from "zod";

const stepOneSchema = z.object({
	name: z.string().min(2, { message: "Name is required" }),
	email: z.string().email({ message: "Invalid email address" }),
	phone: z.string().length(10, { message: "Phone number must be 10 digits" }),
});

const stepTwoSchema = z.object(
	{
		planName: z.string().min(2),
		planPrice: z.number().int({}),
		monthly: z.boolean(),
	},
	{ message: "Plan selection is required" }
);

const addonObject = z.object({
	name: z.string().min(2, { message: "Add-on name is required" }),
	price: z.number().int({ message: "Add-on price must be an integer" }),
});

const stepThreeSchema = z
	.object({
		addOns: z.array(addonObject),
	})
	.optional();

export const stepSchema = z.object({
	stepOne: stepOneSchema,
	stepTwo: stepTwoSchema,
	stepThree: stepThreeSchema,
});

export type StepFormSchema = z.infer<typeof stepSchema>;
