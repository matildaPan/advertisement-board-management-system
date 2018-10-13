export const post =  (url, data, requireAuth)=>{
  const option = {
    body: JSON.stringify(data),
    method: "POST",
    header: {
      'Content-Type': 'application/json'
    }
  };
  return fetch(url, option);
};

export const get = (url, requireAuth)=>{
  const option = {
    method: "GET"
  };
  return fetch(url, option);
}