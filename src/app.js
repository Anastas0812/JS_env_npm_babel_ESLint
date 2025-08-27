const characters = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'маг', health: 0},
  {name: 'лучник', health: 0},
];

const alive = characters.filter(item => item.health > 0);

console.log(alive); // добавлен вывод в консоль для использования переменной alive
// ответ терминала: npm run lint
// > defender-game@1.0.0 lint
// > eslint .

