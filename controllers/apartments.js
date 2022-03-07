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

function edit(req, res) {
  console.log('clicked edit')
  Apartment.findById(req.params.id)
  .then(apartment => {
    res.render("apartments/edit", {
      apartment,
      title: "edit apartment"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/profiles")
  })
}

function update(req, res) {
    req.body.owner = req.user.profile._id
    Apartment.findById(req.params.id)
    .then(apartment => {
      if (apartment.owner.equals(req.user.profile._id)) {
        apartment.updateOne(req.body, {new: true})
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

  function deleteApartment(req, res) {
    Apartment.findById(req.params.id)
    .then(apartment => {
      if (apartment.owner.equals(req.user.profile._id)) {
        apartment.delete()
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
  deleteApartment as delete
}