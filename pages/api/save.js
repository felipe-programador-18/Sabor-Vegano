import  { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../credentials.json'
import moment from 'moment'
const doc = new GoogleSpreadsheet('1NDvbzZlWgP7UjnEsdkcC6SJIpAzjKshjZ_gDo-4CQoI')

//create function outside and later get function inside only getcoupon
const genCoupon = () => {
  const code =  parseInt(moment().format('YYDDMMHHmmss')).toString(16).toUpperCase()
  return  code.substr(0,4) + '-' + code.substr(4,4) + '-' + code.substr(8,4)
}


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
              Cupon= genCoupon(),
              Promo = Textaffordable.value
            }

        //Nome	Email	Whatsaap	Cupon	Promo
        const sheet = doc.sheetsByIndex[1]
        const data = JSON.parse(req.body)
         await sheet.addRow({
             Nome: data.Nome,
             Email: data.Email,
             Whatsaap: data.Whatsaap,
             Pedido:'Picadão vegano',
             'Data Prenchimento': moment().format(' DD/MM/YYYY, HH:mm:ss'),
             Cupon,
             Promo,
         })
         res.end(JSON.stringify({
           showCoupon: Cupon !== '',
           Cupon,
           Promo
         }))
          } catch (err) {
            console.log(err)
            res.end('error')
          }

}