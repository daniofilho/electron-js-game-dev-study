// # Exposing IPC specific methods - https://www.electronjs.org/pt/docs/latest/tutorial/ipc

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  minimizeWindow: () => {
    ipcRenderer.send('MINIMIZE', {});
  },
  maximizeWindow: () => ipcRenderer.send('TOGGLE_FULLSCREEN', {}),
  closeWindow: () => window.close(),
  baseURL: () => (process.env.npm_lifecycle_event === 'start' ? '/main_window/' : '/'),
});
