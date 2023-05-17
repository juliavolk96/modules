// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

import Game, { GameSavingData, readGameSaving, writeGameSaving } from './game.js';

const loadGame = readGameSaving;
const saveGame = writeGameSaving;

const game = new Game();
console.log('game started');

game.start();