window.onload = () => {
    onLoad();
}

function onLoad() {
    // Check user language
    if(!checkCookieExists("lang")) {
        setCookie("lang",navigator.language,365);
    }
    if(getCookie("lang") === "fr") {
        switchToFrench();
    }
    else {
        switchToEnglish();
    }

    // Add le funny
    document.getElementById("#mainlogo").addEventListener("click", () => {
        new Audio("./src/sound/funny.mp3").play();
    });
}

// lang mngt
function switchToFrench() {
    setCookie("lang","fr",365);
    document.querySelectorAll(".en").forEach(elem => {
        elem.classList.add("dontdisplay");
    })
    document.querySelectorAll(".fr").forEach(elem => {
        elem.classList.remove("dontdisplay");
    })
}

function switchToEnglish() {
    setCookie("lang","en-EN",365);
    document.querySelectorAll(".fr").forEach(elem => {
        elem.classList.add("dontdisplay");
    })
    document.querySelectorAll(".en").forEach(elem => {
        elem.classList.remove("dontdisplay");
    })
}

// cookie mngt
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookieExists(cname) {
    return getCookie(cname) !== "";
}