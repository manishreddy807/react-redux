import { combineReducers } from '@reduxjs/toolkit'
import {FETCHED_FAILED, FETCHED_SUCCESS } from './action'

const initialState = {
    data: null,
}

const rootReucer = (state= initialState, action) => {
    const {type, data} = action
      switch (type) {
        case FETCHED_SUCCESS:

           return {...state, data: data }
          
        case FETCHED_FAILED:
            return  console.log('nkhd')
        default:
             return state
      }
}

export const rootReducer = combineReducers({
    root : rootReucer
})