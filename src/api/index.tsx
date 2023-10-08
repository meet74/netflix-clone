import { moviePosterApiUrl } from "../constant/Urls"

export const gettingMoviePosters = () => {
     const response = fetch(moviePosterApiUrl).then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Something went wrong');
      })
      .then((responseJson) => {
        //console.log(responseJson);
        
        return responseJson
      }).catch(err=> {return err})
}