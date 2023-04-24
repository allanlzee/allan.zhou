var numberClicks = [0, 0, 0, 0];

/**
 * Shows desired resume list and hides others. 
 * 
 * @param {*} listNum 
 */
function showList(listNum) { 
    let resumeLists = document.getElementsByClassName("resume-list"); 

    if (listNum != -1) {
        numberClicks[listNum]++;
    }

    for (i = 0; i < resumeLists.length; i++) {
        if (numberClicks[i] % 2 == 1) {
            resumeLists[i].style.animation = "fade-in 1250ms ease-in-out forwards";
            resumeLists[i].style.display = "block"; 
        } else {
            resumeLists[i].style.animation = "fade-out 1250ms"; 
            resumeLists[i].style.display = "none"; 
        }
    }
}
