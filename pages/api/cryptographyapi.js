import connectMongo from "@/database/connection";
import CryptographySchema from "@/model/ArticleSchema";

const CryptographyAPI = async (req, res) => {
  connectMongo().catch(error => { error: "connection failed" })
  switch (req.method) {
    case "GET":
      const response = await CryptographySchema.find()
      res.json(response)

      break;

    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
      break;
  }
}

export default CryptographyAPI