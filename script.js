function generateQuiz() {
  let _TQ = 0;
  let answers = [];
  let min = 5;

  const operation = document.querySelector(
    'input[name="operation"]:checked'
  ).value;
  const maxNumber = parseInt(document.getElementById('maxNumber').value);
  const quizContainer = document.getElementById('quizContainer');

  console.log(operation);

  quizContainer.innerHTML = '';

  const addition = () => {
    num1 = Math.floor(Math.random() * (maxNumber - min + 1)) + min;
    num2 = Math.floor(Math.random() * (maxNumber - min + 1)) + min;

    if (answers.includes(num1 + num2)) {
      addition();
    } else {
      answers.push(num1 + num2);
      _TQ++;
    }

    return `<span>${num1} + ${num2} </span>= ______`;
  };

  const subtraction = () => {
    num1 = Math.floor(Math.random() * (maxNumber - min + 1)) + min;
    num2 = Math.floor(Math.random() * (maxNumber - min + 1)) + min;

    const ans = num1 - num2;
    const valid = num2 < num1 ? true : false;

    if (!valid) {
      subtraction();
    } else {
      answers.push(ans);
      _TQ++;
    }
    return `<span>${num1} - ${num2} </span> = ______`;
  };

  while (_TQ < 46) {
    let question;
    let num1, num2;
    switch (operation) {
      case 'addition':
        question = addition();
        break;

      case 'subtraction':
        question = subtraction();
        break;

      case 'multiplication':
        num1 = Math.floor(Math.random() * (10 - min + 1)) + min;
        num2 = Math.floor(Math.random() * (9 - min + 1)) + min;
        question = `<span>${num1} * ${num2} </span> = ______`;
        _TQ++;
        break;

      case 'division':
        num1 = Math.floor(Math.random() * 10) * 10;
        num2 = Math.floor(Math.random() * 9) + 1;
        question = `<span>${num1} / ${num2} </span> = ______`;
        _TQ++;
        break;
    }

    const quizElement = document.createElement('span');
    quizElement.innerHTML = question;
    quizContainer.appendChild(quizElement);
  }
}

function printQuiz() {
  window.print();
}
