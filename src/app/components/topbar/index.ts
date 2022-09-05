const TopBarHandler = () => {
  const loadOnDom = (dom: HTMLElement, newImage: string) => {
    const image = new Image();
    image.onload = function (this: HTMLImageElement) {
      dom.setAttribute('src', this.src);
    };
    image.src = newImage;
  };

  const loadImagesOnButtons = () => {
    const baseURL = window.electronAPI.baseURL();

    const minimizeDOM = window.document.getElementById('button-minimize');
    loadOnDom(minimizeDOM, `${baseURL}images/topbar/minimize.png`);

    const maximizeDOM = window.document.getElementById('button-maximize');
    loadOnDom(maximizeDOM, `${baseURL}images/topbar/maximize.png`);

    const closeDOM = window.document.getElementById('button-close');
    loadOnDom(closeDOM, `${baseURL}images/topbar/close.png`);
  };

  const minimize = () => {
    return window.electronAPI.minimizeWindow();
  };

  const maximize = () => {
    return window.electronAPI.maximizeWindow();
  };

  const close = () => {
    return window.electronAPI.closeWindow();
  };

  return {
    minimize,
    maximize,
    close,
    loadImagesOnButtons,
  };
};

let topBarHandler = null;

window.addEventListener('load', () => {
  topBarHandler = TopBarHandler();
  topBarHandler.loadImagesOnButtons();

  window.topBarHandler = topBarHandler;
});
