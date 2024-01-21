# QR code generator 📋

Gerador de QR code. O projeto faz parte do desafio proposto pelo site [devchallenges.io](https://devchallenges.io).

Para conferir o resultado, clique [aqui](https://multi-step-register-form-flax.vercel.app/).

A página do desafio pode ser acessada [aqui](https://devchallenges.io/challenge/41).

## Tecnologias utilizadas 🖥️

HTML5, CSS, Javascript, JSDoc, bibliotecas [QRCode.js](https://github.com/davidshimjs/qrcodejs) e [jsPDF](https://github.com/parallax/jsPDF). Tive algumas dificuldades para criar o projeto: precisei dominar a biblioteca que gera o QRcode e validá-lo - meu celular não estava capitando direito. 😅

A outra dificuldade foi a geração do pdf com a imagem gerada. A biblioteca que faz isso até gera com imagens com base 64. O problema foi que a biblioteca não aceitava o caminho da imagem. Depois de muito tempo, identifiquei que era necessário remover o cabeçalho da imagem antes de usar. 

## Referências 🔗
* [QRCode.js](https://github.com/davidshimjs/qrcodejs)
* [Como Gerar QR Code com Javascript - \[ TUTORIAL \]](https://www.brasilcode.com.br/como-gerar-qr-code-com-javascript-tutorial/)
* [Biblioteca jsPDF](https://github.com/parallax/jsPDF)
* [How to Add Images to a PDF Document with JavaScript](https://www.youtube.com/watch?v=C2TGNpQfbOg)
* [Ícones svg](https://uxwing.com/hyperlink-icon/)
* [Expressão regular para validar URL](https://regexr.com/39nr7)
* [emojipedia.org](https://emojipedia.org/smileys)