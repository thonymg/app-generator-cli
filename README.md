## Install

1- copy & past this folder on root of your application
this generator needs ```plopjs``` make sure to have plopjs installed with
	```bash
		npm install plop enzyme redux-mock deep-freeze redux-mock-store --save-dev
	```

2- add this script on your package.json file
	```json
	"scripts": {
    ...
    "generator": "plop --plopfile ./generators/plopfile.js"
  }
	```

3- run the script with
	```bash
		npm run generator
	```
