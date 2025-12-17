# Welcome to EmpowerHER 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Before you Get Started:

PLEASE READ ALL INSTRUCTIONS FIRST

1. Create a new folder on your computer to house this project. I named mine 'empowerHER'

2. Download the following:
   - 'Visual Studio Code': https://code.visualstudio.com/download
   - 'Android Studio': https://developer.android.com/studio 

3. Open VS Code and open a new terminal (CTRL ` )
   - Once you open a new terminal, check that you are in the right folder, type 'ls' on the command line and it will show you all the folders. Find the folder you want this project to be in and navigate to that folder. To navigate, type 'cd' and then the name of the folder in the command line. If you accidently go into the wrong folder, just type 'cd ..' into the command line.

4. to clone this repo into your folder, type 'git clone [repo-URL]' in your command line
   ```bash
   git clone https://github.com/Lucy-Family-Institute/empowerHER
   ```

5. It will automatically send you into the main branch. DO NOT WORK ON THE MAIN BRANCH. Instead, type 'git checkout -b < new branch name >'. I recommend making your branch name your last name and the year you're graduating. You can make as many branches as you want, so if you mess up in one branch and can't figure out how to fix it, just make a new one.
   ```bash
   git checkout -b <new branch name>
   ```

6. Install dependencies

   ```bash
   npm install
   ```

7. Start the app

   ```bash
   npm start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

8. Whenever you are ready to save your code and push it to the main branch, run these commands:
   ```
   git add .
   git commit -m "write yourself a helpful commit comment that describes what you have built"
   git push --set-upstream origin <branch name>
   ```
   YOU ONLY HAVE TO RUN THAT LAST COMMAND ONCE. It connects your new branch to the project. After the first time, you just have to:
   ```
   git push
   ```
   Then go to github and create a pull request. Best practice is to have someone else review your code, keep that in mind.

   I have created four pages for you: Home, Calendar, Account, and WhatsApp pages. You can add or remove pages as you like, but when doing so, be sure to make the necessary changes in RootNavigator.js and layout.js. If you'd like to change the style of the navigation bar that can be done in RootNavigator.js. If you'd like to change any colors, fonts, layouts, etc. that can be done in two ways:
      - a. you can add your CSS into each file in the 'stylesheet' section (this is how it's currently done). This way is nice if you only need minimal or diffent styling on each page.
      - b. you can make one stylesheet page and call to it from every page. This version is nice if you have a lot of the same kind of styling for all pages.
   *If the message above is confusing, just know you can add CSS style to each page where it says const styles = StyleSheet.create*

   If you need help on style, here is a really good resource: https://reactnative.dev/docs/style
   If you need help on Javascript in general, here is w3schools: https://www.w3schools.com/js/default.asp They also have info on CSS and HTML which will be helpful to look at. Don't look at the JSX stuff, that's different.

   Whenever looking for help online, I recommend googling the phrase 'react native expo go app' and then the problem you're trying to solve. This helps google source better links and videos.