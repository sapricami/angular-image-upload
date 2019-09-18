const IncomingForm = require('formidable').IncomingForm;
const fs = require('fs');

module.exports = function upload(req, res) {
  const form = new IncomingForm();

  form.on('file', (field, file) => {
    // Do something with the file
    // e.g. save it to the database
    // you can access it using file.path
    console.log('file', file.name);
    const readStream = fs.createReadStream(file.path);

    fs.rename(file.path, 'C:/'+file.name, (err)=>{
      if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
    });

  });
  form.on('end', () => {
    res.json();
  });
  form.parse(req);
};