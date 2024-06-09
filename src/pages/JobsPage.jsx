import { useEffect, useState } from "react";
import JobListing from "../components/JobListing";
import Spinner from "../components/Spinner";

const JobsPage = ({ ishome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = ishome
        ? "https://my-json-server.typicode.com/tinykocholo/karyab-react-json/jobs?_limit=3"
        : "https://my-json-server.typicode.com/tinykocholo/karyab-react-json/jobs";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section
      className={`px-4 lg:px-10 py-10 ${!ishome && "pt-24 dark:bg-gray-900"}`}
    >
      <div className="container-xl lg:container m-auto">
        <h2
          className={`text-3xl font-bold text-black mb-6 text-center dark:text-gray-100`}
        >
          {ishome ? "آگهی های اخیر" : "لیست آگهی‌ها"}
        </h2>
        {loading ? (
          <Spinner loading />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListing job={job} key={job.id} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobsPage;
