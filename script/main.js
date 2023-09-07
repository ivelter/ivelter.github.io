window.onload = () => {
    // Check if splashscreen was already seen (if not write a cookie)
    if (
        !document.cookie
            .split("; ")
            .find((row) => row.startsWith("doSomethingOnlyOnce"))
    ) {
        const expires = (new Date(Date.now() + 86400 * 1000)).toUTCString();
        setTimeout(() => {
            document.body.classList.remove("no-scroll");
            document.getElementById("splashdiv").classList.add("displaynone");
        }, 4500);
        document.cookie = `doSomethingOnlyOnce=true; expires=${expires}; SameSite=None; Secure`;
        console.log(document.cookie);
    }
    else {
        document.getElementById("splashdiv").classList.add("notransition");
        document.body.classList.remove("no-scroll");
        document.getElementById("splashdiv").classList.add("displaynone");
    }

    // Add le funny
    document.getElementById("#mainlogo").addEventListener("click", () => {
        new Audio("./src/sound/funny.mp3").play();
    });
}