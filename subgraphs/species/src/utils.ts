import axios from 'axios'

export const getData = async <T>(id?: string): Promise<T | undefined> => {
    try {
        const result = await axios({
          method: 'get',
         url: `https://swapi.dev/api/species/` + ((id) ? `${id}/` : "")
        });
        return result.data;
      } catch (error) {
        console.error(`Error making SWAPI request: ${error}`);
      }
}
