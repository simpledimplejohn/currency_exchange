export default class ExchangeRate {
  static async getCountryRate(choice) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${choice}`);
      if (!response.ok) {
        console.log("throw error:", response.status)
        throw Error(response.status);
      }
      return response.json();
    } catch(error) {
      console.log("catch", error)
      return error;
    }
  }
}