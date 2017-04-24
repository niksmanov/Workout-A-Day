SystemJS.config({
    "transpiler": "plugin-babel",
    "map": {
        //SystemJS files\\ 
        "plugin-babel": "../node-modules/systemjs-plugin-babel/plugin-babel.js",
        "systemjs-babel-build": "../node-modules/systemjs-plugin-babel/systemjs-babel-browser.js",
        
        //App files\\
        "index": "../app-modules/index.js",
        "templates": "../app-modules/templates.js",
        "registerController": "../controllers/registerController.js",
        "loginController": "../controllers/loginController.js",

        //Libraries\\
        "jquery" : "../node-modules/jquery/dist/jquery.js",
        //Routing:
        "sammy" : "../node-modules/sammy/lib/sammy.js",
        "navigo": "../node-modules/navigo/lib/navigo.min.js",
        //HTML:
        "handlebars": "../node-modules/handlebars/dist/handlebars.js",
        //Crypt passwords:
        "crypto" : "../node-modules/crypto-js/crypto-js.js",
        //Popup messages
        "toastr" : "../node-modules/toastr/toastr.js",
        //UI stuffs (autocomplete, calendar etc.)
        "jqueryUi": "../node-modules/jquery-ui-dist/jquery-ui.js"
    }
});

// SystemJS.import('index');