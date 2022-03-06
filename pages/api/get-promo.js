import  { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from './credentials.json'
// here to connect spreadsheet!!!

const doc = new GoogleSpreadsheet('1NDvbzZlWgP7UjnEsdkcC6SJIpAzjKshjZ_gDo-4CQoI')




// remember here i get Api coupon
//create message coupon
export default async(req, res) =>{
    //get some dates of connection spreadsheet
    try{
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()

        const sheet = doc.sheetsByIndex[2]
       await sheet.loadCells('A2:B2')
      
       const SeePrice = sheet.getCell(1,0)
       console.log(SeePrice.value)
       
       const Textaffordable = sheet.getCell(1,1)
       console.log(Textaffordable.value)
       
       res.end(JSON.stringify({
        showCoupon: false,
        mensagem:'Olá Vegamania, tudo bem?'
    }))

       } catch(err) {
       console.log(err)
       }
   
}