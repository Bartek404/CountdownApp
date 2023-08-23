const settings = document.querySelector('.settings')
const settingsBtn = document.querySelector('.settings-btn')
const imageSection = document.querySelector('.image-section')

const eventName = document.querySelector('#event-name')
const eventDay = document.querySelector('#event-day')
const eventMonth = document.querySelector('#event-month')
const eventYear = document.querySelector('#event-year')
const eventImg = document.querySelector('#event-image')

const countDays = document.querySelector('.days-count')
const countHours = document.querySelector('.hours-count')
const countMinutes = document.querySelector('.minutes-count')
const countSeconds = document.querySelector('.seconds-count')

const saveBtn = document.querySelector('.save')
const eventSpan = document.querySelector('.event')

let usersTime

const setTime = () => {
	const currentTime = new Date()
	const result = usersTime - currentTime

	const days = Math.floor(result / (24 * 60 * 60 * 1000))
	const hours = Math.floor(result / (60 * 60 * 1000)) % 24
	const minutes = Math.floor(result / (60 * 1000)) % 60
	const seconds = Math.floor(result / 1000) % 60

	countDays.textContent = days
	countHours.textContent = hours
	countMinutes.textContent = minutes
	countSeconds.textContent = seconds
}

const appUpdate = () => {
	eventSpan.textContent = eventName.value
	usersTime = new Date(`${eventMonth.value} ${eventDay.value} ${eventYear.value}`)
	imageSection.style.backgroundImage = `url(${eventImg.value})`
	setTime()
}

settingsBtn.addEventListener('click', () => {
	settings.classList.toggle('active')
})

saveBtn.addEventListener('click', appUpdate)
appUpdate()
setInterval(setTime, 1000)
