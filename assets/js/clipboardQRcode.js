/**
 * @description copia o endereço da imagem para a área de transferência do usuário 
 * @param {HTMLElement} event não uso 😅
 * @returns {void}
 */
function copyToClipboard(event){
    const imgQRcodeBase64 = document
        .querySelector('[data-qrcode]')
        .lastChild
        .src;
    
        navigator.clipboard.writeText(imgQRcodeBase64);
}

export default copyToClipboard;