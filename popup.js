window.onload = () => {
    const button = document.getElementById("button")
    chrome.storage.sync.get("enabled", result => {
        if (result.enabled) {
            button.innerHTML = "Disable"
            button.style.backgroundColor = "#aaffaa"
        } else {
            button.innerHTML = "Enable"
            button.style.backgroundColor = "#ffaaaa"
        }
    })
    button.onclick = () => {
        chrome.storage.sync.get("enabled", result => {
            if (result.enabled) {
                chrome.storage.sync.set({"enabled": false}, () => {
                    button.innerHTML = "Enable"
                    button.style.backgroundColor = "#ffaaaa"
                })
            } else {
                chrome.storage.sync.set({"enabled": true}, () => {
                    button.innerHTML = "Disable"
                    button.style.backgroundColor = "#aaffaa"
                })
            }
        })
    }
}