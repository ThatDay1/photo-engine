document.querySelector("#input").addEventListener("keypress", (e) => {
    // console.log(e);
        if (e.key == "Enter")
            apiRequest();
        });    

document.querySelector("#search").addEventListener("click", () => {
    apiRequest();
});

const apiRequest = () => {
    document.querySelector("#result").textContent = "";

    const url = `https://api.unsplash.com/search/photos/?query=${input.value}&per_page=30&client_id=c6BDjlHEWdkKuV6ngAamLq1REP-dApiT1BLuuykwBYg`
    console.log(input.value);
    fetch (url)
        .then(response => response.json())
        .then(data => {
            loadImages(data)
        })
        .catch(err => console.log(err))
}

const loadImages = (data) => {
    console.log(data);

    for (let i = 0; i < data.results.length; i++) {
        let image = document.createElement("div");
        image.className = "img";
        image.style.backgroundImage = `url(${data.results[i].urls.raw}&w=1366&h=768)`;
        image.addEventListener("dblclick", () => {
            window.open(data.results[i].links.download, '_blank')
        })

        document.querySelector("#result").appendChild(image)
    }
}