const initialState = {
    search: [],
    loadingStatus: 'idle',
    users: [],
    recommendedJobs: [],
    moreJobs: [],
    notifications: []
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'SEARCH_FETCHED':
            return{
                ...state,
                search: action.payload,
                loadingStatus: 'idle',
            }
        case 'SEARCH_FETCHING_ERROR':
            return{
                ...state,
                loadingStatus: 'error'
            }

        //USERS
        case "USERS_FETCHING":
            return {
                ...state,
                loadingStatus: 'loading'
            }
        case "USERS_FETCHED":
            return {
                ...state,
                users: action.payload,
                loadingStatus: "idle"
            }
        case "USERS_FETCHING_ERROR":
            return {
                ...state,
                loadingStatus: "error"
            }
        //JOBS----------
            //RECOMMENDED
        case "JOBS_FETCHING":
            return{
                ...state,
                loadingStatus: 'loading'
            }
        case "JOBS_FETCHED":
            return{
                ...state,
                recommendedJobs: action.payload,
                loadingStatus: 'idle'
            }
        case "JOBS_FETCHING_ERROR":
            return {
                ...state,
                loadingStatus: "error"
            }

            //MORE JOBS
        case "JOBS_MORE_FETCHING":
            return {
                ...state,
                loadingStatus: 'loading'
            }
        case "JOBS_MORE_FETCHED":
            return {
                ...state,
                moreJobs: action.payload,
                loadingStatus: 'idle'
            }
        case "JOBS_MORE_FETCHING_ERROR":
            return {
                ...state,
                loadingStatus: 'error'
            }

        //NOTIFICATIONS
        case "NOTIFICATIONS_FETCHING":
            return {
                ...state,
                loadingStatus: 'loading'
            }
        case "NOTIFICATIONS_FETCHED":
            return {
                ...state,
                notifications: action.payload,
                loadingStatus: 'idle'
            }
        case "NOTIFICATIONS_FETCHING_ERROR":
            return {
                ...state,
                loadingStatus: 'error'
            }


        default: return state
    }
}

export default reducer;