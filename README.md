# firebase-emulator-credentials

It's currently not possible to use `firebase-admin` with the emulators without credentials obtained via https://cloud.google.com/docs/authentication/getting-started.

This is a reproduction for https://github.com/firebase/firebase-tools/issues/2294.

## Reproduction steps:

```
git clone https://github.com/filipesilva/firebase-emulator-credentials
cd firebase-emulator-credentials
yarn
yarn firebase logout
yarn emulators
# open http://localhost:5001/emulator-test-1/us-central1/helloWorld in the browser
```

You should see the following error log in the console:
```
kamik@RED-X1C6 MINGW64 /d/sandbox/firebase-emulator-credentials
$ yarn emulators
yarn run v1.21.1
$ firebase emulators:start
!  emulators: You are not currently authenticated so some features may not work correctly. Please run firebase login to authenticate the CLI.
i  emulators: Starting emulators: functions, database
!  Your requested "node" version "8" doesn't match your global version "12"
i  database: Database Emulator logging to database-debug.log
!  hosting: The hosting emulator is configured but there is no hosting configuration. Have you run firebase init hosting?
i  ui: Emulator UI logging to ui-debug.log
i  functions: Watching "D:\sandbox\firebase-emulator-credentials\functions" for Cloud Functions...
+  functions[helloWorld]: http function initialized (http://localhost:5001/emulator-test-1/us-central1/helloWorld).

┌───────────────────────────────────────────────────────────────────────┐
│ ✔  All emulators ready! View status and logs at http://localhost:4000 │
└───────────────────────────────────────────────────────────────────────┘

┌───────────┬────────────────┬─────────────────────────────────┐
│ Emulator  │ Host:Port      │ View in Emulator UI             │
├───────────┼────────────────┼─────────────────────────────────┤
│ Functions │ localhost:5001 │ http://localhost:4000/functions │
├───────────┼────────────────┼─────────────────────────────────┤
│ Database  │ localhost:9000 │ http://localhost:4000/database  │
└───────────┴────────────────┴─────────────────────────────────┘
  Other reserved ports: 4400, 4500

Issues? Report them at https://github.com/firebase/firebase-tools/issues and attach the *-debug.log files.

i  functions: Beginning execution of "helloWorld"
>  [2020-05-26T15:20:21.433Z]  @firebase/database: FIREBASE WARNING: {"code":"app/invalid-credential","message":"Credential implementation provided to initializeApp() via the
 \"credential\" property failed to fetch a valid Google OAuth2 access token with the following error: \"Error fetching access token: Error while making request: getaddrinfo E
NOTFOUND metadata.google.internal. Error code: ENOTFOUND\"."}
>  [2020-05-26T15:20:22.307Z]  @firebase/database: FIREBASE WARNING: {"code":"app/invalid-credential","message":"Credential implementation provided to initializeApp() via the
 \"credential\" property failed to fetch a valid Google OAuth2 access token with the following error: \"Error fetching access token: Error while making request: getaddrinfo E
NOTFOUND metadata.google.internal. Error code: ENOTFOUND\"."}
>  [2020-05-26T15:20:23.270Z]  @firebase/database: FIREBASE WARNING: {"code":"app/invalid-credential","message":"Credential implementation provided to initializeApp() via the
 \"credential\" property failed to fetch a valid Google OAuth2 access token with the following error: \"Error fetching access token: Error while making request: getaddrinfo E
NOTFOUND metadata.google.internal. Error code: ENOTFOUND\"."}
>  [2020-05-26T15:20:24.471Z]  @firebase/database: FIREBASE WARNING: {"code":"app/invalid-credential","message":"Credential implementation provided to initializeApp() via the
 \"credential\" property failed to fetch a valid Google OAuth2 access token with the following error: \"Error fetching access token: Error while making request: getaddrinfo E
NOTFOUND metadata.google.internal. Error code: ENOTFOUND\"."}
>  [2020-05-26T15:20:26.454Z]  @firebase/database: FIREBASE WARNING: {"code":"app/invalid-credential","message":"Credential implementation provided to initializeApp() via the
 \"credential\" property failed to fetch a valid Google OAuth2 access token with the following error: \"Error fetching access token: Error while making request: getaddrinfo E
NOTFOUND metadata.google.internal. Error code: ENOTFOUND\"."}
>  [2020-05-26T15:20:28.169Z]  @firebase/database: FIREBASE WARNING: {"code":"app/invalid-credential","message":"Credential implementation provided to initializeApp() via the
 \"credential\" property failed to fetch a valid Google OAuth2 access token with the following error: \"Error fetching access token: Error while making request: getaddrinfo E
NOTFOUND metadata.google.internal. Error code: ENOTFOUND\"."}
>  [2020-05-26T15:20:30.516Z]  @firebase/database: FIREBASE WARNING: {"code":"app/invalid-credential","message":"Credential implementation provided to initializeApp() via the
 \"credential\" property failed to fetch a valid Google OAuth2 access token with the following error: \"Error fetching access token: Error while making request: getaddrinfo E
NOTFOUND metadata.google.internal. Error code: ENOTFOUND\"."}
>  [2020-05-26T15:20:33.439Z]  @firebase/database: FIREBASE WARNING: {"code":"app/invalid-credential","message":"Credential implementation provided to initializeApp() via the
 \"credential\" property failed to fetch a valid Google OAuth2 access token with the following error: \"Error fetching access token: Error while making request: getaddrinfo E
NOTFOUND metadata.google.internal. Error code: ENOTFOUND\"."}
>  [2020-05-26T15:20:38.337Z]  @firebase/database: FIREBASE WARNING: {"code":"app/invalid-credential","message":"Credential implementation provided to initializeApp() via the
 \"credential\" property failed to fetch a valid Google OAuth2 access token with the following error: \"Error fetching access token: Error while making request: getaddrinfo E
NOTFOUND metadata.google.internal. Error code: ENOTFOUND\"."}
>  [2020-05-26T15:20:39.686Z]  @firebase/database: FIREBASE WARNING: {"code":"app/invalid-credential","message":"Credential implementation provided to initializeApp() via the
 \"credential\" property failed to fetch a valid Google OAuth2 access token with the following error: \"Error fetching access token: Error while making request: getaddrinfo E
NOTFOUND metadata.google.internal. Error code: ENOTFOUND\"."}
>  [2020-05-26T15:20:48.691Z]  @firebase/database: FIREBASE WARNING: {"code":"app/invalid-credential","message":"Credential implementation provided to initializeApp() via the
 \"credential\" property failed to fetch a valid Google OAuth2 access token with the following error: \"Error fetching access token: Error while making request: getaddrinfo E
NOTFOUND metadata.google.internal. Error code: ENOTFOUND\"."}
>  [2020-05-26T15:20:51.557Z]  @firebase/database: FIREBASE WARNING: {"code":"app/invalid-credential","message":"Credential implementation provided to initializeApp() via the
 \"credential\" property failed to fetch a valid Google OAuth2 access token with the following error: \"Error fetching access token: Error while making request: getaddrinfo E
NOTFOUND metadata.google.internal. Error code: ENOTFOUND\"."}
>  [2020-05-26T15:21:05.098Z]  @firebase/database: FIREBASE WARNING: {"code":"app/invalid-credential","message":"Credential implementation provided to initializeApp() via the
 \"credential\" property failed to fetch a valid Google OAuth2 access token with the following error: \"Error fetching access token: Error while making request: getaddrinfo E
NOTFOUND metadata.google.internal. Error code: ENOTFOUND\"."}
!  functions: Your function timed out after ~60s. To configure this timeout, see
      https://firebase.google.com/docs/functions/manage-functions#set_timeout_and_memory_allocation.
>  D:\sandbox\firebase-emulator-credentials\node_modules\firebase-tools\lib\emulator\functionsEmulatorRuntime.js:619
>                  throw new Error("Function timed out.");
>                  ^
>
>  Error: Function timed out.
>      at Timeout._onTimeout (D:\sandbox\firebase-emulator-credentials\node_modules\firebase-tools\lib\emulator\functionsEmulatorRuntime.js:619:23)
>      at listOnTimeout (internal/timers.js:531:17)
>      at processTimers (internal/timers.js:475:7)
```