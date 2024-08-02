export function formatNumber(n = "") {
  return n
    .toString()
    .replace(/^0|\D/g, "")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function formatNumberToCurrency(number = "", decimalPlace = false) {
  let value = number.toString();
  const decimalPosition = value.indexOf(".");
  if (decimalPosition >= 0) {
    let leftSide = formatNumber(value.substring(0, decimalPosition));
    let rightSide = formatNumber(value.substring(decimalPosition));
    if (decimalPlace) {
      rightSide += "00";
    }

    rightSide = rightSide.substring(0, 2);
    value = leftSide + "." + rightSide;
  } else {
    value = formatNumber(value);
    if (decimalPlace) {
      value += ".00";
    }
  }
  return value;
}

export function formatCurrencyToNumber(string = "") {
  return string.toString().replace(/,/g, "");
}




export const parseDateToString = (date) => {
  const year = date?.[0] || "";
  const month = dateMonths[date?.[1]] || "";
  const day = date?.[2] || "";

  let seperator = Array.isArray(date) && date.length ? " " : "";
  let newDate =
    formatNumberToDD(day) +
    seperator +
    formatNumberToDD(month) +
    seperator +
    year;

  return newDate || null;
};

/**
 * format stringified number which length is less than 10 to DD e.g 02.
 * @param {number} number
 * @returns
 */
function formatNumberToDD(number) {
  let suffix = "0";
  let numberStr = number.toString();
  if (numberStr.length === 1) {
    numberStr = suffix.concat(numberStr);
  }
  return numberStr;
}

export const dateMonths = [
  undefined,
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];