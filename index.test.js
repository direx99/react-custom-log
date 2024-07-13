const CustomLog = require("./index");

// Mock console.log
console.log = jest.fn();

describe("CustomLog", () => {
  afterEach(() => {
    console.log.mockClear();
  });

  it("should log default message with default color", () => {
    CustomLog.Default("Default message");
    expect(console.log).toHaveBeenCalledWith("%cDefault message", "color: ");
  });

  it("should log info message in blue", () => {
    CustomLog.Info("Info message");
    expect(console.log).toHaveBeenCalledWith("%cInfo message", "color: blue");
  });

  it("should log error message in red", () => {
    CustomLog.Error("Error message");
    expect(console.log).toHaveBeenCalledWith("%cError message", "color: red");
  });

  it("should log success message in green", () => {
    CustomLog.Success("Success message");
    expect(console.log).toHaveBeenCalledWith(
      "%cSuccess message",
      "color: green"
    );
  });

  it("should log warning message in orange", () => {
    CustomLog.Warn("Warning message");
    expect(console.log).toHaveBeenCalledWith(
      "%cWarning message",
      "color: orange"
    );
  });

  it("should log processing message in purple", () => {
    CustomLog.Processing("Processing message");
    expect(console.log).toHaveBeenCalledWith(
      "%cProcessing message",
      "color: purple"
    );
  });

  it("should log JSON with green color for success statusCode 200", () => {
    const json = { statusCode: 200, message: "Success" };
    CustomLog.PrettyJSON(json);
    expect(console.log).toHaveBeenCalledWith(
      '%c{\n  "statusCode": 200,\n  "message": "Success"\n}',
      "color: green"
    );
  });

  it("should log JSON with red color for error statusCode 500", () => {
    const json = { statusCode: 500, message: "Error" };
    CustomLog.PrettyJSON(json);
    expect(console.log).toHaveBeenCalledWith(
      '%c{\n  "statusCode": 500,\n  "message": "Error"\n}',
      "color: red"
    );
  });

  it("should log error message for invalid JSON", () => {
    console.log.mockImplementationOnce(() => {
      throw new Error("Invalid JSON provided");
    });
    CustomLog.PrettyJSON("invalid json");
    expect(console.log).toHaveBeenCalledWith(
      "%cInvalid JSON provided",
      "color: red"
    );
  });
});
