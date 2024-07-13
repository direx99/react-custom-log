//Default colored LOG
const logWithColor = (message, color) => {
  console.log(`%c${message}`, `color: ${color}`);
};

//JSON colored LOG
const logJsonWithColor = (json) => {
  try {
    const prettyString = JSON.stringify(json, null, 2);
    let color = "";

    if (
      (json.status && json.status === "error") ||
      (json.statusCode && json.statusCode !== 200) ||
      (json.status_code && json.status_code !== 200) ||
      (json.code && json.code !== 200)
    ) {
      color = "red";
    } else if (
      (json.status && json.status === "success") ||
      (json.statusCode && json.statusCode === 200) ||
      (json.status_code && json.status_code === 200) ||
      (json.code && json.code === 200)
    ) {
      color = "green";
    }

    logWithColor(prettyString, color);
  } catch (error) {
    CustomLog.Error("Invalid JSON provided");
  }
};

const CustomLog = {
  Default: (message) => logWithColor(message, ""),
  Info: (message) => logWithColor(message, "blue"),
  Error: (message) => logWithColor(message, "red"),
  Success: (message) => logWithColor(message, "green"),
  Warn: (message) => logWithColor(message, "orange"),
  Processing: (message) => logWithColor(message, "purple"),
  PrettyJSON: (json) => logJsonWithColor(json),
  Custom: (message, color) => logWithColor(message, color),
};

module.exports = CustomLog;
