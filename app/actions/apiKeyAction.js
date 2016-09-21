import {CHANGE_API_KEY} from './actionTypes'
function changeApiKey(apiKey){
  return {
    type: CHANGE_API_KEY,
    payload: apiKey
  }
}
