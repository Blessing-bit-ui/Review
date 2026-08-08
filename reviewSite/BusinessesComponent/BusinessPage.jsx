import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useBusiness } from "../ContextProvider/BusinessProvider";
import { NavLink } from "react-router-dom";


function BusinessPage() {
  const [reviewForm, setReviewForm] = useState(false);
  const [writereview, setWriteReview] = useState("");
  const { name } = useParams();
  const { businessObj, getbusiness } = useBusiness();
  const navigate = useNavigate();

  useEffect(() => {
      console.log("URL name:", name);
    if (name) getbusiness(name);
  }, [name]);


function showReviewForm(){
  if (reviewForm == false){
    setReviewForm(true)}
    else{
      setReviewForm(false)
    }
    console.log(reviewForm)
} 
  return (
    <div className="bg-lime-600 w-screen h-screen">
      <p> {name}</p>
      <p>{businessObj.name}</p>
      <p>{businessObj.email}</p>
      
        <button className="bg-white text-green-600 border rounded-lg p-3" onClick={showReviewForm}>
          Give us feedback
        </button>
        <div className="mt-4">
        { reviewForm &&(
        <ReviewForm/>
        )
}
</div>
    </div>
  );
}

function ReviewForm() {
  const [writeReview, setWriteReview] = useState("")
  return (
    <div className= " bg-white border rounded-md p-3 w-[200px]">
      <form className="">
        <label>Review Us </label>
        <input placeholder="Enter Experience" className="border w-[180px]"
        value={writeReview}
       onChange={(e)=>setWriteReview(target.value)}
        />
      </form>
    </div>
  );
}
export default BusinessPage;
