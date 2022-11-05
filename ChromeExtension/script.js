console.log("This is a popup!")

let storage = JSON.parse(localStorage.getItem('link'))

if(storage){
    storage.map((link) => {
        let newListItem = document.createElement('li')
        let linkText = link.link
        newListItem.textContent = linkText
        document.querySelector(".list-links").append(newListItem)
    })
}


chrome.tabs.query(
    {active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
    document.querySelector("button").addEventListener('click', function(){
        getLocalStorage(url)
    })
});

document.querySelector('button.delete-URL').addEventListener('click', function(){
    let el = document.querySelector('ul')
    let child = document.querySelectorAll('li')
    el.removeChild(child[child.length - 1])

})


function getLocalStorage(url){

    const oldStorage = JSON.parse(localStorage.getItem('link'))
    if(oldStorage){
        localStorage.setItem('link', JSON.stringify([...oldStorage, {link: url}]));
    } else {
        localStorage.setItem('link', JSON.stringify([{link: url}]));
    }

    let newListItem = document.createElement('li')
    let linkText = url
    newListItem.textContent = linkText
    document.querySelector(".list-links").append(newListItem)

  };