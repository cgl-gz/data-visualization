const fs = require('fs')

const apartmentsFilePath = 'db/CY-Esf.json'

const loadApartments = () => {
    let content = fs.readFileSync(apartmentsFilePath, 'utf8')
    let apartments = JSON.parse(content)
    return apartments
}

const apartments = {
    data: loadApartments()
}

apartments.all = function() {
    let apartments = this.data
    return apartments
}

module.exports = apartments
