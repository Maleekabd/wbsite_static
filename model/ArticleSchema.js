import { Schema, model, models } from "mongoose"

const CryptographyAPI = new Schema({
  image: {
    type: String
  },
  date: {
    type: String
  },
  category: String,
  content: String,
  path: String,
  description: String,
  name: {
    type: String,
    required: true
  }
})

const CryptographySchema = models?.cryptographies || model("cryptographies", CryptographyAPI)

export default CryptographySchema;