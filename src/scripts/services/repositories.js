import {baseUrl, itemsQuantily} from '../variables.js'

async function getRepositories(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${itemsQuantily}`)
    return await response.json()
}

export {getRepositories}