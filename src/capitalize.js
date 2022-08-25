capitalize = (str) => {
  const lower = str.toLowerCase();
  const first = lower.charAt(0);
  const upper = first.toUpperCase();
  return upper + lower.slice(1);
};
module.exports = capitalize;