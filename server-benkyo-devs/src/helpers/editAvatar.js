const { unlink } = require('fs/promises');
const path = require('path');
const sharp = require('sharp');
const uuid = require('uuid');

const avatarDir = path.join(__dirname, 'static', 'avatar');

async function deleteAvatar(imageName) {
    try {
        let photoPath;

        photoPath = path.join(avatarDir, imageName)

        await unlink(photoPath);
    } catch (error) {
        throw new Error('Error al procesar la imagen del servidor');
    }
}

async function saveAvatar(image) {

    try {
        const sharpImage = sharp(image.data);
        
        const imageName = uuid.v4() + '.jpg';

        let photoPath;
        
        photoPath = path.join(avatarDir, imageName);

        sharpImage.resize(150, 150);

        sharpImage.toFile(photoPath);

        return imageName;
    } catch (error) {
        throw new Error('Error al procesar la imagen del servidor');
    }
}


module.exports = {
    deleteAvatar, saveAvatar,
}