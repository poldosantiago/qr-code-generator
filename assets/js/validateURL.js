/**
 * @description recebe a url e faz a validação da URL.
 * @param {HTMLButtonElement} event 
 * @returns {void}
 * @see <a href="https://github.com/davidshimjs/qrcodejs">QRCode.js</a>
 * @see <a href="https://www.brasilcode.com.br/como-gerar-qr-code-com-javascript-tutorial/">Como Gerar QR Code com Javascript - [TUTORIAL]</a>
 */
function startValidateURL(event){
    const url = document.querySelector('[ data-qrcode-input]').value;

    const result = validateURL(url);

    if(result){
        //cria o QRcode com base na url
        const qrcode = new QRCode(document.querySelector("[data-qrcode]"), {
            width : 200,
            height : 200
        });
        qrcode.makeCode(url);

        const step1 = document.querySelector('[data-step-page="search-page"]');
        const step2 = document.querySelector('[data-step-page="QR-code-page"]');

        step1.classList.add("--disable");
        step2.classList.remove("--disable");
    }
    else{
        event.target.nextElementSibling.classList.remove("--hidden");
    }
}

/**
 * @description faz a validação de uma url com expressão regular
 * @param {string} url 
 * @returns {boolean}
 * @see https://regexr.com/39nr7
  */
function validateURL(url){
    const regex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig;

    return regex.test(url);
}

export default startValidateURL;



