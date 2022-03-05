import { Apartment } from '../models/apartment.js'

function index(req, res) {
  Apartment.find({})
  .then(apartments => {
    res.render('apartments/index', {
      apartments,
      title: "Apartments"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

export {
  index
}