import { House } from '../models/house.js'

function index(req, res) {
  House.find({})
  .then(houses => {
    res.render('houses/index', {
      houses,
      title: "Houses"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  House.create(req.body)
  .then(house => {
    res.redirect('/houses')
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