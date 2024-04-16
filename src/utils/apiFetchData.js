 //"https://youtube138.p.rapidapi.com"

//const YOUTUBE_URL="https://www.googleapis.com/youtube/v3"
const options = {
    method:"GET",
    /*headers:{
        'X-RapidAPI-Key':'150338ab06msh385b097f569178bp1241f3jsn7c71a0f792e6',
        'X-RapidAPI-Host':'youtube138.p.rapidapi.com'
    }*/
}

export const fetchFromApi = async(url)=>{
    try{
        const response = await fetch(url,options)
        const result = await response.json()
        console.log(result)
        return result
    }
    catch(error){
        console.log(error)
    }
}