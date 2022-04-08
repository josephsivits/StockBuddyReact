# StockBuddy
The Stock Investment Visualization Interface Tool Software (SIVITS) Mobile Application was designed to allow users to make more educated financial decisions with the aim to allow users to make educated financial decisions by configurating them to a set of criteria deemed appropriate and applicable for stock option investments for the New York Stock Exchange (NYSE) and National Association of Securities Dealers Automated Quotations (NASDAQ) markets.

[View Symposium Poster](http://https://1drv.ms/b/s!ArgrUg_JEuCXgtdG5eY3TAtjRBBnzA "View Symposium Poster")
*Poster presented at Associated Colleges of the Chicago Area (ACCA) 2022 Student Sympsoium at North Park University, Chicago*

[View Project Video as of 04/08/2022](https://youtube.com/shorts/NJO3LAzKYk8?feature=share "View Project Video as of 04/08/2022")

⚠️This app is currently a work in progress!⚠️
🧑‍💻Developed for Joseph Sivits capstone course at Concordia Unviersity Chicago.

#### Core Technologies Used ⚙️
- React-Native
- JavaScript/JSX
- Firebase
- Python

#### How to run
1. Before installing react-native, you should make sure you have a recent version of Node.js installed. [Click this link](https://nodejs.org/en/download/ "Click this link") and download the correct version for your operating system.
		
	[npm or node package manager](https://docs.npmjs.com/about-npm "npm or node package manager"), is a software registry connecting open source packages with a community of software developers. It is installed along with Node.js
	
3. Open a command prompt, and run the command:

		npm install --global expo-cli
		
	[Expo](https://docs.expo.dev/ "Expo") is a framework and platform that allows for quick iteration, think of it as the cross-platform runtime environment for react-native code.
	
	You'll also want to download [Expo Go](https://expo.dev/expo-go "Expo Go") on your mobile device, if you don't have one present, [install an emulator to your machine.](https://xpertstec.com/how-to-install-android-studio-emulator-on-windows-pc/ "install an emulator to your machine.")
4. Navigate to the downloaded file on the command line and run:

		npm install
	
	This installs packages referenced in the code. After installing those packages, run
	
		npm start
	
	To start the development server running Expo. You may need to click "Allow Access" to enable to Node.js JavaScript runtime.
	
	
5. You can either scan the QR code with Expo Go, run with the tethered connection (USB) to the operating system in the menu, or connect with the emulator install. 

🐛 If there's any bugs installing packages using 

		npm install
		
You can alternatively install the packages like this:
		
		npm install react-native-gesture-handler
		npm install react-native-elements
		npm install expo-web-browser
		npm install email-validator
		npm install firebase
		npm install formik
		npm install yup

As this app is still in development, firebase re-configuration will happen and firebase may be down. To allow user authentication for your own app (and your own rules), please see [this tutorial by freeCodeCamp.com](https://www.freecodecamp.org/news/react-native-firebase-tutorial/ "this tutorial by freeCodeCamp.com") for help on setting up a firebase console for react-native.

⚠️This app was developed with Android in mind, and does not fully support iOS or Web configurations ⚠️

For full setup of react-native, please see this documentation.
https://reactnative.dev/docs/environment-setup

Thank you for checking out my app! 😄
