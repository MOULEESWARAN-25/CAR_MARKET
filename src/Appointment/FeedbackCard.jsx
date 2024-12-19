import React, { useState } from "react";
import Profile from "../Mechanic/image/profileImage.png";

export default function FeedbackCard() {
  const [overallRating, setOverallRating] = useState(0);
  const [buyingRating, setBuyingRating] = useState(0);
  const [sellerRating, setSellerRating] = useState(0);
  const [mechanicRating, setMechanicRating] = useState(0);
  const [decision, setDecision] = useState(null);
  const [comments, setComments] = useState("");

  const handleRatingChange = (rating, type) => {
    switch (type) {
      case "overall":
        setOverallRating(rating);
        break;
      case "buying":
        setBuyingRating(rating);
        break;
      case "seller":
        setSellerRating(rating);
        break;
      case "mechanic":
        setMechanicRating(rating);
        break;
      default:
        break;
    }
  };

  const handleDecisionChange = (value) => {
    setDecision(value);
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg shadow-lg min-w-[700px] max-h-fit p-6 m-6">
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex items-center mb-4">
          <img
            src={Profile}
            alt="Profile"
            className="w-12 h-12 rounded-full mr-4"
          />
          <h3 className="text-lg font-semibold">John Doe</h3>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Feedback</h2>
          <div className="mb-4">
  <label className="block text-gray-700 font-semibold mb-2">
    1. Rate your overall experience:
  </label>
  <div className="flex items-center">
    {[1, 2, 3, 4, 5].map((rating) => (
      <span
        key={rating}
        className={`mr-1 cursor-pointer ${
          rating <= overallRating ? "text-orange-400" : "text-gray-300"
        }`}
        onClick={() => handleRatingChange(rating, "overall")}
      >
        ★
      </span>
    ))}
    <span className="ml-2">(1 = Poor, 5 = Excellent)</span>
  </div>
</div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              2. Rate your buying experience:
            </label>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((rating) => (
                <span
                  key={rating}
                  className={`mr-1 cursor-pointer ${
                    rating <= buyingRating ? "text-orange-400" : "text-gray-300"
                  }`}
                                    onClick={() => handleRatingChange(rating, "buying")}
                >
                  ★
                </span>
              ))}
              <span className="ml-2">(1 = Poor, 5 = Excellent)</span>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              3. Rate your experience with the seller:
            </label>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((rating) => (
                <span
                  key={rating}
                  className={`mr-1 cursor-pointer ${
                    rating <= sellerRating ? "text-orange-400" : "text-gray-300"
                  }`}
                                  
                  onClick={() => handleRatingChange(rating, "seller")}
                >
                  ★
                </span>
              ))}
              <span className="ml-2">(1 = Poor, 5 = Excellent)</span>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              4. Rate your experience with the mechanic:
            </label>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((rating) => (
                <span
                  key={rating}
                  className={` mr-1 cursor-pointer ${
                    rating <= mechanicRating ? "text-orange-400" : "text-gray-300"
                  }`}
                  onClick={() => handleRatingChange(rating, "mechanic")}
                >
                  ★
                </span>
              ))}
              <span className="ml-2">(1 = Poor, 5 = Excellent)</span>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              5. Does the appointment with the seller influence your decision to
              purchase the car?
            </label>
            <div className="flex items-center">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="decision"
                  value="yes"
                  className="mr-2"
                  checked={decision === "yes"}
                  onChange={() => handleDecisionChange("yes")}
                />
                Yes
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="radio"
                  name="decision"
                  value="no"
                  className="mr-2"
                  checked={decision === "no"}
                  onChange={() => handleDecisionChange("no")}
                />
                No
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Your general comments:
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-md p-2 pb-6"
              rows="1"
              placeholder="Enter your comments here..."
              value={comments}
              onChange={handleCommentsChange}
            ></textarea>
            <button className="bg-orange-400 text-white px-3 py-2 w-50 rounded">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}