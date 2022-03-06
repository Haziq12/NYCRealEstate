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

function create(req, res) {
  req.body.owner = req.user.profile._id
  Apartment.create(req.body)
  .then(apartment => {
    res.redirect('/apartments')
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

export {
  index,
  create
}