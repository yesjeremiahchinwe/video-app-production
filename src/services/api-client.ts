import axios, { AxiosRequestConfig } from "axios"

export interface FetchResponse<T> {
    count: number,
    next: string | null
    results: T[]
}

const axiosIntance =  axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '697d3e232ce44024ae67f63409aef3ec',
    }
})


class APIClient<T> {
    endpoint: string

    constructor (endpoint: string) {
        this.endpoint = endpoint
    }

    getAll = async (config: AxiosRequestConfig) => {
        return axiosIntance.get<FetchResponse<T>>(this.endpoint, config).then(res => res.data)
    }

    getOne = async (id: number | string) => {
        return axiosIntance.get<T>(this.endpoint + "/" + id).then(res => res.data)
    }

}

export default APIClient