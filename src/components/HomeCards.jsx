import { Link } from "react-router-dom";

const HomeCards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">کارجو هستی؟</h2>
            <p className="mt-2 mb-4">در سریع‌ترین زمان شغل موردنظرتو پیدا کن</p>
            <div className="text-left">
              <Link
                to="/jobs"
                className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
              >
                مشاهده آگهی ها
              </Link>
            </div>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">کارفرما هستی؟</h2>
            <p className="mt-2 mb-4">در کمتر از ۵ دقیقه آگهی خودتو بساز</p>
            <div className="text-left">
              <Link
                to="/addJob"
                className="inline-block bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600"
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
