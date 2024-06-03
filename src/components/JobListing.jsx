import { FaMapMarked } from "react-icons/fa";
import { Link } from "react-router-dom";

const JobListing = ({ job }) => {
  return (
    <div className="rounded-xl shadow-sm text-gray-900 border bg-gray-50 dark:bg-gray-800 dark:border-gray-500">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2 dark:text-gray-300">
            {job.type}
          </div>
          <h3 className="text-xl font-bold dark:text-white">{job.title}</h3>
        </div>

        <div className="mb-4 dark:text-white">
          {job.description.substring(0, 102) + "..."}
        </div>

        {job.salary !== "#" && (
          <h3 className="text-purple-600 mb-2 dark:text-purple-400">
            {job.salary}
          </h3>
        )}

        <div className="border mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="mb-3 text-orange-700 dark:text-red-500">
            <FaMapMarked className="inline text-lg mb-1 ml-2" />
            {job.location}
          </div>
          <Link
            to={`/jobs/${job.id}`}
            className="h-[36px] bg-purple-600 hover:bg-purple-400 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            بیشتر
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
