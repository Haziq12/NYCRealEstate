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


export {
  index,
}