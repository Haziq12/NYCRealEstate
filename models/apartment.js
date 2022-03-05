import mongoose from 'mongoose'

const Schema = mongoose.Schema

const apartmentSchema = new Schema({
  address: String,
  price: Number,
  email: String,
  phoneNo: String, 
  description: String,
  numBedrooms: Number,
  numBathrooms: Number,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
})

const Apartment = mongoose.model('Apartment', apartmentSchema)

export {
  Apartment
}