// Currency conversion utility using Purchasing Power Parity (PPP)
// PPP rate: 1 USD = 22.5 INR (approximate)

const USD_TO_INR_PPP = 22.5;

export const convertUSDToINR = (usdAmount) => {
  return usdAmount * USD_TO_INR_PPP;
};

export const formatINR = (amount) => {
  return `₹${amount.toFixed(0)}`;
};

export const formatUSDToINR = (usdAmount) => {
  const inrAmount = convertUSDToINR(usdAmount);
  return formatINR(inrAmount);
}; 