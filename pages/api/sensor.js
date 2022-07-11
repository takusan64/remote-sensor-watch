import { execSync } from 'child_process'

export default async function handler(req, res) {
  try{
    const stdout = await execSync(`python3 ./script/sensor.py ${MAC_ADDRESS}`)
    res.status(200).json({stdout: JSON.parse(stdout)})
  } catch(e){
    console.error(e)
    res.status(400).json({ error: { messsage: "sensor.py error!!" } });
  }
}
