export default function handler(req, res) {
  if (req.body.password || req.body.username) {
  }

  res.status(200).json({ name: "John Doe" });
}
