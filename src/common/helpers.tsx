import { useRef } from 'react';
import { uuid } from 'uuidv4';

export default function getURL(path: string) {
    const host = process.env.REACT_APP_SERVER_HOST
    const context = process.env.REACT_APP_CONTEXT_PATH

    return encodeURI(`${host}${context}${path}`)
}

export function addOrReplace(arr: any[], obj: { text: string, value: string }) {
    const index = arr.findIndex((el: { text: string, value: string }) => el.text === obj.text && el.value === obj.value)

    if (index === -1) {
        arr.push(obj)
    } else {
        arr[index] = obj
    }

    return arr
}

export function formatNumber(value: any) {
    const options = { 
        minimumFractionDigits: 2,
        maximumFractionDigits: 2 
    }
    if (value === undefined) {
        return '0.00'
    }
    if (typeof value === 'string') {
        value = Number(value)
    }
    return value.toLocaleString('en', options)
}

export function replaceUndefined(value: any, replaceValue: any){
    if(typeof(value) === "undefined"){
        return replaceValue;
    } 
    return value;
}


export function validateEmail(email: any) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function isPhonenumber(inputtxt: string) {
  //var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  var phoneno = /^\d{10}$/;
  if( typeof inputtxt !== 'undefined' && inputtxt.match(phoneno))
  {
    return true;
  }else{
    return false;
  }
}

export function isValidCardID(inputtxt: string) {
    //var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var phoneno = /^\d{13}$/;
    if( typeof inputtxt !== 'undefined' && inputtxt.match(phoneno))
    {
      return true;
    }else{
      return false;
    }
  }

export function isValidCode(inputtxt: string) {
    //var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var phoneno = /^\d{20}$/;
    if( typeof inputtxt !== 'undefined' && inputtxt.match(phoneno))
    {
      return true;
    }else{
      return false;
    }
  }
/***
 *  Unique ID by component
 */

let uniqueId = 0;
const getUniqueId = () => uniqueId++;

export function useComponentId() {
  const idRef = useRef<number>();
  if (idRef.current === undefined) {
    idRef.current = getUniqueId();
  }
  return idRef.current;
}

export function getNewOrderID() {
    return uuid();
}