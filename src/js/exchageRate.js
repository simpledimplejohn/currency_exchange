export default class ExchangeRate {
  static async getCountryRate(choice) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${choice}`);
      if (!response.ok) {
        throw Error(response.statusTextError);
      }
      console.log("getCountryRate: ", response.json)
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}