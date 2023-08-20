import fetch from "node-fetch"

export const get = async (req, protocol) => {
    return await fetch(`${protocol}://${req.host}`, {
        method: 'GET',
    })
}

export const post = async (req, protocol) => {
    return await fetch(`${protocol}://${req.host}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: req.body
    })
}

export const put = async (req, protocol) => {
    return await fetch(`${protocol}://${req.host}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: req.body
    })
}

export const del = async (req, protocol) => {
    return await fetch(`${protocol}://${req.host}`, {
        method: 'DELETE',
    })
}