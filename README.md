# CM-theme
Ghost theme for Curiosity Motive

### Dependencies

Please make sure your dependencies match the following.

- Node: `>4.2`
- Gulp `>3.9`

### Setup

In this setup, `gulp` will install everything that you need to run Ghost locally for development (other than the Ghost content)

1. Run `npm install` to ensure the required dependencies are installed.
2. Run `gulp` and you'll have a new Ghost site generated for you and displayed in your browser.
3. Your default browser will open up [localhost:3000](http://localhost:3000/) automatically.


#### Ghost setup

1. Proceed to [localhost:3000/ghost/setup/](http://localhost:3000/ghost/setup/) to setup your Ghost install locally.
2. Run through the steps for setup, including setting up the local administrative user.
3. You can skip sending out invites on next screen, as email relays aren't setup yet.
4. Once you're in the administration, under the `Labs` link on the left there's a section for data import. You want to export the data from the current live CM site on it's respective `Labs` section and save to your computer.
5. Import the data you saved from CM.
6. Match up the backend settings from the live CM site to your local instance. ([General](http://localhost:3000/ghost/settings/general/), [Navigation](http://localhost:3000/ghost/settings/navigation/) and [Labs](http://localhost:3000/ghost/settings/labs/) sections)
7. Quit `gulp`

#### Theme setup

1. If you want to have all images from the live site, pull down the folder from the CM server at `/srv/users/serverpilot/apps/curiositymotive/public/content/images/2017/` and put in your Ghost folder at `~/YOURPATH/cm-theme/node_modules/ghost/content/images/2017/`.
2. In a text editor, open up `~/YOURPATH/cm-theme/gulp/tasks/symlink.js` and change the `.src('/YOURPATH/WHATEVER/')` path for the theme and images folders to match your local environment.
3. Run `gulp init` to automatically setup symbolic links.

### Compiling
Coming soon.

### Deploying
Coming soon.
