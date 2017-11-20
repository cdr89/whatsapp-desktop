const electron = require('electron');
const {app, BrowserWindow} = electron;

var mainWindow = null;

app.on('window-all-closed', function() {
	if (process.platform != 'darwin') {
		app.quit();
	}
});

app.on('ready', function() {
	mainWindow = new BrowserWindow({width: 1000, height: 800});
	mainWindow.setMenu(null);
	mainWindow.loadURL('https://web.whatsapp.com');
	mainWindow.on('closed', function() {
		mainWindow = null;
	});
});
