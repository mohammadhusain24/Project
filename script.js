// Scroll to QR Generator Section
document.getElementById('goto-generator').addEventListener('click', function() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth"});
});

// QR Code Generation
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

  // Remove previous canvas and button
  result.innerHTML = "";

  // Create QR code
  qr = new QRious({
    element: document.createElement('canvas'),
    value: inputValue,
    size: 230,
    background: '#ffffffff',      // Change if you want
    foreground: '#041b10ff'       // Change if you want
  });

  result.appendChild(qr.element);

  // Download button
  const dlBtn = document.createElement('a');
  dlBtn.textContent = "Download PNG";
  dlBtn.href = qr.toDataURL('image/png');
  dlBtn.download = "qr-code.png";
  dlBtn.className = "download-btn";
  result.appendChild(dlBtn);
}