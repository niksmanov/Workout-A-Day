import 'jquery';

const templates = (function () {
    function getPage(pageName, data) {
        const url = `templates/${pageName}.handlebars`;
        $.get(url, function (html) {
            const hbTemplate = Handlebars.compile(html.toString());
            $('#content').html(hbTemplate(data));
        });
    }

    return {
        getPage: getPage
    };
}());

export {
    templates
};