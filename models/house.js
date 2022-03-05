import mongoose from 'mongoose'

const Schema = mongoose.Schema

const houseSchema = new Schema({
  address: String,
  price: Number,
  email: String,
  phoneNo: String, 
  description: String,
  numBedrooms: Number,
  numBathrooms: Number,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
})

const House = mongoose.model('House', houseSchema)

export {
  House
}