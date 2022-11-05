console.log("This is a popup!")

let storage = JSON.parse(localStorage.getItem('link'))

if(storage){
    storage.map((link) => {
        let newListItem = document.createElement('li')
        let anchor = document.createElement('a')
        let linkText = link.link
        let recipient = link.for

        anchor.setAttribute('href', linkText)
        anchor.setAttribute('target', '_blank')
        anchor.textContent = `Item Link for ${recipient}`

        newListItem.append(anchor)

        document.querySelector(".list-links").append(newListItem)
    })
}


chrome.tabs.query(
    {active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
    document.querySelector("button").addEventListener('click', function(){
        console.log(document.querySelector(".input-value").value)
        getLocalStorage(url)
    })
});

document.querySelector('button.delete-URL').addEventListener('click', function(){
    localStorage.clear()
    let el = document.querySelector('ul')
    let child = document.querySelectorAll('li')
    el.removeChild(child[child.length - 1])
})


function getLocalStorage(url){

    let recipient = document.querySelector(".input-value").value

    const oldStorage = JSON.parse(localStorage.getItem('link'))
    if(oldStorage){
        localStorage.setItem('link', JSON.stringify([...oldStorage, {link: url, for: recipient}]));
    } else {
        localStorage.setItem('link', JSON.stringify([{link: url, for: recipient}]));
    }

    let newListItem = document.createElement('li')
    let linkText = url
    let anchor = document.createElement('a')

    anchor.setAttribute('href', linkText)
    anchor.setAttribute('target', '_blank')
    anchor.textContent = `Item Link for ${recipient}`

    newListItem.append(anchor)

    document.querySelector(".list-links").append(newListItem)

  };