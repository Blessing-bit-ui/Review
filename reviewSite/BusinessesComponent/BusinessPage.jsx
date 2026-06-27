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
    <div>
      <p> {name}</p>
      <p>{businessObj.name}</p>
      <p>{businessObj.email}</p>
      Give us feedback
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
