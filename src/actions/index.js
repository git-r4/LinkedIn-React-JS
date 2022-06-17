//For SEARCH
export const searchFetched = (result) => {
    return{
        type: 'SEARCH_FETCHED',
        payload: result
    }
}
export const searchFetchingError = () => {
    return{
        type: "SEARCH_FETCHING_ERROR"
    }
}

//users
export const usersFetching = () => {
    return{
        type: 'USERS_FETCHING'
    }
}
export const usersFetched = (user) => {
    return{
        type: 'USERS_FETCHED',
        payload: user
    }
}
export const usersFetchingError = () => {
    return{
        type: 'USERS_FETCHING_ERROR'
    }
}


//Jobs----------------

//Recommended
export const jobsFetching = () => {
    return{
        type: 'JOBS_FETCHING'
    }
}
export const jobsFetched = (job) => {
    return{
        type: 'JOBS_FETCHED',
        payload: job
    }
}
export const jobsFetchingError = () => {
    return{
        type: 'JOBS_FETCHING_ERROR'
    }
}
//All JOBS
export const jobsMoreFetching = () => {
    return{
        type: 'JOBS_MORE_FETCHING'
    }
}
export const jobsMoreFetched = (jobs) => {
    return{
        type: 'JOBS_MORE_FETCHED',
        payload: jobs
    }
}
export const jobsMoreFetchingError = () => {
    return{
        type: 'JOBS_MORE_FETCHING_ERROR'
    }
}

//NOTIFICATIONS
export const notificationsFetching = () => {
    return{
        type: 'NOTIFICATIONS_FETCHING'
    }
}
export const notificationsFetched = (notice) => {
    return{
        type: 'NOTIFICATIONS_FETCHED',
        payload: notice
    }
}
export const notificationsFetchingError = () => {
    return{
        type: 'NOTIFICATIONS_FETCHING_ERROR'
    }
}