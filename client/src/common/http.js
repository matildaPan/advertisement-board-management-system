export const post =  (url, data)=>{
  const option = {
    body: JSON.stringify(data),
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  };
  return fetch(url, option);
};

export const get = (url)=>{
  const option = {
    method: "GET"
  };
  return fetch(url, option);
}