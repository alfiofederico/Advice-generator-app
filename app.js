const advice = document.getElementById('advice')
const adviceNumber = document.getElementById('advice-n')
const adviceBtn = document.getElementById('btn')


adviceBtn.addEventListener('click', generateAdvice)

generateAdvice();

async function generateAdvice() {

  
  const res = await fetch("https://api.adviceslip.com/advice")

  const data = await res.json()
  console.log(data)

  

 advice.innerHTML = `	
&#8220;${data.slip.advice}&#8221;`;
 adviceNumber.innerHTML =`ADVICE #${data.slip.id}`
}  
