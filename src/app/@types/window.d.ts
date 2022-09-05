export {};
declare global {
  interface Window {
    electronAPI: {
      minimizeWindow: () => void;
      maximizeWindow: () => void;
      closeWindow: () => void;

      baseURL: () => string;
    };

    topBarHandler: ITopBarHandler;
  }
}
