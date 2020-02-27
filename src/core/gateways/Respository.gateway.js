export default class {
  constructor(api, adapter) {
    this.api = api;
    this.adapter = adapter;
  }

  async getRepositories({ fromDate, toDate, fromStars, toStars, language }) {
    const formattedFromDate = this.adapter.formatDateToApi(fromDate);
    const formattedToDate = this.adapter.formatDateToApi(toDate);

    let queryURL = `https://api.github.com/search/repositories?q=good-first-issues:>0`;
    queryURL += `+topic:${language}`;
    queryURL += `+stars:${fromStars}..${toStars}`;
    queryURL += `+created:${formattedFromDate}..${formattedToDate}`;
    console.log('url: ', queryURL);

    try {
      const response = await this.api.get(queryURL);
      return response;
    } catch (error) {
      console.log(`error: `, error);
      return error;
    }
  }
}
