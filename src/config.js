export function getQueryParams() {
    const queryParams = {};
    const queryString = window.location.search.slice(1);
    const pairs = queryString.split('&');
  
    pairs.forEach(pair => {
      const [key, value] = pair.split('=');
      queryParams[key] = decodeURIComponent(value);
    });
  
    return queryParams;
  }