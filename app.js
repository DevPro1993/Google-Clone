const apiKey = "AIzaSyBrqdM95J1Uezea7IguZoVAvXwmqC35tSQ";
const url = "https://www.googleapis.com/customsearch/v1";
const cx = "017576662512468239146:omuauf_lfve";
const searchQuery = 'lectures';


fetch(`https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${searchQuery}`)
.then(response => {
    return response.json()
}).then(data => {
    console.log(data)
})