function autoRecheckConfig(pageName) {
    fetch(`dataProcessing?action=checkConfig`).then(response => response.json()).then(data => {
        log(`[RE-CHECK] Server responded with ${data.response}`);
        if(data.response == "true"){
            window.location.replace("./");
        }
    });
    setTimeout(autoRecheckConfig, 3000);
}
var path = window.location.pathname;
var page = path.split("/").pop();
autoRecheckConfig(page);