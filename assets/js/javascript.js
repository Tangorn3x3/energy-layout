/**
 * Created by Maxis on 05.08.2017.
 */

var templateFolder = 'templates/',
    configFileName = '/config.js',
    templateExt = '.mustache';

/*Function for remote script ondemand loading */
function importScript (script) {

    $.getScript( script )
        .done(function( data, textStatus ) {
            console.log( 'File ' + script + ' has been loaded' );
            return true;
        })
        .fail(function( jqxhr, settings, exception ) {
            console.error( 'Error loading ' + script  );
            return false;
        });

    return true;
}

function scriptsConfig (config) {

}

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

function getPartial(folder, name) {

    var curPath = templateFolder + folder + name + templateExt;
    //var templateContent = '';

    /*$( "#tmpl" ).load( "templates/main/main.mustache", function() {
        alert( "Load was performed." );
    });*/

    $.get(curPath, function(template) {
        return $(template).filter('#'+name+'Tpl').html();
        var a = 1;
    }, "html");

    //return templateContent;
}

function getConfig(dir) {
    var confName = templateFolder + dir + configFileName;
    return importScript(confName);
}

