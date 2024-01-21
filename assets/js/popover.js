/**
 * @description esconde o popover (mensagem) ativado depois de um tempo
 * @param {HTMLElement} event elemento HTML com o atributo popover
 * @returns {void} 
 * @link https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/beforetoggle_event
 */
function hidePopover(event){
    const popover = event.target;

    if (event.newState === "open") {
      // console.log("Popover is being shown");
      setTimeout(() => {
        popover.hidePopover();
    }, 3000);

    }else {
      //console.log("Popover is being hidden");
    }
}

export default hidePopover;