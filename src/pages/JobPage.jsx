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
    <div className="dark:bg-gray-900">
      <section>
        <div className="container m-auto pr-6 pt-20 pb-4 text-purple-600 hover:text-purple-700 dark:text-purple-300 dark:hover:text-purple-400">
          <Link to="/jobs" className="flex items-center">
            <FaArrowRight className="ml-2" />
            بازگشت به لیست مشاغل
          </Link>
        </div>
      </section>

      <section>
        <div className="container m-auto pb-10 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="p-6 rounded-lg shadow-sm border text-center md:text-right bg-gray-50 dark:bg-gray-800 dark:border-gray-500">
                <div className="text-gray-500 mb-4 dark:text-gray-300">
                  {job.type}
                </div>
                <h1 className="text-3xl font-bold mb-4 dark:text-gray-200">
                  {job.title}
                </h1>
                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <FaLocationDot className="text-lg text-orange-700 ml-2 dark:text-red-500" />
                  <p className="text-orange-700 dark:text-red-500">
                    {job.location}
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-lg shadow-sm border mt-6 bg-gray-50 dark:bg-gray-800 dark:border-gray-500 ">
                <h3 className="text-purple-500 text-lg font-bold mb-6 dark:text-purple-400">
                  توضیحات
                </h3>

                <p className="mb-4 dark:text-gray-200">{job.description}</p>

                <h3 className="text-purple-500 text-lg font-bold mb-2 dark:text-purple-400">
                  حقوق
                </h3>

                <p className="mb-4 dark:text-gray-200">{job.salary}</p>
              </div>
            </main>

            <aside>
              <div className="p-6 rounded-lg shadow-sm border bg-gray-50 dark:bg-gray-800 dark:border-gray-500 dark:text-gray-200">
                <h3 className="text-xl font-bold mb-6 dark:text-gray-100">
                  مشخصات شرکت
                </h3>

                <h2 className="text-2xl">{job.company.name}</h2>

                <p className="my-2">{job.company.description}</p>

                <hr className="my-4 dark:border-gray-500" />

                <h3 className="text-xl">آدرس ایمیل:</h3>

                <p className="my-2 p-2 font-bold rounded-lg text-left">
                  <a href={`mailto:` + job.company.contactEmail}>
                    {job.company.contactEmail}
                  </a>
                </p>

                <h3 className="text-xl">شماره تلفن:</h3>

                <p className="my-2 p-2 font-bold rounded-lg text-left">
                  <a href={`tel:` + job.company.contactPhone}>
                    {job.company.contactPhone}
                  </a>
                </p>
              </div>

              <div className="p-6 rounded-lg shadow-sm border mt-6 bg-gray-50 dark:bg-gray-800 dark:border-gray-500">
                <h3 className="text-xl font-bold mb-6 dark:text-white">
                  مدیریت آگهی
                </h3>
                <Link
                  to={`/edit-job/${job.id}`}
                  className="bg-purple-600 hover:bg-purple-400 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  ویرایش
                </Link>
                <button
                  onClick={() => onDeleteClick(job.id)}
                  className="w-full text-gray-900 rounded-full px-4 py-2 hover:bg-gray-100 hover:text-purple-600 border bg-white dark:bg-gray-900 dark:text-gray-300 dark:hover:text-gray-100 dark:hover:bg-gray-600 dark:border-gray-500 mt-3"
                >
                  حذف
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

const jobLoader = async ({ params }) => {
  const res = await fetch(
    `https://my-json-server.typicode.com/mohbabaeee/karyab-react/jobs/${params.id}`
  );
  const data = await res.json();
  return data;
};

export { JobPage as default, jobLoader };
