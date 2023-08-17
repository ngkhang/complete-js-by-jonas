/*
Coding Challenge #2

- Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

- Your tasks:
    1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
    2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
*/

const bmiFunc = (weight, height) => weight / height ** 2;
const data_Mark_1 = [78, 1.69];
const data_John_1 = [92, 1.95];
const data_Mark_2 = [95, 1.88];
const data_John_2 = [85, 1.76];

const handleBMI = (mark, john) => {
	const MarkBMI = bmiFunc(mark[0], mark[1]);
	const JohnBMI = bmiFunc(john[0], john[1]);
	const output =
		MarkBMI > JohnBMI
			? ["Mark's", MarkBMI, "John's", JohnBMI]
			: ["John's", JohnBMI, "Mark's", MarkBMI];
	console.log(`${output[0]} BMI is higher than ${output[2]}!`);
	return `${output[0]} BMI (${output[1].toFixed(1)}) is higher than ${
		output[2]
	} (${output[3].toFixed(1)})!"`;
};

console.log(handleBMI(data_Mark_1, data_John_1));
console.log(handleBMI(data_Mark_2, data_John_2));
