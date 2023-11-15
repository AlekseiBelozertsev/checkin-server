//gets last value separated by a comma
const getLastValue = (value) => {
  if (value.includes(",")) {
    const splittedValue = value.split(",");
    const country = splittedValue[1];
    return country;
  } else {
    return value;
  }
};

module.exports = getLastValue;
