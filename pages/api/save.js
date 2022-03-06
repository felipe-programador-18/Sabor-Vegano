import  { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../credentials.json'
// here to connect spreadsheet!!!

const doc = new GoogleSpreadsheet('1NDvbzZlWgP7UjnEsdkcC6SJIpAzjKshjZ_gDo-4CQoI')



export default async(req, res) =>{
    try{
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()
        //Nome	Email	Whatsaap	Cupon	Promo
        const sheet = doc.sheetsByIndex[1]
        const data = JSON.parse(req.body)
         await sheet.addRow({
             Nome: data.Nome,
             Email: data.Email,
             Whatsaap: data.Whatsaap,
             Cupon: data.Cupon,
             Promo: data.Promo,
         })
         res.end(req.body)
          } catch (err) {
            console.log(err)
            res.end('error')
          }

}