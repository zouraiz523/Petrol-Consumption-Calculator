 // script.

 document.getElementById('kilometers').addEventListener('input', calculatePetrol);
 document.getElementById('engine-cc').addEventListener('input', calculatePetrol);
 document.getElementById('petrol-price').addEventListener('input', calculatePetrol);
 
 function calculatePetrol() {
     const kilometers = parseFloat(document.getElementById('kilometers').value);
     const engineCC = parseFloat(document.getElementById('engine-cc').value);
     const petrolPrice = parseFloat(document.getElementById('petrol-price').value);
 
     if (isNaN(engineCC) || isNaN(kilometers) || isNaN(petrolPrice)) {
         document.getElementById('result').innerText = 'Please enter valid numbers for kilometers, engine CC, and petrol price.';
         return;
     }
 
     // Assume average mileage is inversely proportional to engine CC.
     const averageMileage = 40 - (engineCC / 100); // Example logic
     const petrolRequired = kilometers / averageMileage;
     const totalCost = petrolRequired * petrolPrice;
 
     document.getElementById('result').innerText = `Petrol Required: ${petrolRequired.toFixed(2)} liters\nTotal Cost: ${totalCost.toFixed(2)}`;
 }
 