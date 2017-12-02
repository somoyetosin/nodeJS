var fs = require('fs');

function mergeValues(values, content){
    //Cycle over the keys of the values
    for(var key in values){
        //Replace all {{key}} with the value from the value object
        content = content.replace("{{" + key + "}}", values[key]);
    }
    //return merged content
    return content;
}
function view(templateName, values, response) {
    //Read from the template file
    var fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding: "utf8"});
    //insert value into the content
    fileContents = mergeValues(values, fileContents);
    //write out
    response.write(fileContents);
}

module.exports.view = view;