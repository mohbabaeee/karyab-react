import { Link } from "react-router-dom";

const HomeCards = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto  animate-slidein800 opacity-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <div className="p-6 rounded-lg shadow-sm text-gray-900 border bg-gray-50 dark:bg-gray-800 dark:border-gray-500 dark:text-white">
            <h2 className="text-2xl font-bold">کارجو هستی؟</h2>
            <p className="mt-2 mb-4">در سریع‌ترین زمان شغل موردنظرتو پیدا کن</p>
            <div className="text-left">
              <Link
                to="/jobs"
                className="inline-block bg-purple-700 text-white rounded-lg px-4 py-2 hover:bg-purple-500"
              >
                مشاهده آگهی ها
              </Link>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-gray-900 border dark:bg-gray-800 dark:border-gray-500 dark:text-white">
            <h2 className="text-2xl font-bold">کارفرما هستی؟</h2>
            <p className="mt-2 mb-4">در کمتر از ۵ دقیقه آگهی خودتو بساز</p>
            <div className="text-left">
              <Link
                to="/addJob"
                className="inline-block text-gray-900 rounded-lg px-4 py-2 hover:bg-gray-100 hover:text-purple-600 border bg-white dark:bg-gray-900 dark:text-gray-300 dark:hover:text-gray-100 dark:hover:bg-gray-600 dark:border-gray-500"
              >
                درج آگهی استخدام
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
