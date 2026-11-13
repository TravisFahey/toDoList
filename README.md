# Today's Tasks

A React Native / Expo recreation of the layout and behavior of
[matthartstein/To-Do-List-Mobile-App](https://github.com/matthartstein/To-Do-List-Mobile-App),
implemented on the Expo starter in this workspace.

## Run

```sh
npm install
npm start
```

Scan the Expo QR code with Expo Go on a phone, or use `npm run android` / `npm run ios`
with an emulator or simulator. An iOS simulator requires macOS.
For a browser preview, use `npm run web`.
On Windows PowerShell, use `npm.cmd` if script execution policy blocks `npm`.

## Expo Snack

The `snack/` folder contains a standalone version with `App.js` and `package.json`,
matching the structure of the SDEV257 Snack example. It uses only React and React
Native, which Snack provides, so no extra dependencies are needed.

In Expo Snack, replace `App.js` with `snack/App.js` and use `snack/package.json`
for the package file. The task component is included directly in the Snack entry point.

## Use

Type a task and press **+** or the keyboard's Done/Enter key to add it.
Tap a task card to complete and remove it. Blank tasks are ignored.
Tasks are kept in memory and reset when the app restarts, matching the reference.

The recreation retains the reference's gray background, white cards, blue markers,
heading, and bottom composer. It adds accessible button labels, stable task IDs,
responsive input sizing, and keyboard avoidance while using current Expo dependencies.

The reference repository does not declare a license. Its author and source are
credited above; the starter's existing LICENSE is retained for the Expo starter.
