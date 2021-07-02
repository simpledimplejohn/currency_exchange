export default class GifSearch {
  static async getGif(searchTerm) {
    try {
      
      const response = await fetch(`http://api.giphy.com/v1/gifs/search?=&api_key=${process.env.API_KEY}&q=${searchTerm}`);
      if (!response.ok) {
        throw Error(response.statusTextError);
      }
      return response.json();
    } catch(error) {
      return error.message;     
    }
  }
}
//First, we update our static method to be async. Next, we need to wrap our code in a try...catch block. We aren't resolving or rejecting promises here so we need to handle any errors ourselves.

//Inside the try block, we'll make our API call with fetch() and then use the await keyword to wait for the API call to complete. The rest of the service code is unchanged - we throw an error if the response property isn't ok. If the response property is ok, we return the streaming data.//

