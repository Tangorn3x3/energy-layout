var templateFolder = 'templates/',
    configFileName = '/config.js',
    templateExt = '.mustache';

function getPartialsFromConfig(config) {

    var partialsObj = {};

    config.forEach(function(item, i, config) {
        var curPath = templateFolder + item.folder + item.template + templateExt;

        $.get(curPath, function(template) {
            partialsObj[item.template] = $(template).filter('#'+item.template+'Tpl').html();
            partialsToLoad--;
        }, "html");
    });

    return partialsObj;
}

function renderTemplate (rootTemplate) {
    var timerId = setInterval(function() {
        if (partialsToLoad == 0) {
            console.log('All Partials was loaded');

            var html = Mustache.render(mainTemplate[rootTemplate], data, partials);
            console.log('Partials was rendered');

            $('#mainCont').html(html);
            clearInterval(timerId);
        }
    }, 100);
}

