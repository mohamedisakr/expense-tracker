const balance = document.querySelector("#balance");
const money_plus = document.querySelector("#money-plus");
const money_minus = document.querySelector("#money-minus");
const list = document.querySelector("#list");
const form = document.querySelector("#form");
const textInput = document.querySelector("#text");
const amountInput = document.querySelector("#amount");

const localStorageTransactions = JSON.parse(
  localStorage.getItem("transactions")
);

let transactions =
  localStorage.getItem("transactions") !== null ? localStorageTransactions : [];

// Add transactions to history section list
function addTransactions(transaction) {
  const listItem = document.createElement("li");
  listItem.classList.add(transaction.amount < 0 ? "minus" : "plus");
  listItem.innerHTML = `
        ${transaction.text}        
        <span>$${transaction.amount}</span> 
        <button class="delete-btn" onclick="removeTransaction(${transaction.id})">X</button>`;
  list.appendChild(listItem);
}

function removeTransaction(id) {
  transactions = transactions.filter(transaction => transaction.id !== id);
  upateLocalStorage();
  init();
}

// update local storage
function upateLocalStorage() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
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

function handleSubmitForm(event) {
  event.preventDefault();

  if (textInput.value.trim() === "" || amountInput.value.trim() === "") {
    alert("Please type a text and amount");
  } else {
    const transaction = {
      id: generateId(),
      text: textInput.value,
      amount: Number(amountInput.value)
    };
    console.log(transaction);
    transactions.push(transaction);
    addTransactions(transaction);
    upateValues();
    upateLocalStorage();
    textInput.value = "";
    amountInput.value = "";
  }
}

function generateId() {
  return Math.floor(Math.random() * 100000000);
}

init();

form.addEventListener("submit", handleSubmitForm);

/*
const dummyTransactions = [
  { id: 1, text: "Flower", amount: -20 },
  { id: 2, text: "Salary", amount: 300 },
  { id: 3, text: "Book", amount: -10 },
  { id: 4, text: "Camera", amount: 150 }
];
*/
