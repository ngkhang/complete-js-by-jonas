/*
Coding Challenge #3

- There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

- Your tasks:
	1. Calculate the average score for each team, using the test data below
	2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)
	3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
	4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

- Test data:
	Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
	Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
	Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

const Data_1 = { Dolphins: [96, 108, 89], Koalas: [88, 91, 110] };
const Data_Bonus_1 = { Dolphins: [97, 112, 101], Koalas: [109, 95, 123] };
const Data_Bonus_2 = { Dolphins: [97, 112, 101], Koalas: [109, 95, 106] };

const calAver = (scores) => {
	const total = scores.reduce((a, b) => a + b, 0);
	return total / scores.length;
};

const getResult = (Input, Key = "normal") => {
	let averDolphins = calAver(Input.Dolphins);
	let averKoalas = calAver(Input.Koalas);

	let winner = [];
	winner =
		averDolphins > averKoalas && averKoalas !== averDolphins
			? ["Dolphins is troppy", averDolphins]
			: ["Koalas is troppy", averKoalas];

	switch (Key) {
		case "bonus1":
			if (winner[1] >= 100) return winner[0];
		case "bonus2":
			return averDolphins >= 100 && averKoalas >= 100
				? "Both win the trophy!"
				: "No one winds the trophy";
		default:
			return winner[0];
	}
};
console.log(getResult(Data_1));
console.log(getResult(Data_Bonus_1, "bonus1"));
console.log(getResult(Data_Bonus_2, "bonus2"));
