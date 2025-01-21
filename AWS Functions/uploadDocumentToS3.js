const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event) => {
    const bucketName = 'your_bucket_name';
    const fileName = event.fileName;
    const fileContent = Buffer.from(event.fileContent, 'hex');

    const params = {
        Bucket: bucketName,
        Key: fileName,
        Body: fileContent,
        ContentType: 'notes/txt'
    };

    try {
        const data = await s3.putObject(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'File uploaded successfully!',
                data: data
            })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: `Error uploading file: ${error.message}`,
                error: error
            })
        };
    }
};
