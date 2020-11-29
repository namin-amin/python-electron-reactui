const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipcMain = electron.ipcMain;
const axios = require('axios')

const path = require('path');
const isDev = require('electron-is-dev');


let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({width: 900, height: 680, webPreferences: {
    nodeIntegration: true,
    enableRemoteModule: true
}});
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  mainWindow.removeMenu();
  mainWindow.on('closed', () => mainWindow = null);
   mainWindow.webContents.session.clearCache(function(){
    console.log("done")
    });
}


app.on('ready',()=>{

if (!isDev){
  const child = require('child_process').execFile;
  const execpath = path.join(__dirname,'app')
  child(execpath,[], (error, data,data1) => {
    if (error) {
      throw error;
    return;
    }
    console.log(data);
  });
}

  createWindow()
});

app.on('window-all-closed',()=>{
  axios.get("http://127.0.0.1:5000//endapp")
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
