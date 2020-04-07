const path = require('path')
const fs = require('fs')
const utils = require('util')

const currentDate = new Date()

const logFile = fs.createWriteStream(path.resolve(__dirname, '../') + `/logs/${currentDate}.log`, { flags: 'w' })
const logStdout = process.stdout

module.exports = {
    log: function (d) {
        logFile.write(utils.format(d) + '\n')
        logStdout.write(utils.format(d) + '\n')
    }
}