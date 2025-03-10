document.addEventListener('DOMContentLoaded', () => {
    const calcForm = document.getElementById('calcForm');
    const resultDecimal = document.getElementById('resultDecimal');
    const resultBinary = document.getElementById('resultBinary');
  
    calcForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const mode = document.querySelector('input[name="mode"]:checked').value;
      const inputA = document.getElementById('valueA').value.trim();
      const inputB = document.getElementById('valueB').value.trim();
      const operation = document.getElementById('operation').value;
      
      let valueA, valueB;
  
      // Parse the inputs based on the selected mode
      if (mode === 'decimal') {
        valueA = parseFloat(inputA);
        valueB = parseFloat(inputB);
        if (isNaN(valueA) || isNaN(valueB)) {
          alert("Please enter valid decimal numbers.");
          return;
        }
      } else { // binary mode
        // Validate binary input (only 0s and 1s allowed)
        if (!/^[01]+$/.test(inputA) || !/^[01]+$/.test(inputB)) {
          alert("Please enter valid binary numbers (only 0s and 1s).");
          return;
        }
        valueA = parseInt(inputA, 2);
        valueB = parseInt(inputB, 2);
      }
  
      let result;
      switch (operation) {
        case 'add':
          result = valueA + valueB;
          break;
        case 'subtract':
          result = valueA - valueB;
          break;
        case 'multiply':
          result = valueA * valueB;
          break;
        case 'divide':
          if (valueB === 0) {
            alert("Division by zero error.");
            return;
          }
          result = Math.floor(valueA / valueB);
          break;
        default:
          result = 0;
      }
  
      // Display the result in both decimal and bina
      resultDecimal.textContent = `Decimal: ${result}`;
      resultBinary.textContent = `Binary: ${result.toString(2)}`;
    });
  });
  