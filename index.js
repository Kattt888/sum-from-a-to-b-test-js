
function sum(fromN, toN) {
  if (fromN === toN) { // setting up fromN to equal toN
    return toN; //setting up base case - returning the value when fromN equals toN
  }
  return fromN + sum(fromN + 1, toN); //recursive case adding fromN and calling sum plus the next num
}

module.exports = sum;