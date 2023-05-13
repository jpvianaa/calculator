function inserir(num) {
  document.querySelector(".display>span").innerHTML += num;
}

function clean() {
  document.querySelector(".display>span").innerHTML = "";
}

function backspace() {
  let display = document.querySelector(".display>span").innerHTML;
  document.querySelector(".display>span").innerHTML = display.substring(
    0,
    display.length - 1
  );
}

function somar() {
    let display = document.querySelector(".display>span").innerHTML;
    document.querySelector(".display>span").innerHTML = eval(display);
    // if(display) {

    // } else {
        // document.querySelector(".display>span").innerHTML = "";
    // }
}