/**
 * @description faz o download da imagem QRcode. Uso a bibliotecajsPDF para gerar o pdf.
 * @param {HTMLButtonElement} event não uso 😅
 * @returns {void}
 * @see <a href="https://github.com/parallax/jsPDF">jsPDF</a>
 * @see <a href="https://www.youtube.com/watch?v=C2TGNpQfbOg">How to Add Images to a PDF Document with JavaScript</a>
 */
function downloadQRcode(event){
    //seleciona a tag da imagem, coleta caminho da imagem (src), e remove o cabeçalho da imagem base 64
    const imgQRcodeBase64 = document
        .querySelector('[data-qrcode]')
        .lastChild
        .src
        .split(',')[1];

    //URL em questão    
    const currentURL = document.querySelector('[data-qrcode]').title;

    const { jsPDF } = jspdf;
    const doc = new jsPDF();

    doc.text("QRcode", 10, 10);
    doc.text(`URL: ${currentURL}`, 10, 20)
    doc.addImage(imgQRcodeBase64, "png", 10, 30);
    doc.save("QRcode.pdf");
}

export default downloadQRcode;