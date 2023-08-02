class LoadingUtil {
  static show() {
    const loadingMask = document.querySelector('.loading-mask');
    loadingMask.classList.add('loading-show');
    document.querySelector('#app').classList.add('overflow-hidden');
    console.log("show!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  }

  static close() {
    const loadingMask = document.querySelector('.loading-mask');
    loadingMask.classList.remove('loading-show');
    document.querySelector('#app').classList.remove('overflow-hidden');
    console.log("close!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  }
}
