const fs = require('fs');
const os= require('os');

/**
 * @param {String} file - A string containing the file name
 */
const read_log = (file) =>{
    fs.readFile(`./logging/${file}`, (err, data) =>{
        if (err) error_log(err);
        return data.toString();
    });
}

const error_log = (error_message) =>{
    const log_file = 'server_errors.log'

    let error_resp = `${error_message},${os.type()},${os.version()},${Date()}`;

    fs.appendFile(`./logs/${log_file}`, error_resp+'\n', (err) =>{
        if (err) error_log(err);
    });
}

const web_analytics = (route) =>{
    const log_file = 'web_analytics.log';

    let web_resp = ` ${route},${os.type()},${os.version()},${Date().toString()}`;

    fs.appendFile(`./logs/${log_file}`, web_resp + '\n', (err) =>{
        if (err) error_log(err);
    });
}

module.exports = {web_analytics, error_log, read_log}