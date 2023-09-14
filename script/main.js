window.onload = () => {
    // Check if splashscreen was already seen (if not write a cookie)
    if (
        !document.cookie
            .split("; ")
            .find((row) => row.startsWith("doSomethingOnlyOnce"))
    ) {
        //const expires = (new Date(Date.now() + 86400 * 1000)).toUTCString();
        setTimeout(() => {
            document.body.classList.remove("no-scroll");
            document.getElementById("splashdiv").classList.add("displaynone");
        }, 4500);
        //document.cookie = `doSomethingOnlyOnce=true; expires=${expires}; SameSite=None; Secure`;
        setCookie("doSomethingOnlyOnce","true",1);
        console.log(document.cookie);
    }
    else {
        document.getElementById("splashdiv").classList.add("notransition");
        document.body.classList.remove("no-scroll");
        document.getElementById("splashdiv").classList.add("displaynone");
    }

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
    document.querySelectorAll(".en").forEach(elem => {
        elem.classList.add("dontdisplay");
    })
    document.querySelectorAll(".fr").forEach(elem => {
        elem.classList.remove("dontdisplay");
    })
}

function switchToEnglish() {
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
    return getCookie("cname") != "";
}