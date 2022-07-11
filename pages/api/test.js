export default function handler(req, res) {
  const hoge = Math.random() < 0.5
  console.log(hoge)
  res.status(200).json({ isLight: hoge })
}