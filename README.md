### This is a sample of using HTML + JS file to make simple web page. It provides a tool to convert cups to quarts.

## Briefly introduction: 
Reference: https://www.calculatorful.com/cups-to-quarts

Quarts and cups are commonly used to measure ingredient when cooking.

The cup is a unit measurement of volume. Countries have different sizes of cup. There is a very slight difference between UK/European/Australian cups and US cups. The UK cups are 250ml and the US cups are 240ml 

The quart is an English unit of volume which equals a quarter gallon. 

So, [how many quarts in a cup](https://www.calculatorful.com/cups-to-quarts)? In general, when using cup and quart for the same country, one quart equals 4 cups

Since there are 4 cups in a quart, here is the formula:
```
1 cup = 1/4 quart
```
## Steps to create the website
1. Create a html file with the content
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cups to Quarts Converter</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <label for="v" id="variable">Cups</label>
  <input type="number" id="v"><br><br>

  <button id="btn">Calculate</button>

  <p id="result"></p>
  <script src="app.js"></script>
</body>
</html>
```
2. Create js file to define the function
```
const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

let cups = v; 

btn.addEventListener('click', function() {
  result.textContent = `Quarts = ${calculateQuarts().toFixed(5)}`;
})

function calculateQuarts() {
  return Number(cups.value) / 4;
}
```