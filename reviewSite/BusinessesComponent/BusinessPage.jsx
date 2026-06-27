import { useEffect } from "react";
import {useState} from "react"
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useBusiness } from "../ContextProvider/BusinessProvider";

function BusinessPage(){
    const [writereview, setWriteReview] = useState()
    const {name} = useParams();
    const { business, getbusiness } = useBusiness();
    const navigate = useNavigate()

useEffect(()=>{
    if(name)getbusiness(name)
}, [name])

    return (
      <div>
        <p> {name}</p>
        Give us feedback
      </div>
    );

}
export default BusinessPage