document.getElementById('calculateButton').addEventListener('click', function() {
    calculateVAT();
  });

  function calculateVAT() {
    var amount = parseFloat(document.getElementById('amount').value);

    if (isNaN(amount)) {
      alert('Please enter a valid amount.');
      return;
    }

    var vat = 0.15 * amount;
    var totalAmount = amount + vat;

    document.getElementById('result').innerHTML = `VAT (15%): R${vat.toFixed(2)}<br>Total Amount (including VAT): R${totalAmount.toFixed(2)}`;
  }