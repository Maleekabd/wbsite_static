import mongoose from "mongoose";

// 1 =  connected
// 2 = connecting
// 3 = disconnect

async function connectMongo() {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URL)

    if (connection._readyState === 1) {
      return Promise.resolve(true)
    }
  } catch (error) {
    return Promise.reject(error)
  }
}

export default connectMongo