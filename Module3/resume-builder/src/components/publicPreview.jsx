import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../firebase";
import "./css/preview.css";

let PublicPreview = ()=>{

    let { rid } = useParams();
    let [previewData, setPreviewData] = useState(null); // localState

    // resume ko ek baar fetch krana hai
    useEffect(()=>{
         firestore.collection("resume").doc(rid).get().then((doc)=>{
              let data = doc.data(); // data mein firestore se vo object aayega jisme saari chise hongi resume ki
              setPreviewData(data);
         });
    },[]);

    return (
        <>
            { previewData && previewData.details.isPublic ? (
                    <>
                        <p className={`template-${previewData.code}`}>
                                {previewData.details.fname }
                        </p>
                    </>
                ) : ("Not Available or Not Public")
             }
        </>
    );
}

export default PublicPreview;