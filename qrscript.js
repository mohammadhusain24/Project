// qrscript.js
const form = document.getElementById('qr-form');
const input = document.getElementById('qr-input');
const result = document.getElementById('qr-result');

let qr;

form.addEventListener('submit', function(event) {
  event.preventDefault();
  generateQRCode();
});

function generateQRCode() {
  const inputValue = input.value.trim();
  if (!inputValue) return;

  // Remove previous canvas
  result.innerHTML = "";

  // Generate new QR
  qr = new QRious({
    element: document.createElement('canvas'),
    value: inputValue,
    size: 230,
    background: '#ffffff',
    foreground: '#122525'
  });

  result.appendChild(qr.element);

  // Optionally add download button
  const dlBtn = document.createElement('a');
  dlBtn.textContent = "Download PNG";
  dlBtn.href = qr.toDataURL('image/png');
  dlBtn.download = "qr-code.png";
  dlBtn.className = "download-btn";
  result.appendChild(dlBtn);
}
