const fs = require('fs');
const download = require('download');

const downloadFile = function(url, path) {
    https.get(url, (res) => {
        const file = fs.createWriteStream(path);
        res.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log(url, 'downloaded to', path);
        });
    }).on('error', (err) => {
        console.log('Error: ', err.message);
    })
}

const downloadTask = function() {
    (async () => {
        //await download('https://pl170.plemiona.pl/map/ally.txt.gz', './data/pl/s170');
    })();
}

module.exports = downloadTask;