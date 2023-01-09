import { Request, Response } from 'express';
require('dotenv').config()

var AWS = require('aws-sdk');

var accessKeyId = process.env.AWS_ACCESS_KEY || "xxxxxx";
var secretAccessKey = process.env.AWS_SECRET_KEY || "+xxxxxx+B+xxxxxxx";

AWS.config.update({
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey
});

var s3 = new AWS.S3();


export const uploadFile = (req: Request, res: Response) => {
    console.log({
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey
    });
    // @ts-ignore
    if (req.files !== undefined) { // `image` is the field name from your form\
        let uploads: string[] = []
        // @ts-ignore
        for (const file in req.files) {
            // @ts-ignore
            console.log('hi', req.files[file]);
            var params = {
                Bucket: 'assets-socialyard-app',
                // @ts-ignore
                Key: req.files[file].filename,
                // @ts-ignore
                Body: req.files[file].data
            };

            console.log(params);

            s3.putObject(params, function (perr: any, pres: any) {
                if (perr) {
                    console.log("Error uploading data: ", perr);
                } else {
                    console.log(pres);
                    uploads.push(pres.ETag)
                    console.log("Successfully uploaded data to myBucket/myKey");
                }
            });
        }
        res.status(200).send(uploads);
    } else {
        res.send("error, no file chosen");
    }
}