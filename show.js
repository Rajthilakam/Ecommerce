console.log("Testing TV maze api")  

//First Page

class Shows {

  async getShows() {
    try {
        let num = 1  
        let result = await fetch(`http://api.tvmaze.com/shows?page=${num}`); 

        //let result = await fetch(`http://api.tvmaze.com/shows`)

        //let result = await fetch(`http://api.tvmaze.com/shows/1?embed[]=seasons&embed[]=episodes`); 

        let data = await result.json();
        console.log(data)
        console.log(typeof data,'data')
        let show = []
        for (let each of data) {   
            if ((each.genres).length >=1) {
            if ((each.genres).includes('Crime') & (each.rating.average > 8)) {
                show.push(each)
            }         
            }     
        }
        console.log(show)  

        const rating = data.filter(d => d.rating.average > 6);
        console.log(typeof rating)
        console.log('arr1', rating);
        return data
    } catch(error) {
      console.log(error)
    }
    }
  }


    //console.log(data._embedded.seasons.length,"Seasons length")
    //console.log(arr1[0])
    //let genre = data.genres
    //console.log(genre[0])
    //let seasons = data._embedded.seasons
    //let image = seasons[0].image.medium
    //console.log(image)
    //let i =0
    //let movie =[]
    //for (let each of data) {
      //console.log(each)
      //if (each.id === 501) {
        //console.log(each)
      //}
      //if (each.genres.includes("Thriller")) {

        //movie.push(each)  
      //}
    //console.log(movie)
     
    //}
    
    //let image1 = data[0].image.original;
    //console.log(image1)
   

class Singleshow {

    async getSingleShow() {
        try {
            let num = 1          
            //let result = await fetch(`http://api.tvmaze.com/shows/1?embed[]=seasons&embed[]=episodes&embed[]=cast`); 
            let result = await fetch(`http://api.tvmaze.com/shows?page=${num}`); 

            let data = await result.json();
            let movie = []
            for (let each of data) {
              if(each.genres.includes('Thriller') && (each.rating.average > 7)) {
                movie.push(each)
              }
            }

            console.log(movie)
            console.log(typeof data,'data')
            return data
        } catch(error) {
          console.log(error)
        }
        }
      }

document.addEventListener('DOMContentLoaded',() => {
  const singleShow = new Singleshow()
  singleShow.getSingleShow()
}) 