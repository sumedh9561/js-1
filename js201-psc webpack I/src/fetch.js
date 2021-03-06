let searchImg = async (API, query) => {
    try {
        let res = await fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=28&client_id=${API}`);
        let data = await res.json();
        // console.log(data.results);
        return data;
    } catch (err) {
        console.log(err);

    }
}

// let append = (data, container)=>{
//     data.forEach(({alt_description, urls:{small}})=>{
//         let div = document.createElement("div");
//         let img = document.createElement("img");
//         img.setAttribute("class","image")
//         // let h3 = document.createElement("h3");

//         img.src = small;
//         // h3.textContent = alt_description;

//         div.append(img);
//         container.append(div);
//     })
// }
let append = (data, container) => {
    data.forEach(({ alt_description, urls: { small } }) => {
        
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.setAttribute("class", "image")
        let divh4 = document.createElement("div");
        divh4.setAttribute("class","name");
        let h4 = document.createElement("h4");

        img.src = small;
        h4.textContent = alt_description;
        divh4.append(h4)
        div.append(img,divh4);
        container.append(div);
         
    })
   
}



export { searchImg, append };