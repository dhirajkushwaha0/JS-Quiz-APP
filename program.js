const questions = [
    {
    'que': 'Which of the following is correct about JavaScript?',
    'a': 'JavaScript is an Object-Based language',
    'b': 'JavaScript is Assembly-language',
    'c': 'JavaScript is an Object-Oriented language',
    'd': 'JavaScript is a High-level language',
    'correct':'a'
    },

    {
    'que': 'Arrays in JavaScript are defined by which of the following statements?',
    'a': 'It is an ordered list of values',
    'b': 'It is an ordered list of objects',
    'c': 'It is an ordered list of string',
    'd': 'It is an ordered list of functions',
    'correct':'a'
    },

    {
    'que': 'Which of the following is not javascript data types?',
    'a': 'Null type',
    'b': 'Undefined type',
    'c': 'Number type',
    'd': 'All of the mentioned',
    'correct':'d'
    },
    {
    'que': 'Which of the following can be used to call a JavaScript Code Snippet?',
    'a': 'Function/Method',
    'b': 'Preprocessor',
    'c': 'Triggering Event',
    'd': 'RMI',
    'correct':'a'
    },
    {
    'que': 'Which of the following scoping type does JavaScript use?',
    'a': 'Sequential',
    'b': 'Segmental',
    'c': 'Lexical',
    'd': 'Literal',
    'correct':'c'
    },
]

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () => {
    if (index == total){
        return endQuiz()
    }
    reset();
    const data = questions[index]
    console.log(data)
    quesBox.innerText = `${index+1} ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () =>{
    const data = questions[index];
    const ans = getAnswer()
    if (ans == data.correct){
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () =>{
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked){
                answer= input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
    <h3>Your Answer Has Been Submitted Successfully!</h3>
    <h2>${right} / ${total} are correct. </h2>
    </div>
    `
}

loadQuestion();

