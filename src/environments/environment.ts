// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBvEz6C9hI_a172SxSBBL71MQH2k91uJko",
    authDomain: "cryptastrack.firebaseapp.com",
    databaseURL: "https://cryptastrack.firebaseio.com",
    projectId: "cryptastrack",
    storageBucket: "",
    messagingSenderId: "809920566608"
  }
};
