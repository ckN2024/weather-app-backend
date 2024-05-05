import AWS from "aws-sdk";
import fs from "fs";

const uploadFile = (filename, fileDirectoryPath) => {
    console.log('uploadFile function called')

    
      const s3 = new AWS.S3();

      return new Promise(function (resolve, reject) {
        fs.readFile(fileDirectoryPath.toString(), function (err, data) {
          if (err) {
            console.log(err) 
            reject(err); 
            }
          s3.putObject({
            Bucket: '' + process.env.AWS_S3_BUCKET_NAME,
            Key: filename,
            Body: data,
            // ACL: 'public-read'
          }, function (err, data) {
            if (err) reject(err);
            resolve("succesfully uploaded");
          });
        });
      });
}

export default uploadFile