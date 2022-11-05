console.log("This is a popup!")

chrome.tabs.query(
    {active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
    document.querySelector("button").addEventListener('click', function(){
        getLocalStorage(url)
    })
});


function getLocalStorage(url){

    const oldStorage = JSON.parse(localStorage.getItem('link'))
    localStorage.setItem('link', JSON.stringify([...oldStorage, {link: url}]));

    const allStorage = JSON.parse(localStorage.getItem('link'))
    
    allStorage.map((link) => {
        console.log(link)
    })

  };