SystemJS.config({
    "transpiler": "plugin-babel",
    "map": {
        //SystemJS files\\
        "plugin-balel": "./node_modules/systemjs-plugin-babel/plugin-babel.js",
        "systemjs-babel-build": "./node_modules/systemjs-plugin-babel/systemjs-babel-browser.js",
        
        //App files\\
        "index": "./app-modules/index.js",

        //Libraries\\
        "jquery" : "./node_modules/jquery/dist/jquery.js",
        //Routing:
        "sammy" : "./node_modules/sammy/lib/sammy.js",
        //HTML:
        "handlebars": "./node_modules/handlebars/lib/handlebars.js",
        //Crypt passwords:
        "crypto" : "./node_modules/crypto-js/crypto-js.js",
        //Popup messages
        "toastr" : "./node_modules/toastr/toastr.js",
        //UI stuffs (autocomplete, calendar etc.)
        "jqueryUi": "./node_modules/jquery-ui-dist/jquery-ui.js"
    }
});

SystemJS.import('index');