import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useBusiness } from "../ContextProvider/BusinessProvider";
import { NavLink } from "react-router-dom";
import { useReviews } from "../ContextProvider/ReviewProvider";
import { ReviewProvider } from "../ContextProvider/ReviewProvider";


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


/*function showReviewForm(){
  if (reviewForm == false){
    setReviewForm(true)}
    else{
      setReviewForm(false)
    }
    console.log(reviewForm)
} */
function showReviewForm() {
  setReviewForm((prev) => !prev);
}
  return (
    <div className="bg-lime-600 w-screen h-screen">
      <p> {name}</p>
      <p>{businessObj?.name}</p>
      <p>{businessObj?.email}</p>
      
        <button
         className="bg-white text-green-600 border rounded-lg p-3" onClick={showReviewForm}>
          Give us feedback
        </button>
        <div className="mt-4">
        { reviewForm &&
        <ReviewForm businessObj={businessObj}/>
}
</div>
    </div>
  );
}

function ReviewForm({businessObj}) {
const [writeReview, setWriteReview] = useState("")
 const { reviews, writeFeedback } = useReviews()

  async function handleReviewForm(e){
    e.preventDefault()
    const newcomment={
    id:crypto.randomUUID(),
    business_id:businessObj.id,
    email:businessObj.email,
    username:businessObj.name,
    comment:writeReview,
    }
    await writeFeedback(newcomment)
    setWriteReview("")
  }
  return (
    <div className=" bg-white border rounded-md p-3 w-[200px]">
      <form onSubmit={handleReviewForm}>
        <label>Review Us </label>
        <input
          placeholder="Enter Experience"
          className="border w-[180px]"
          value={writeReview}
          onChange={(e) => setWriteReview(e.target.value)}
        />
        <button
          type="submit"
          className="bg-lime-600 flex items-center
                   justify-center p-3 border rounded-lg 
                   font-bold hover:bg-black hover:text-lime-600"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
}
export default BusinessPage;



// sort it today