const myLogger = function (req, res, next) {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const hours = currentDate.getDate();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  const milliseconds = currentDate.getMilliseconds();

  console.log(
    `url: ${req.url}, method: ${req.method}, req.ip: ${req.ip}, protocol: ${req.protocol}. Logging Date and Time: ${year}Y-${month}M-${day}D at ${hours}:${minutes}:${seconds}.${milliseconds}`
  );
  next();
};

module.exports = myLogger;
