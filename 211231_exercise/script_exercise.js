const Root=document.getElementById("root")

async function getData(url){
    const res = await fetch(url,{
        "method": "GET",
	    "headers": {
		    "x-rapidapi-host": "free-epic-games.p.rapidapi.com",
		    "x-rapidapi-key": "8c18af2c25msh811a2707002d530p16e05bjsnbdfe38e6a701"
	    }
    })
    .then(response => {
        console.log(response);
        return response.json()
    })
    .then(data=>{
        console.log(data)
        data.freeGames.current.forEach(element=>{
            console.log(element)
            const imgdiv=document.createElement('div')
            imgdiv.className='imgDiv'
            const keyImages=element.keyImages
            console.log(keyImages)
            for(keyImage of keyImages){
                console.log(keyImage)
                const img = document.createElement('img')
                img.src=keyImage.url
                imgdiv.append(img)
            }
            const titles=document.createElement('div')
            titles.innerHTML=`title : ${element.title}`
            const description=document.createElement('div')
            description.innerHTML=`description : ${element.description}<br><br/>`
            Root.append(imgdiv,titles,description)
        })
    })
    .catch(err => {
        console.error(err);
    });
}

getData("https://free-epic-games.p.rapidapi.com/free")

// fetch("https://free-epic-games.p.rapidapi.com/free", {
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-host": "free-epic-games.p.rapidapi.com",
//         "x-rapidapi-key": "8c18af2c25msh811a2707002d530p16e05bjsnbdfe38e6a701"
//     }
// })
// .then(response => {
//     console.log(response);
//     return response.json()
// })
// .then(data=>{
//     console.log(data)
//     data.forEach(createDiv)
// })
// .catch(err => {
//     console.error(err);
// });