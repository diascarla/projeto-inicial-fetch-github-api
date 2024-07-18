import {baseUrl, itemsQuantily} from '/src/scripts/variables.js'

async function getEvents(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events`)
    const getEvents = await response.json()
    return getEvents.filter(element => element.type === 'CreateEvent' || element.type === 'PushEvent').slice(0, itemsQuantily)
}

export {getEvents}