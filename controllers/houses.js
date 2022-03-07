import { House } from '../models/house.js'
import { Profile } from '../models/profile.js'

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

function edit(req, res) {
  House.findById(req.params.id)
  .then(house => {
    res.render("houses/edit", {
      house,
      title: "edit house"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/profiles")
  })
}

function update(req, res) {
    req.body.owner = req.user.profile._id
    House.findById(req.params.id)
    .then(house => {
      if (house.owner.equals(req.user.profile._id)) {
        house.updateOne(req.body, {new: true})
        .then(() => {
          res.redirect(`/profiles/${req.user.profile._id}`)
        })
      } else {
        throw new Error("NOT AUTHORIZED")
      }
    })
    .catch(err => {
      console.log("the error:", err)
      res.redirect("/profiles")
    })
  }


  function deleteHouse(req, res) {
    House.findById(req.params.id)
    .then(house => {
      if (house.owner.equals(req.user.profile._id)) {
        house.delete() 
        .then(() => {
          res.redirect(`/profiles/${req.user.profile._id}`)
        })
      } else {
        throw new Error ("NOT AUTHORIZED")
      }
    })
    .catch(err => {
      console.log("the error:", err)
      res.redirect("/profiles")
    })
  }


export {
  index,
  edit,
  update,
  deleteHouse as delete
}