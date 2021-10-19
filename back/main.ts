import { app, BrowserWindow, ipcMain } from "electron";
import * as path from "path";
import * as url from 'url';

function createWindow() {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        //preload: path.join(__dirname, "preload.js"),
        },
        width: 800,
    });

    // and load the index.html of the app.
    let index_path = '../mkp/index.html';
    
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, index_path),
        protocol: 'file:',
        slashes: true,
        hash: '/base'
    }));
    
    // Open the DevTools.
    mainWindow.webContents.openDevTools();
}

// This method will be called when Electron has finished
app.on("ready", () => {
    createWindow();

    app.on("activate", function () {
        // On macOS it's common to re-create a window in the app when the dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

// Quit when all windows are closed, except on macOS. There, it's common for applications and their menu bar to stay active until the user quits explicitly with Cmd + Q.
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.


// Test for communiction bentween front and back
ipcMain.on("ping", ( event, n ) => {
    console.log("ping", n);
    event.reply("pong", n + 1);
})