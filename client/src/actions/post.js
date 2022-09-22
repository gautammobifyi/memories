import { CREATE, FETCH_ALL, UPDATE, DELETE } from '../constants/actionTypes';
import * as api from '../api';

// Action Creater

export const getPost = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts()
        dispatch({type: FETCH_ALL, payload: data})
    } catch (error) {
        console.log(error.message)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: CREATE, payload: data})
    } catch (error) {
        console.log("createPost-error", error)
    }
}
export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({ type: UPDATE, payload: data})
    } catch (error) {
        console.log("updatePost-error", error)
    }
}
export const deletePost = (id) => async (dispatch) => {
    try {
         await api.deletePost(id);
        dispatch({ type: DELETE, payload: id})
    } catch (error) {
        console.log("deletePost-error", error)
    }
}
export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);
        dispatch({ type: UPDATE, payload: data})
    } catch (error) {
        console.log("deletePost-error", error)
    }
}