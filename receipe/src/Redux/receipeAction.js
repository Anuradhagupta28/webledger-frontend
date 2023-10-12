
import axios from "axios";
export const SET_DATA_SAVE = 'SET_DATA_SAVE';
export const DETA = 'DETA';
export const FAV = 'FAV';
export const ADD_USER_DATA_LOGIN = 'ADD_USER_DATA_LOGIN';
export const ADD_USER_DATA_LOGIN_FAIL= 'ADD_USER_DATA_LOGIN_FAIL';
export const SIGN = 'SIGN';
export const SIGNFAIL = 'SIGNFAIL';



export const setDataSave = (data) => {
  console.log("actionData",data)
  return {
    type: SET_DATA_SAVE,
    payload: data,
  };
};

export const detailsAction = (data) => {
  console.log("detailsAction",data)
  return {
    type: DETA,
    payload: data,
  };
};


export const detailsFun=(id)=>{
  return (dispatch)=>{
      axios.get(`https://webledger-backend-155x.onrender.com/search/recipes/${id}/information`)
      .then((res)=> {
          return dispatch(detailsAction(res.data))
          
      })
    
  }
}
export const favoriteAction=(id)=>{
  return (dispatch)=>{
      axios.get(`https://webledger-backend-155x.onrender.com/search/recipes/${id}/information`)
      .then((res)=> {
          return dispatch(favoriteAct(res.data))
          
      })
    
  }
}

export const favoriteAct = (data) => {
  console.log("favoriteAct",data)
  return {
    type: FAV,
    payload: data,
  };
};

export const getUser = (inputValues) => {
  return function (dispatch, getState) {
    axios
      .post("https://webledger-backend-155x.onrender.com/api/auth/login", inputValues)
      .then((res) => {
        
        dispatch({
          
          type: ADD_USER_DATA_LOGIN,
          payload: res.data,
        });
        
      })
      // .then((res)=> console.log(res))
      .catch((err) => {
        dispatch({
          type: ADD_USER_DATA_LOGIN_FAIL,
        });
      });
  };
};

export const addUser = (inputValues) => {
  return function (dispatch, getState) {
    axios
      .post("https://webledger-backend-155x.onrender.com/api/auth/register", inputValues)
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: SIGN,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: SIGNFAIL,
        });
      });
  };
};