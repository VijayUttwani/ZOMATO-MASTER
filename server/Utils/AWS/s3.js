import AWS from "aws-sdk";

// AWS S3 Bucket Config
const s3Bucket = new AWS.S3({
	accessKeyId: "AKIA6HY6UJBBC47JN53N",
	secretAccessKey: "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",
	region: "ap-south-1",
});

export const s3Upload = (options) => {
    return new Promise((resolve, reject) =>
        s3Bucket.upload(options, (error, data) => {
            if (error) return reject(error);
            return resolve(data);
        })
    );
};