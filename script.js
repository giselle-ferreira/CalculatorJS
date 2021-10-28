//Function to display the numbers
function insert(num) {
  let number = document.getElementById('result').innerHTML
  document.getElementById('result').innerHTML = number + num
}

//Function to clear the display
function clearDisplay() {
  document.getElementById('result').innerHTML = ''
}

//Function to delete each number
function del() {
  var result = document.getElementById('result').innerHTML
  document.getElementById('result').innerHTML = result.substring(
    0,
    result.length - 1
  )

  //the substring method extracts characters between the start and the end (excluding the last one)
}

//Function to get the final result
function calculate() {
  var result = document.getElementById('result').innerHTML
  if (result) {
    document.getElementById('result').innerHTML = eval(result)
  }
}
