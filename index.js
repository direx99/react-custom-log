// Colored logs
const logWithColor = (message, color) => {
  console.log(`%c${message}`, `color: ${color}`);
};

const CustomLog = {
  Default: (message) => logWithColor(message, ""),
  Success: (message) => logWithColor(message, "green"),
  Info: (message) => logWithColor(message, "blue"),
  Error: (message) => logWithColor(message, "red"),
  Warn: (message) => logWithColor(message, "orange"),
  Processing: (message) => logWithColor(message, "purple"),
};

export default CustomLog;
