/**
 * Removes spinner-lord from the DOM
 * @author Voltra
 * @param {jQuery|object} $ a jquery-like library
 */
export default function removeSpinnerLord($){
    $("#spinner-lord").addClass("inactive")
    .removeClass("active")
    .on("webkitAnimationEnd oanimationend msAnimationEnd animationend", function(e){
        $(this).off(e).remove();
    });
}