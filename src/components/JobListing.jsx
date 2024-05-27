import { useState } from "react";
import { FaMapMarked } from "react-icons/fa";
import { Link } from "react-router-dom";

const JobListing = ({ job }) => {
  const [showFullDesc, setShowFullDesc] = useState(false);
  let description = job.description;

  if (!showFullDesc) {
    description = description.substring(0, 90) + "...";
  }

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.type}</div>
          <h3 className="text-xl font-bold">{job.title}</h3>
        </div>

        <div className="mb-1">{description}</div>
        <button
          className="text-green-500 mb-5 hover:text-green-600"
          onClick={() => setShowFullDesc((pState) => !pState)}
        >
          {showFullDesc ? "نمایش کمتر" : "نمایش بیشتر"}
        </button>

        {job.salary !== "#" && (
          <h3 className="text-green-500 mb-2">{job.salary}</h3>
        )}

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="mb-3 text-orange-700">
            <FaMapMarked className="inline text-lg mb-1 ml-2" />
            {job.location}
          </div>
          <Link
            to={`/jobs/${job.id}`}
            className="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            بیشتر
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
