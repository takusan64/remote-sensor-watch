import { execSync } from 'child_process'

export default async function handler(req, res) {
  try{
    const stdout = await execSync(`python3 ./script/sensor.py ${MAC_ADDRESS}`)
    res.status(200).json(`stdout: ${stdout.toString()}`)
  } catch(e){
    console.error(e)
  }
}
