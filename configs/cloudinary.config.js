/**
 * summary: this module is supported upload file into cloudinary.
 */
const cloudinary = require('cloudinary').v2
const fs = require('fs-promise')

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
})

module.exports.uploadFile = async (file) => {
    let orgName = file.originalname || ''
    orgName = orgName.trim().replace(/ /g, '-')

    const fullPathInServ = file.path
    const newFullPath = `${fullPathInServ}-${orgName}`
    fs.rename(fullPathInServ, newFullPath)

    const result = await cloudinary.uploader.upload(newFullPath);
    if (!result)
        throw new Error('An error occurred while uploading the file.')

    fs.unlinkSync(newFullPath)

    return result
}

