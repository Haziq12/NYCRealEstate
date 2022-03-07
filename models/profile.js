import mongoose from 'mongoose'

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  houses: [{type: mongoose.Schema.Types.ObjectId, ref: "House"}],
  apartments: [{type: mongoose.Schema.Types.ObjectId, ref: "Apartment"}]
}, {
  timestamps: true
})



const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
