import { Profile } from "../models/profile.js"

// function index(req, res){
//   console.log('index')
// }  


function show(req, res) {
  Profile.findById(req.params.id)
  .then(profile => {
    Profile.findById(req.user.profile._id)
    .then(self => {
      const isSelf = self._id.equals(profile._id)
      res.render("profiles/show", {
        title: `Your Profile`,
        profile,
        isSelf
      })
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
  console.log('show')
}



// function show(req, res) {
//     Profile.findById(req.user.profile._id)
//     console.log('show')
//       res.render("profiles/show", {
//         title: `Your profile`
//       }) 
//       console.log('show')
//       .catch((err) => {
//         console.log(err)
//         res.redirect("/")
//       })
//       console.log('show')
//     }
    



export {
  show,
  // index
}