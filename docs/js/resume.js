let showSlide = [false] * 3; 

/**
 * Shows desired resume list and hides others. 
 * 
 * @param {*} listNum 
 */
function showList(listNum) {
    let resumeLists = document.getElementsByClassName("resume-list"); 

    showSlide[listNum] = true; 

    for (i = 0; i < resumeLists.length; i++) {
        if (showSlide[i]) {
            resumeLists[i].style.display = "block"; 
        } else {
            resumeLists[i].style.display = "none"; 
        }
    }
}