export const SET_TOKEN = "SET_TOKEN"
export const REMOVE_TOKEN = "REMOVE_TOKEN";
// export const SETOR_KUE = "SETOR_KUE"

export const setToken = (data) =>{
    return {
        type : SET_TOKEN,
        payload : {data}
    }
};
export const removeToken = () => {
    return {
        type: REMOVE_TOKEN
    };
};