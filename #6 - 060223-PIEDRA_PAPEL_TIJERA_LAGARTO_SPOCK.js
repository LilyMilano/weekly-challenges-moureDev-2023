/*
 * Crea un programa que calcule quien gana mรกs partidas al piedra,
 * papel, tijera, lagarto, spock.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La funciรณn recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "๐ฟ" (piedra), "๐" (papel),
 *   "โ๏ธ" (tijera), "๐ฆ" (lagarto) o "๐ฆ" (spock).
 * - Ejemplo. Entrada: [("๐ฟ","โ๏ธ"), ("โ๏ธ","๐ฟ"), ("๐","โ๏ธ")]. Resultado: "Player 2".
 * - Debes buscar informaciรณn sobre cรณmo se juega con estas 5 posibilidades.
 */
// ......................................................

//? Sheldon Game: Rock, Paper, Scissors, Lizard, Spock.

//? Sheldon himself explained it as follows:
// " The scissors cut the paper.
// The paper covers the rock.
// The rock crushes the lizard.
// The lizard poisons Spock.
// Spock breaks the scissors.
// The scissors decapitate the lizard.
// The lizard devours the paper.
// The paper disempowers Spock.
// Spock vaporises the rock and, as always,
// the rock crushes the scissors."

const win_moves = {
	'๐ฟ': ['โ๏ธ', '๐ฆ'],
	'๐': ['๐ฟ', '๐'],
	'โ๏ธ': ['๐ฆ', '๐'],
	'๐ฆ': ['๐', '๐'],
	'๐': ['โ๏ธ', '๐ฟ'],
};

// ......................................................
//? Scoring Logic_________________________________________

let sheldon_score = 0;
let leonard_score = 0;

function coopersGame(moves) {
	sheldon_score = 0;
	leonard_score = 0;

	moves.forEach(playGame);
	{
		if (sheldon_score === leonard_score) {
			return 'Tie!';
		} else if (sheldon_score > leonard_score) {
			return 'Sheldon won!';
		} else return 'Leonard won!';
	}
	// ___________________________________________________
}

function playGame([sheldon, leonard]) {
	if (win_moves[sheldon].indexOf(leonard) > -1) {
		sheldon_score += 1;
	} else if (win_moves[leonard].indexOf(sheldon) > -1) {
		leonard_score += 1;
	}
}
//? Testing results_________________________________________

console.log(
	coopersGame([
		['๐ฟ', 'โ๏ธ'],
		['โ๏ธ', '๐ฟ'],
		['๐', 'โ๏ธ'],
	])
); // Log: Leonard won!

console.log(
	coopersGame([
		['๐ฟ', 'โ๏ธ'],
		['โ๏ธ', '๐ฟ'],
		['๐', '๐'],
	])
); // Log: Tie!

console.log(
	coopersGame([
		['๐ฟ', 'โ๏ธ'],
		['๐ฆ', '๐'],
		['โ๏ธ', '๐ฆ'],
	])
); // Log: Sheldon won!
