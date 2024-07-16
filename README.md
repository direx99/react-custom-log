# react-custom-log

`react-custom-log` is a lightweight npm package for custom logging in React applications. It provides color-coded logging functions and a utility for pretty-printing JSON responses.

## Installation

You can install the package via npm:

```bash
npm install react-custom-log
```

or via Yarn:

```bash
yarn add react-custom-log
```

## Usage

Import the CustomLog object into your React component or JavaScript file:

```javascript
import CustomLog from "react-custom-log";

function App() {
  return <Component />;
}
```

Then, use the provided methods to log messages with different colors and formats.

## Methods

#### `CustomLog.Default(message)`

Logs a default message without any color.

```javascript
CustomLog.Default("This is a default log message.");
```

###

#### `CustomLog.Info(message)`

Logs an informational message in blue.

```javascript
CustomLog.Info("This is an info message.");
```

###

#### `CustomLog.Error(message)`

Logs an error message in red.

```javascript
CustomLog.Error("This is an error message.");
```

###

#### `CustomLog.Success(message)`

Logs a success message in green.

```javascript
CustomLog.Success("This is a success message.");
```

###

#### `CustomLog.Warn(message)`

Logs a warning message in orange.

```javascript
CustomLog.Warn("This is a warning message.");
```

###

#### `CustomLog.Processing(message)`

Logs a processing message in purple.

```javascript
CustomLog.Processing("This is a processing message.");
```

###

#### `CustomLog.Custom(message, color)`

Logs with any color.

```javascript
CustomLog.Custom("You can set any color", "#f3f3f3");
```

###

#### `CustomLog.PrettyJSON(json)`

Logs a pretty-printed JSON object. The color of the log depends on the status or code fields in the JSON.

- Red for error responses
- Green for success responses

```javascript
const jsonResponse = { status: "success", data: { key: "value" } };
CustomLog.PrettyJSON(jsonResponse);
```

### Here’s a full example of how to use the CustomLog methods in a React component:

```javascript
import React from "react";
import CustomLog from "react-custom-log";

const App = () => {
  CustomLog.Info("Info message");
  CustomLog.Error("Error message");
  CustomLog.Success("Success message");
  CustomLog.Warn("Warning message");
  CustomLog.Processing("Processing message");
  CustomLog.Custom("Custom Log", "#f3f3f3");

  const jsonResponse = { status: "error", message: "Something went wrong!" };
  CustomLog.PrettyJSON(jsonResponse);

  return <div>Check the console for log messages</div>;
};

export default App;
```

## Authors

- [@Dinith Hasaranga Perera](https://www.github.com/direx99)

## Contributing

Feel free to submit issues, feature requests, or pull requests. Contributions are welcome!
