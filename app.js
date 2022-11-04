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
