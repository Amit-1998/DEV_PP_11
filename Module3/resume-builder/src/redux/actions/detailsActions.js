export const detailCreator = (details)=>{
    return{
        type: "SET_DETAILS",
        payload: details, // details mein particular key-values hongi jo hame change karni hogi
    }
}