import  { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../credentials.json'
// here to connect spreadsheet!!!

const doc = new GoogleSpreadsheet('1NDvbzZlWgP7UjnEsdkcC6SJIpAzjKshjZ_gDo-4CQoI')



export default async(req, res) =>{
    try{
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()
        
        const sheetConfig = doc.sheetsByIndex[2]
        await sheetConfig.loadCells('A2:B2')
       
        const SeePrice = sheetConfig.getCell(1,0)
        const Textaffordable = sheetConfig.getCell(1,1)
        
         let Cupon =''
         let Promo =''   
         if( SeePrice.value ==='VERDADEIRO'){
           // THOUGHT SOLUTION ABOUT GENERATE COUPON!!
              Cupon='Temporario',
              Promo = Textaffordable.value
            }

        //Nome	Email	Whatsaap	Cupon	Promo
        const sheet = doc.sheetsByIndex[1]
        const data = JSON.parse(req.body)
         await sheet.addRow({
             Nome: data.Nome,
             Email: data.Email,
             Whatsaap: data.Whatsaap,
             'Data Prenchimento': new Date(),
             Cupon,
             Promo,
         })
         res.end(req.body)
          } catch (err) {
            console.log(err)
            res.end('error')
          }

}