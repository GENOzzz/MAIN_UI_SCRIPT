const Root=document.getElementById('root')

async function getData(url){
    const res = await fetch(url,{
        "method": "GET",
	    "headers": {
		"x-rapidapi-host": "beer-live.p.rapidapi.com",
		"x-rapidapi-key": "8c18af2c25msh811a2707002d530p16e05bjsnbdfe38e6a701"
	}
})
.then(response => {
	console.log(response);
    return response.json()
})
.then(data=>{
    console.log(data)
    data.forEach(element=>{
        const Beer=document.createElement('div')
        Beer.className='Beer'
        const name=element.bier
        const herk=element.herkunft
        const bewrung=element.bewertung
        const votes=element.votes
        Beer.innerHTML=`name : ${name}<br><br/>
        herkunft : ${herk}<br><br/>
        bewrung : ${bewrung}<br><br/>
        votes : ${votes}
        <br><br/><br><br/>`
        Root.append(Beer)
    }) 
})
.catch(err => {
	console.error(err);
});
}

getData("https://beer-live.p.rapidapi.com/beers")

