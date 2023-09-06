function onMainLoad() {
    // merci la doc firefox le sang
    if (
        !document.cookie
            .split("; ")
            .find((row) => row.startsWith("doSomethingOnlyOnce"))
    ) {
        document.cookie = "doSomethingOnlyOnce=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=None; Secure";
    }
    else {
        document.getElementById("splashdiv").classList.add("notransition");
    }
}