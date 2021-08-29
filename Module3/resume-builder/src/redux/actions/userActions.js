export const userCreator = (user)=>{
    return{
        type: "SET-USER",
        payload: user,
    }
}