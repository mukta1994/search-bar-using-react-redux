export const getSearchResults = async (query:string,counter:number) => {
    try {

        const requestOptions ={
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( {
              "query": query,
              "entities":[
                    { "entity": "causes", "perPage": 6, "currentPage": counter }
                ]
            })
        };

      const response = await fetch('https://staging-api.kinder.world/search/public?include=cause.images.files,cause.logo.files,cause.categories,cause.hasPassedPreliminary,appeal.organisations.cause', requestOptions)
      const data = await response.json();
      console.log(data,"complete data")
      if (response.ok) {
        return data.causes;
        
      } else {
        throw new Error('Network response was not ok.')
      }

    } catch (error) {
      console.log(error, "error")
      return []
    }
  }