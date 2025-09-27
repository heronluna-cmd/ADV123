// Account simulation
let account = {
  balance: 500
};

// Simulated transaction amount
const transferAmount = 300;

// Step 1: Check balance
function checkBalance(amount) {
  return new Promise((resolve, reject) => {
    console.log("Checking balance...");
    setTimeout(() => {
      if (account.balance >= amount) {
        resolve("Sufficient balance.");
      } else {
        reject("❌ Insufficient funds.");
      }
    }, 1000);
  });
}

// Step 2: Deduct amount
function deductAmount(amount) {
  return new Promise((resolve, reject) => {
    console.log("Deducting amount...");
    setTimeout(() => {
      // Simulate random failure (e.g., network glitch)
      const success = Math.random() > 0.1;
      if (success) {
        account.balance -= amount;
        resolve(`✅ Amount deducted. New balance: ${account.balance}`);
      } else {
        reject("❌ Failed to deduct amount due to system error.");
      }
    }, 1000);
  });
}

// Step 3: Confirm transaction
function confirmTransaction() {
  return new Promise((resolve, reject) => {
    console.log("Confirming transaction...");
    setTimeout(() => {
      const confirmed = Math.random() > 0.05; // 95% success chance
      if (confirmed) {
        resolve("✅ Transaction complete.");
      } else {
        reject("❌ Transaction failed at confirmation step.");
      }
    }, 1000);
  });
}

// Run the full process
function transferMoney(amount) {
  checkBalance(amount)
    .then((msg) => {
      console.log(msg);
      return deductAmount(amount);
    })
    .then((msg) => {
      console.log(msg);
      return confirmTransaction();
    })
    .then((msg) => {
      console.log(msg);
    })
    .catch((err) => {
      console.error("Transaction Error:", err);
    });
}

// Start transaction
transferMoney(transferAmount);
