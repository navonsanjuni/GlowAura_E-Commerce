const role = (type) => {
  return (req, res, next) => {
    if (!req.user || req.user.type !== type) {
      return res
        .status(403)
        .json({ message: "Access denied. Insufficient permissions." });
    }
    next();
  };
};

export default role;
