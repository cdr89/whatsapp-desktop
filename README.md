# whatsapp-desktop
**Unofficial** multi platform desktop client for WhatsApp.
This is a wrapper of WhatsApp web created using [electron](https://electronjs.org/) can be used under Linux, Windows and MacOS.

## Quick start
To start using the client just download the right release build for your OS.
Install the dependencies in the local node_modules folder:
```bash
npm install
```

Start from command line using npm:
```bash
npm start
```

## Linux
Download the linux release [here](https://github.com/cdr89/whatsapp-desktop/blob/master/release-builds/whatsapp-desktop-linux-x64.tar.gz)

Package the application for Linux environment:
```bash
npm run package-linux
```

## Windows
Download the Windows release [here](https://github.com/cdr89/whatsapp-desktop/blob/master/release-builds/whatsapp-desktop-win32-ia32.zip)

Package the application for Windows environment:
```bash
npm run package-win
```

## Mac OS
Download the Mac OS release [here](https://github.com/cdr89/whatsapp-desktop/blob/master/release-builds/whatsapp-desktop-darwin-x64.zip)

Package the application for Mac OS environment:
```bash
npm run package-mac
```

## References

https://electronjs.org/docs/api

https://tutorialzine.com/2015/12/creating-your-first-desktop-app-with-html-js-and-electron

https://www.christianengvall.se/electron-packager-tutorial/

https://docs.npmjs.com/getting-started/installing-node

https://discuss.atom.io/t/cannot-find-module-app/28774

https://stackoverflow.com/questions/38400604/node-js-electron-prebuilt-error-cannot-find-module-browser-window-windows-10
