import { House } from "../models/house.js"
import { Profile } from "../models/profile.js"
import { Apartment } from "../models/apartment.js"



function show(req, res) {
  console.log('show')
  Profile.findById(req.params.id).populate('houses').populate('apartments')
    .then(profile => {
      Profile.findById(req.user.profile._id)
        .then(self => {
          console.log(self)
          const isSelf = self._id.equals(profile._id)
              res.render("profiles/show", {
                title: `Your Profile`,
                profile,
                isSelf,
              })
            })
        })
        .catch(err => {
          console.log(err)
          res.redirect("/")
        })
    }
    


function createHouse(req, res) {
  req.body.owner = req.user.profile._id
  House.create(req.body)
    .then(house => {
      Profile.findById(req.user.profile._id)
      .then(profile => {
        profile.houses.push(house._id)
        profile.save()
        res.redirect(`/profiles/${req.user.profile._id}`)
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect(`/profiles/${req.user.profile._id}`)
    })
  }

  function createApartment(req, res) {
    req.body.owner = req.user.profile._id
    Apartment.create(req.body)
      .then(apartment => {
        Profile.findById(req.user.profile._id)
        .then(profile => {
          profile.apartments.push(apartment._id)
          profile.save()
          res.redirect(`/profiles/${req.user.profile._id}`)
        })
      })
      .catch(err => {
        console.log(err)
        res.redirect(`/profiles/${req.user.profile._id}`)
      })
    }




    // function edit(req, res) {
    //   House.findById(req.params.id)
    //   .then(house => {
    //     res.render("profiles/edit", {
    //       house,
    //       title: "edit house"
    //     })
    //   })
    //   .catch(err => {
    //     console.log(err)
    //     res.redirect("/profiles")
    //   })
    // }

    // function update(req, res) {
    //   req.body.owner = req.user.profile._id
    //   Profile.findById(req.params.id)
    //   .then(house => {
    //     if (house.owner.equals(req.user.profile._id)) {
    //       house.updateOne(req.body, {new: true})
    //       .then(() => {
    //         res.redirect(`/profiles/${req.user.profile._id}`)
    //       })
    //     } else {
    //       throw new Error("NOT AUTHORIZED")
    //     }
    //   })
    //   .catch(err => {
    //     console.log("the error:", err)
    //     res.redirect("/profiles")
    //   })
    // }



export {
  show,
  createHouse,
  createApartment
}