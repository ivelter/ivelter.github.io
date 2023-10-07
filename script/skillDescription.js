let previousElement = null;
function showDescription(skillName) {
    const element = document.getElementById("skill" + skillName);
    element.classList.remove('displaynone');
    if (previousElement != null) {
        previousElement.classList.add('displaynone');
    }
    else {
        document.getElementById('skillsdescription').classList.remove('noborder');
        document.getElementById('skillsdescription').classList.add('yesborder');
    }
    previousElement = element;
}