export const saveResumeCreator = ()=>{ // ye actionCreator hota hai
    return { // ye action/action-object hota hai
        type: "SAVE_RESUME",
    };
};

export const saveErrCreator = (err)=>{
    return{
        type: "SAVE_ERR",
        payload: err
    };
};

export const saveCompletedCreator = (id)=>{
    return {
         type: "SAVE_COMPLETED",
         payload: id
    };
};

//Now special action
// And special action retuens a function and is function ko dispatch milta hai

export const saveResume = (uid, details, code)=>{ // saveResume is action creator and uid,details,code hame saveResume action ko dispatch karte vakt provide karne honge
    //returns a function jo ki thunk ke paas jaata hai
    // thunk fir is function ko execute karta hai
    return (dispatch)=>{ // ye parameter vaala dispatch is let dispatch = useDispatch(); 
         
        //  ab ye return vaala function, thunk execute kar rha hai and normal-action i.e saveResumeCreator() ko dispatch kar rha hai 
         dispatch(saveResumeCreator()); // elaan kar dia ki save hone ki process start ho rhi hai

         // ab actual mein aync vaala kaam karna hai
         // add function gives us promise
         firestore.collection("resume").add({ // jab ye object save ho jayega resume COllection mein tab hmara .then() chalega
             uid,
             details,
             code
         })
         .then((docRef)=>{
             // is .then() ko upar saved hue document ka reference mil jayega
              return docRef.get(); // document ko lekar aa jao, get() bhi ek promise dega
         })
         .then((doc)=>{ //is then mein hame actual document mil jayega 
               dispatch(saveCompletedCreator(doc.id)); // normal-action dispatch
         })
         .catch((err)=>{
              dispatch(saveErrCreator(err)); // normal-action dispatch
         }); 
    };
};

//  Note : 
// 1). ham upar ke teen normal-actions ko dispatch nhi kar rhe hai
// 2). ham to special-action ko dispatch kar rhe hai
// 3) thunk in teeno normal actions ko dispatch kar rha hai