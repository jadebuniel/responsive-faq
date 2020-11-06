const questionsArray = [
 {
 question: "How many team members can I invite?",
 answer: "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
 },
 {
 question: "What is the maximum file upload size?",
 answer: "No more than 2GB. All files in your account must fit your allotted storage space."
 },
 {
 question: "How do I reset my password?",
 answer: "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."
 },
 {
 question: "Can I cancel my subscription?",
 answer: "Yes! Send us a message and we’ll process your request no questions asked."
 },
 {
 question: "Do you provide additional support?",
 answer: "Chat and email support is available 24/7. Phone lines are open during normal business hours."
 }
]
//get div
const questionsDiv = document.querySelector(".questions")

const getQuestions = () => {
 questionsArray.forEach(data => {
  const question = document.createElement('p')
  question.classList.add("question")

  const answer = document.createElement('p')
  answer.classList.add("answer")

  const faqContainer = document.createElement('div')
  faqContainer.classList.add("faq-container")
  faqContainer.style.transition ='height 250ms ease'

  const arrow = document.createElement('button')
  arrow.classList.add("arrow")
  arrow.innerHTML = `<img src="./images/icon-arrow-down.svg" alt="">`

  const quest = document.createElement('div')
  quest.classList.add("quest")
  quest.appendChild(question)
  quest.appendChild(arrow)

  question.innerText = data.question

  answer.innerText = data.answer

  faqContainer.appendChild(quest)
  faqContainer.appendChild(answer)

  questionsDiv.appendChild(faqContainer)

  arrow.addEventListener('click', (e) => {
  const parent =  e.target.parentElement.parentElement
  parent.classList.toggle('active-mobile')
  })
  question.addEventListener('click', (e) => {
  const parent =  e.target.parentElement.parentElement
  parent.classList.toggle('active-mobile')
  })
 })
}
document.addEventListener('DOMContentLoaded', getQuestions)