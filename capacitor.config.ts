//import { CapacitorConfig } from '@capacitor/cli';
import { ElectronCapacitorConfig } from '@capacitor-community/electron';

const config: ElectronCapacitorConfig =  {
  appId: 'com.project.tracker.svelte',
  appName: 'svelte-markdown-project-tracker',
  webDir: 'build',
  bundledWebRuntime: true,
  electron: {
    // Custom scheme for your app to be served on in the electron window.
    customUrlScheme: 'capacitor-electron',
    // Switch on/off a tray icon and menu, which is customizable in the app.
    trayIconAndMenuEnabled: false,
    // Switch on/off whether or not a splashscreen will be used.
    splashScreenEnabled: false,
    // Custom image name in the electron/assets folder to use as splash image (.gif included)
    splashScreenImageName: 'splash.png',
    // Switch on/off if the main window should be hidden until brought to the front by the tray menu, etc.
    hideMainWindowOnLaunch: false,
    // Switch on/off whether or not to use deeplinking in your app.
    deepLinkingEnabled: true,
    // Custom protocol to be used with deeplinking for your app.
    deepLinkingCustomProtocol: 'mycapacitorapp',
  }
};

export default config;
