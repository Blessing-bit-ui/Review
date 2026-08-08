import { useEffect, useState, useContext, createContext } from "react";
import axios from "axios";


const UsersReviewURL="http://127.0.0.1:7000/api/usersreview"

function ReviewProvider(){
    const [reviews, setReviews] = useState([]);
    const [review, setReview] = useState("");

    useEffect(function (){
        const res = await axios.get(UsersReviewURL)
       //setReviews(res.data.usersreviews)
    })


}