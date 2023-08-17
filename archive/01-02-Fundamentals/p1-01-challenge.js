/*
Coding Challenge #1

- Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
    BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

- Your tasks:
    1. Store Mark's and John's mass and height in variables
    2. Calculate both their BMIs using the formula (you can even implement both versions)
    3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

- Test data:
    Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
    Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/

const bmiFunc = (weight, height) => weight / height ** 2;
const data_Mark_1 = [78, 1.69];
const data_John_1 = [92, 1.95];
const data_Mark_2 = [95, 1.88];
const data_John_2 = [85, 1.76];

const handleBMI = (mark, john) => {
	const MarkBMI = bmiFunc(mark[0], mark[1]);
	const JohnBMI = bmiFunc(john[0], john[1]);
	const markHigherBMI = MarkBMI > JohnBMI;
	return [`Mark:${MarkBMI} - John:${JohnBMI}`, markHigherBMI];
};

console.log(handleBMI(data_Mark_1, data_John_1));
console.log(handleBMI(data_Mark_2, data_John_2));
