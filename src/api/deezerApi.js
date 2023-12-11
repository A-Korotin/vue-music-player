export class DeezerApi {
    constructor(api) {
        this.api = api;
    }

    async search(query) {
        const apiKeys = {
            "X-RapidAPI-Key": "bd64f7aebfmsh7203062447d77f1p17a7b3jsn355f0d6dbb7b",
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com"
        }

        const options = {
            method: 'GET',
            url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
            params: { q: query },
            headers: apiKeys
        };

        return this.api(options);
    }
}