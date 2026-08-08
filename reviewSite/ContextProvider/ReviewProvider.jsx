import { useEffect, useState, useContext, createContext } from "react";
import axios from "axios";

const UsersReviewURL="http://127.0.0.1:7000/api/usersreview"

const UsersReviewContext = createContext()
function ReviewProvider({children}){
    const [reviews, setReviews] = useState([]);
    const [review, setReview] = useState("");

    useEffect(function (){
        async function fetchReviews(){
        const res = await axios.get(UsersReviewURL)
       setReviews(res.usersreviews)
       console.log(res.usersreviews)
    } 
    fetchReviews();
}, [])

    async function writeFeedback(newreview){
        const res = await axios.post(UsersReviewURL, newreview )
        setReviews((reviews)=>[...reviews, res])
    }

    return(
        <UsersReviewContext.Provider
        value={{
            reviews,
            setReviews,
            writeFeedback,
        }}
        >
            {children}
        </UsersReviewContext.Provider>
    )
}

function useReviews(){
    const context = useContext(UsersReviewContext)
    if (context === undefined)
        throw new Error("reviews is use out of context");
    return context
}

export {useReviews, ReviewProvider}


// next time we are setting busineid to id of the business