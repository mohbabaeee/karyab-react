import { Link } from "react-router-dom";

const ViewAll = () => {
  return (
    <section className="flex py-10 px-6 dark:bg-gray-900 justify-center">
      <Link
        to="/jobs"
        className="block bg-purple-600 text-white text-center py-4 px-6 rounded-xl hover:bg-purple-400 w-72"
      >
        مشاهده همه آگهی ها
      </Link>
    </section>
  );
};

export default ViewAll;
