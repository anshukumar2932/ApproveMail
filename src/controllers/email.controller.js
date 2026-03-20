let emails = [];

exports.createEmail = (req, res) => {
  const { to, subject, body } = req.body;

  const email = {
    id: Date.now().toString(),
    to,
    subject,
    body,
    status: "draft"
  };

  emails.push(email);

  res.json(email);
};

exports.requestApproval = (req, res) => {
  const email = emails.find(e => e.id === req.params.id);

  if (!email) {
    return res.status(404).json({ message: "Email not found" });
  }

  email.status = "pending";

  res.json(email);
};

exports.approveEmail = (req, res) => {
  const email = emails.find(e => e.id === req.params.id);

  if (!email) {
    return res.status(404).json({ message: "Email not found" });
  }

  email.status = "sent";

  console.log("📤 Sending email:", email);

  res.json(email);
};