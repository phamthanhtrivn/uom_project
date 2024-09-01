function formatToVND(amount) {
  var number = amount.toString();
  return number.split('').reverse().reduce((prev, next, index) => {
    return ((index % 3) ? next : (next + '.')) + prev
  })
}

export default formatToVND;