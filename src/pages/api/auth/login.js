import authService from "../../../backend/services/auth";

export default function handler(req, res) {
  if (req.body.password || req.body.username) {
    authService.create();
  }

  res.status(200).json({ success: false });
}
