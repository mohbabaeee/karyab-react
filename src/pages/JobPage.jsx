import { useParams, useLoaderData, Link, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { toast } from "react-toastify";

const JobPage = ({ deleteJob }) => {
  const { id } = useParams();
  const job = useLoaderData();
  const navigate = useNavigate();

  const onDeleteClick = (jobId) => {
    const confirm = window.confirm("مطمعنی میخوای آگهی رو پاک کنی؟");

    if (!confirm) return;

    deleteJob(jobId);
    navigate("/jobs");
    toast.success("آگهی مورد نظر با موفقیت پاک شد.");
  };

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/jobs"
            className="text-green-500 hover:text-green-600 flex items-center"
          >
            <FaArrowRight className="ml-2" /> برگشت به لیست مشاغل
          </Link>
        </div>
      </section>

      <section className="bg-green-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-right">
                <div className="text-gray-500 mb-4">{job.type}</div>
                <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <FaLocationDot className="text-lg text-orange-700 ml-2" />
                  <p className="text-orange-700">{job.location}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-green-800 text-lg font-bold mb-6">
                  توضیحات
                </h3>

                <p className="mb-4">{job.description}</p>

                <h3 className="text-green-800 text-lg font-bold mb-2">حقوق</h3>

                <p className="mb-4">{job.salary}</p>
              </div>
            </main>

            <aside>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">مشخصات شرکت</h3>

                <h2 className="text-2xl">{job.company.name}</h2>

                <p className="my-2">{job.company.description}</p>

                <hr className="my-4" />

                <h3 className="text-xl">آدرس ایمیل:</h3>

                <p className="my-2 bg-green-100 p-2 font-bold">
                  {job.company.contactEmail}
                </p>

                <h3 className="text-xl">شماره تلفن:</h3>

                <p className="my-2 bg-green-100 p-2 font-bold">
                  {job.company.contactPhone}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">مدیریت آگهی</h3>
                <Link
                  to={`/edit-job/${job.id}`}
                  className="bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  ویرایش
                </Link>
                <button
                  onClick={() => onDeleteClick(job.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  حذف
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

export { JobPage as default, jobLoader };

// import { useEffect, useState } from "react";
// import Spinner from "../components/Spinner";
// import { useParams } from "react-router-dom";

// const JobPage = () => {
//   const { id } = useParams();
//   const [job, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const res = await fetch(`/api/jobs/${id}`);
//         const data = await res.json();
//         setJobs(data);
//       } catch (error) {
//         console.log("Error fetching data", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJobs();
//   }, []);

//   return loading ? <Spinner /> : <h1>{job.title}</h1>;
// };

// export default JobPage;
