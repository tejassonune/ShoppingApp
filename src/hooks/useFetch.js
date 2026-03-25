import { useEffect, useState } from "react";

function useFetch(url){
    const [data, SetData]= useState([]);

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response = await fetch(url);
                if(!response.ok){
                    throw new Error("Something went wrong");
                }
                const result = await result.json();
                SetData(result);
            }catch(err){
                console.log("Error", err.message)
            }
        }
        fetchData();
    },[url])

    return data
}

export default useFetch;
