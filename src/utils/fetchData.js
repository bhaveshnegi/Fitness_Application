export const exerciseOptions =  {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '3588c5055amshdc33a3b3bbd75b1p1d3248jsn485ddbccdb52',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions =  {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '3588c5055amshdc33a3b3bbd75b1p1d3248jsn485ddbccdb52',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
