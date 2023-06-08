

const fetchAllSongs = async(url) => {

    const response = await fetch (url,{
        method: "GET",
        headers:{
            "Content-Type": "application/json",
        },

    });
    const result = await response.json();
    result.forEach(element => {
        console.log(
            'Album is ${element.title} and lengtbh is ${element.length.hours} and minutes is${element.length.minutes}'
        );
    });

    console.log(result)
};

const fetchAlbum = async (url, id) => {
    const responsse = await fetch('${url}/${id}',{
        method:"GET",
        headers: {
            "Content-Type":"application/json",

        }
    });
    const data = await
    responsse.json();
    
    console.log(data);
}

const init = () => {

    console.log("fetch song");

    fetchAllSongs("https://fsa-async-await.herokuapp.com/api/guided-practice/songs");
};

init();