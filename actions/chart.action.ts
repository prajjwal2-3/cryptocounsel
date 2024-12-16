"use server"
import axios from 'axios'
export async function getChartData(){
    const data = await axios.get('https://conqr-backend.vercel.app/api')
    return data.data
}
  

