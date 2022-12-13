import readlineSync from 'readline-sync';

// приветствие и запись имени пользователя
console.log('Welcome to the Brain Games');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

// функция для выдачи рандомного числа с минимумом/максимумом
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// начало игры: объеснение правил и запуск цикла
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let i = 0;

while (i < 3) {
  // генерирует рандомное число и спрашивает пользователя о четности
  const randomNumber = getRandomInRange(1, 50);
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  // анализ полученного ответа
  const check1 = randomNumber % 2 === 0 && userAnswer === 'yes';
  const check2 = randomNumber % 2 !== 0 && userAnswer === 'no';
  if (check1 === true || check2 === true) {
    i += 1;
    console.log('Correct!');
  } else {
    const trueAnswer = (randomNumber % 2 === 0 ? 'yes' : 'no');
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${trueAnswer}.`);
    console.log(`Let's try again, ${userName}!`);
    break;
  }

  // вывод финального поздравления, если игра прошла успешно
  if (i === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
}
