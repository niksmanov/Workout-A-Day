let templates = (function () {

    let handlebars = window.Handlebars;

    function get(name) {
        return new Promise((resolve, reject) => {
            let url = `templates/${name}.handlebars`;
            $.get(url, function (html) {
                let template = handlebars.compile(html);
                resolve(template);
            })
        });
    }

    return {
        get: get
    };
}());

export {templates};