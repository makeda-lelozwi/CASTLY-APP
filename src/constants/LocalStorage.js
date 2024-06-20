/**
 * Extract  from local storage
 * @param {String} key to extract values on the local storage
 * @returns value of the given key
 */
export const   extractFromLocalStorage=(key)=>JSON.parse(window.localStorage.getItem(key));
/**
 * Set the key value pair to local storage
 * @param {String} key is identical string to pair with value
 * @param {*} value is the value key pair
 */
export const   setToLocalStorage=(key,value)=>{
  window.localStorage.setItem(key,JSON.stringify(value))
};