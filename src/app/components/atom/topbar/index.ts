const TopBarHandler = () => {
  const minimize = () => {
    return ((window as any).electronAPI as IElectronAPI).minimizeWindow();
  };

  const maximize = () => {
    return ((window as any).electronAPI as IElectronAPI).maximizeWindow();
  };

  const close = () => {
    return ((window as any).electronAPI as IElectronAPI).closeWindow();
  };

  return {
    minimize,
    maximize,
    close,
  };
};

window.addEventListener('load', () => {
  (window as any).topBarHandler = TopBarHandler();
});
