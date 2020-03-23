class Expenses {
  _income = 0;
  _expense = 0;
  _balance = 0;
  _storage = [];

  add(item) {
    this._balance += item.amount;
    this._storage.push(item);
  }

  remove(item) {
    this._balance -= item.amount;
    this._storage = this._storage.filter(deleteItem);

    // ======================
    function deleteItem(v, i, list) {
      item.desc.toLowerCase() != v.desc.toLowerCase();
    }
  }

  getBalance() {
    return this._income - this._expense;
  }

  setBalance(newBalance) {
    this._balance = newBalance;
  }
}

// let history = [
//   { amount: -100, desc: "Camera" },
//   { amount: 300, desc: "Cash" },
//   { amount: -50, desc: "Book" }
// ];

// let myExpenses = new Expenses();
// // console.log(myExpenses._balance);
// myExpenses.setBalance(9000000);
// myExpenses.remove(2000000);
// const balance = myExpenses.getBalance();
// console.log(balance);

// let myExpenses = new Expenses(100000);
// myExpenses.remove(20000);
// myExpenses.remove(2000);
// const balance = myExpenses.getBalance();
// console.log(balance);

// ************************* simple implementation *************************************************** */
/*
class Expenses {
    _balance = 0;
  
    add(amount) {
      this._balance += amount;
    }
  
    remove(amount) {
      this._balance -= amount;
    }
  
    getBalance() {
      return this._balance;
    }
  
    setBalance(newBalance) {
      this._balance = newBalance;
    }
  }
*/
// **************************************************************************** */
//   constructor(balance) {
//     balance = balance;
//   }
