const crypto = require('crypto');
module.exports = function GeneratorUniqueId(){
    return crypto.randomBytes(4).toString('HEX');
}