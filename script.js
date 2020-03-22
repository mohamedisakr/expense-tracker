const balance = document.querySelector("#balance");
const money_plus = document.querySelector("#money-plus");
const money_minus = document.querySelector("#money-minus");
const list = document.querySelector("#list");
const form = document.querySelector("#form");
const text = document.querySelector("#text");
const amount = document.querySelector("#amount");

const dummyTransactions = [
  { id: 1, text: "Flower", amount: -20 },
  { id: 2, text: "Salary", amount: 300 },
  { id: 3, text: "Book", amount: -10 },
  { id: 4, text: "Camera", amount: 150 }
];

let transactions = dummyTransactions;

// Add transactions to history section list
function addTransactions(transaction) {
  //   const sign = transaction.amount < 0 ? "-" : "+";
  const listItem = document.createElement("li");
  listItem.classList.add(transaction.amount < 0 ? "minus" : "plus");
  listItem.innerHTML = `
        ${transaction.text.trim()}
        <span>$${transaction.amount}</span> 
        <button class="delete-btn">X</button>`;
  list.appendChild(listItem);
}

// upate balance (income & expense)
function upateValues() {
  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expenses = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  balance.innerHTML = `$${total}`;
  money_plus.innerHTML = `$${income}`;
  money_minus.innerHTML = `$${expenses}`;
}

function init() {
  list.innerHTML = "";
  transactions.forEach(addTransactions);
  upateValues();
}

init();
