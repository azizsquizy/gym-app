const url = 'https://exercisedb.p.rapidapi.com/exercises';
const options = {
  method: 'GET',
  headers: {
	'X-RapidAPI-Key': 'a6f2ba2708mshf6f9fd64938b1cdp19099cjsn9de339cc0403',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  },
};
const url2 = 'https://youtube-search-results.p.rapidapi.com/youtube-search/';
const options2 = {
	
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a6f2ba2708mshf6f9fd64938b1cdp19099cjsn9de339cc0403',
		'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
	}
};

const fetchBodyParts = async () => {
  try {
    const response = await fetch(url + '/bodyPartList', options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchExercices = async () => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchById = async (id) => {
  try {
    const response = await fetch(url + `/exercise/${id}`, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
const fetchRelatableVids = async(query)=>{
				const response = await fetch(url2+`?q=${query}`,options2)
				const data = await response.json()
				return data
}

export { fetchExercices, fetchBodyParts, fetchById,fetchRelatableVids};
