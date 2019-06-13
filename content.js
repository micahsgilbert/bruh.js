const audio = new Audio("https://micahsgilbert.dev/bruh.mp3")

function bruh() {
    chrome.storage.sync.get(["enabled"], (res) => {
        if (res.enabled) {
            const duplicate = audio.cloneNode()
            duplicate.play()
        }
    })
}

const html = document.getElementsByTagName("html")[0]

html.onmousedown = bruh

const texts = ["input", "textarea", "div"]

for (let t of texts) {
    for (let elem of document.getElementsByTagName(t)) {
        elem.onkeydown = bruh
    }
}

for (let a of document.getElementsByTagName("a")) {
    if (a.href) {
        a.addEventListener("click", (e) => {
            e.preventDefault()
            setTimeout(() => {
                window.location.href = a.href
            }, 500)
        })
    }
}