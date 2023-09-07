// exports.main = async (context) => {
//     const arr = new Uint8ClampedArray(context?.data.base64Img);
//     return { success: true, data: arr };
// };

const fs = require('fs');
const https = require('https');


exports.main = async (context) => {
    return new Promise((resolve, reject) => {
        const buffer = Buffer(context.data.url, 'base64');
        const arr = new Uint8ClampedArray(buffer);
        resolve({ success: true, arr, });
        // https.get(context.data.url,(res) => {
        //     const chunks = [];
        //     let size = 0;
        
        //     res.on('data', (chunk) => {
        //         chunks.push(chunk);
        //         size += chunk.length;
        //     });
        
        //     res.on('end', (err) => {
        //         const buffer = Buffer.concat(chunks, size);
        //         const arr = new Uint8ClampedArray(buffer);
        //         resolve({ success: true, arr, });
        //     });
        // });
    })
};