/**
 * Removes spinner-lord from the DOM
 * @author Voltra
 * @param {jQuery|object} $ a jquery-like library
 */
export default function removeSpinnerLord($){
    const $spinnerLord = $("#spinner-lord");
    $spinnerLord
    .on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(e){
        $spinnerLord.off(e).remove();
    }).addClass("inactive");
}