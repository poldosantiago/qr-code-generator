import startValidateURL from "./assets/js/validateURL.js";
import downloadQRcode from "./assets/js/downloadQRcode.js";
import copyToClipboard from "./assets/js/clipboardQRcode.js";
import hidePopover from "./assets/js/popover.js";

const qrcodeButton = document.querySelector('[data-qrcode-button]');
const btnDownload = document.querySelector('[data-btn-download]');
const btnShare = document.querySelector('[data-btn-share]');
const popover = document.getElementById('message'); //mensagem ao usar o botão 'share'

qrcodeButton.addEventListener('click', startValidateURL);
btnDownload.addEventListener('click', downloadQRcode);
btnShare.addEventListener('click', copyToClipboard);
popover.addEventListener("beforetoggle", hidePopover); //oculta o popover (mensagem de copiado) depois de um tempo


