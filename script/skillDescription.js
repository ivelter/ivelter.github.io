let previousElement = null;
function showDescription(skillName) {
    const element = document.getElementById("skill" + skillName);
    element.classList.remove('displaynone');
    // badge lazy loading
    if (skillName==="softskills" && document.getElementById("badgesSoft").children.length === 0) {
        document.getElementById("badgesSoft").innerHTML = `
            <iframe  frameborder="0"  scrolling="no" src="https://openbadgepassport.com/app/badge/info/642466/pic/embed" width="200" height="270" loading="lazy"></iframe>
            <iframe  frameborder="0"  scrolling="no" src="https://openbadgepassport.com/app/badge/info/642468/pic/embed" width="200" height="270" loading="lazy"></iframe>
            <iframe  frameborder="0"  scrolling="no" src="https://openbadgepassport.com/app/badge/info/642467/pic/embed" width="200" height="270" loading="lazy"></iframe>
        `;
    }

    if (previousElement != null && element !== previousElement) {
        previousElement.classList.add('displaynone');
    }
    else {
        document.getElementById('skillsdescription').classList.remove('noborder');
        document.getElementById('skillsdescription').classList.add('yesborder');
    }
    previousElement = element;
}

