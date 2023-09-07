function onMainLoad() {
    // merci la doc firefox le sang
    if (
        !document.cookie
            .split("; ")
            .find((row) => row.startsWith("doSomethingOnlyOnce"))
    ) {
        const expires = (new Date(Date.now() + 86400 * 1000)).toUTCString();
        document.cookie = `doSomethingOnlyOnce=true; expires=${expires}; SameSite=None; Secure`;
        console.log(document.cookie);
    }
    else {
        document.getElementById("splashdiv").classList.add("notransition");
    }
}