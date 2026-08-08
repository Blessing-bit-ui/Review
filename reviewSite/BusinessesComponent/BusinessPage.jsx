import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useBusiness } from "../ContextProvider/BusinessProvider";


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

  return (
    <div className="bg-lime-600 w-screen h-screen">
      <p> {name}</p>
      <p>{businessObj.name}</p>
      <p>{businessObj.email}</p>
      <button className="bg-white text-green-600 border rounded-lg p-3">Give us feedback</button>
    </div>
  );
}

function ReviewForm() {
  return (
    <div>
      <form>
        <label>Review Us </label>
        <input placeholder="Enter Experience" />
      </form>
    </div>
  );
}
export default BusinessPage;
