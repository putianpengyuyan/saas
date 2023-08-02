class UrlUtil {
  static queryParams(paramName) {
    let search = window.location.search;
    search = search.slice(1, search.length);
    const searchArr = search.split("&");

    let paramValue;
    searchArr.map((item) => {
      if (item.indexOf(paramName) >= 0) {
        paramValue = item.split("=")[1];
      }
    });
    return paramValue;
  }
}
