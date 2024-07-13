// Colored logs
const logWithColor = (message, color) => {
  console.log(`%c${message}`, `color: ${color}`);
};

const CustomLog = {
  //Colored Logs
  Default: (message) => logWithColor(message, ""),
  Success: (message) => logWithColor(message, "green"),
  Info: (message) => logWithColor(message, "blue"),
  Error: (message) => logWithColor(message, "red"),
  Warn: (message) => logWithColor(message, "orange"),
  Processing: (message) => logWithColor(message, "purple"),

  // JSON Logs
  PrettyJSON: (json) => {
    try {
      const prettyString = JSON.stringify(json, null, 2);
      console.log(prettyString);
    } catch (error) {
      CustomLog.Error("Invalid JSON provided");
    }
  },
};

export default CustomLog;
