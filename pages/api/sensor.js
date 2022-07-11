import { execSync } from 'child_process'

export default async function handler(req, res) {
  try{
    const stdout = await execSync(`sudo python3 ./scripts/sensor.py ${process.env.MAC_ADDRESS}`)
    res.status(200).json(JSON.parse(stdout))
  } catch(e){
    console.error(e)
    res.status(400).json({ error: { messsage: "sensor.py error!!" } });
  }
}
