function phoneFormat(str) {
  // convert to sttring & array
  const arr = str.split('')
  console.log(str)

  // check if input is empty or less than 10 numbers
  if (arr.length > 10) {
    return 'Phone number should be 10 digits'
  } else {
    for (let i = 0; i < arr.length; i++) {
    }
    // format (123) 456-7890
    return '(' + arr[0] + arr[1] + arr[2] + ')' + ' ' + arr[3] + arr[4] + arr[5] + '-' + arr[6] + arr[7] + arr[8] + arr[9]
  }

}
const a = '5105104320'
console.log(phoneFormat(a))

module.exports = phoneFormat