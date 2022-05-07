const secretNum = Math.ceil(Math.random() * 10);
console.log(secretNum);
let tries = 0;

let count = document.getElementById('count');

function guessNum(num) {
  if (tries < 5) {
    if (secretNum === num) {
		tries = 5;
      return alert("Разрази меня гром, верно!");
    } else if(1 === Math.abs(secretNum - num)){
		alert("Якорь вам в глотку! Вы близки как никогда!");
      tries++;
		+count.innerText--;
	 }
	 else {
      alert("Проклятые медузы! попробуйте ещё раз");
      tries++;
		+count.innerText--;
    }
  } else {
	alert("Всю жизнь будешь палубу драить! Конец игры!");
  }
}
