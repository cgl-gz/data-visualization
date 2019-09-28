const resoldApartment = require('../model/resoldApartment')

const all = {
    path: '/api/apartments/all',
    method: 'get',
    func: function(request, response) {
        let apartments = resoldApartment.all()
        let r = JSON.stringify(apartments)
        response.send(r)
    }
}

const routes = [
    all,
]

module.exports.routes = routes
