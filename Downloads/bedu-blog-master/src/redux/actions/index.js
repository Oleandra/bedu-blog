import { 
    UPDATE_TITLE,
    UPDATE_EXCERPT, 
    UPDATE_CONTENT,
    UPDATE_AUTHOR,
    ADD_POST
} from './actionTypes'

export const updateTitle = title => {
    return {
        type: UPDATE_TITLE,
        payload: title
    }
}

export const updateExcerpt = excerpt => {
    return {
        type: UPDATE_EXCERPT, 
        payload: excerpt
    }
}

export const updateContent = content => {
    return {
        type: UPDATE_CONTENT,
        payload: content
    }
}
export const updateAuthor = author => {
    return {
        type: UPDATE_AUTHOR,
        payload: author
    }
}
export const addPost = () => {
    return {
        type: ADD_POST,
        payload: null
    }
}


