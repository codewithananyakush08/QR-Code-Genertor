
const code = document.querySelector("#code");
const downloadBtn = document.querySelector("#qr-download");

document.querySelector("#qr-generator").addEventListener("click", handleQRCode);
downloadBtn.addEventListener("click", downloadQRCode);

function handleQRCode() {
    const input = document.querySelector("#inputText").value;
    if (!input) {
        alert("Please enter a value to generate a QR code");
        return;
    }
    new QRious({
        element: code,
        value: input,
        size: 300,
    });
    code.style.display = "block";
    downloadBtn.style.display = "block";
}

function downloadQRCode() {
    let name = document.querySelector("#fileName").value.trim();
    if (!name) name = "qr-code";

    const link = document.createElement("a");
    link.download = name + ".png";
    link.href = code.toDataURL("image/png");
    link.click();
}

function downloadQRCode() {
    let name = document.querySelector("#fileName").value.trim();
    if (!name) name = "qr-code";

    const link = document.createElement("a");
    link.download = name + ".png";
    link.href = code.toDataURL("image/png");
    link.click();

    // download ke baad sab saaf
    inputText.value = "";
    document.querySelector("#fileName").value = "";
    clearBtn.style.display = "none";
    code.style.display = "none";
    downloadBtn.style.display = "none";
}