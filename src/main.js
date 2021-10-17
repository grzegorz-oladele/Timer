const settings = document.querySelector(".settings");
const settingsBtn = document.querySelector(".settings-btn");
const imageSection = document.querySelector(".image-section");

const name = document.querySelector("#event-name");
const day = document.querySelector("#event-day");
const month = document.querySelector("#event-month");
const year = document.querySelector("#event-year");
const image = document.querySelector("#event-image");

const daysCount = document.querySelector(".days-count");
const hoursCount = document.querySelector(".hours-count");
const minutesCount = document.querySelector(".minutes-count");
const secondsCount = document.querySelector(".seconds-count");

const saveBtn = document.querySelector(".save");

const eventSpan = document.querySelector(".event");
let userTime

const setTimer = () => {
    const currentTime = new Date()
    const result = userTime = new Date()

    const days = Math.floor(result / 1000 / 60 / 60 / 24)
    const hours = Math.floor(result / 1000 / 60 / 60) % 24
    const minutes = Math.floor(result / 1000 / 60) % 60
    const seconds = Math.floor(result / 1000) % 60

    daysCount.innerText = days
    hoursCount.innerText = hours
    minutesCount.innerText = minutes
    secondsCount.innerText = seconds
}

const appUpdate = () => {
    eventSpan.textContent = name.value
    userTime = new Date(` ${day.value} ${month.value} ${year.value}`)
    imageSection.style.backgroundImage = `url("${image.value}")`
}

const viewSettings = () => {
    settings.classList.toggle("active")
}

console.log(new Date())


settingsBtn.addEventListener("click", viewSettings)
saveBtn.addEventListener("click", appUpdate)
appUpdate()
setInterval(setTimer, 1000)


