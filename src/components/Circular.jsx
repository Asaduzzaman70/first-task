import { GiNotebook } from "react-icons/gi";
import { PiClipboardTextFill } from "react-icons/pi";
import Calendar from "./Calendar";

const Circular = () => {

  const circularData = [
    {
      title: "Academic Calendar 2025",
      link: "https://unicresult.info/#",
    },
    {
      title: "Denouncing Terrorism",
      link: "https://unicresult.info/#",
    },
    {
      title: "Denouncing Terrorism",
      link: "https://unicresult.info/#",
    },
    {
      title: "Academic Calendar 2025",
      link: "https://unicresult.info/#",
    },
    {
      title: "Academic Calendar 2025",
      link: "https://unicresult.info/#",
    },
  ];

  const noticeData = [
    {
      title: "সংশ্লিষ্ট সকলের অবগতির জন্যঃ",
      link: "https://unicresult.info/#",
      description: "১৯৯৫ ইং সাল হতে ২০১০  সাল পর্যন্ত যে সকল শিক্ষার্থীগণ ” দি ইউনিভার্সিটি অব কুমিল্লা ” থেকে  কৃতকার্য হয়েছেন, বিশ্ববিদ্যালয়ের ওয়েবসাইটে তাদের একাডেমীক তথ্য সমূহ আপলোড করার সিদ্ধান্ত একাডেমীক কাউন্সিল কর্তৃক গৃহীত হয়েছে ।  বর্ণিত সময়ে কৃতকার্য হওয়া শিক্ষার্থীগণদেরকে তাদের প্রয়োজনীয় কাগজপত্র (রেজিস্ট্রেশন কার্ড, ট্রান্সক্রিপ্ট, প্রভেশনাল সার্টিফিকেট, টেস্টিমোনিয়াল ইত্যাদি) নিয়ে বিশ্ববিদ্যালয়ের একাডেমিক ক্যাম্পাসের কন্ট্রোলার ডিভিশনে  (৯/বি, পলওয়েল কারনেশন, লেভেল-০৫, সেক্টর- ০৮, উত্তরা ঢাকায়) যোগাযোগ করার জন্য বলা হলো । – প্রো- ভাইস চ্যান্সেলর (ডেজিগনেটেড) ও জেনারেল সেক্রেটারী, ইউনিক।",
    },
    {
      title: "সংশ্লিষ্ট সকলের অবগতির জন্যঃ",
      link: "https://unicresult.info/#",
      description: "১৯৯৫ ইং সাল হতে ২০১০  সাল পর্যন্ত যে সকল শিক্ষার্থীগণ ” দি ইউনিভার্সিটি অব কুমিল্লা ” থেকে  কৃতকার্য হয়েছেন, বিশ্ববিদ্যালয়ের ওয়েবসাইটে তাদের একাডেমীক তথ্য সমূহ আপলোড করার সিদ্ধান্ত একাডেমীক কাউন্সিল কর্তৃক গৃহীত হয়েছে ।  বর্ণিত সময়ে কৃতকার্য হওয়া শিক্ষার্থীগণদেরকে তাদের প্রয়োজনীয় কাগজপত্র (রেজিস্ট্রেশন কার্ড, ট্রান্সক্রিপ্ট, প্রভেশনাল সার্টিফিকেট, টেস্টিমোনিয়াল ইত্যাদি) নিয়ে বিশ্ববিদ্যালয়ের একাডেমিক ক্যাম্পাসের কন্ট্রোলার ডিভিশনে  (৯/বি, পলওয়েল কারনেশন, লেভেল-০৫, সেক্টর- ০৮, উত্তরা ঢাকায়) যোগাযোগ করার জন্য বলা হলো । – প্রো- ভাইস চ্যান্সেলর (ডেজিগনেটেড) ও জেনারেল সেক্রেটারী, ইউনিক।",
    },
  ];

  return (
    <div className="bg-white h-full p-[30px] space-y-10">
      {/* CIRCULARS Section */}
      <section className="border-red-600 bg-slate-50 border-[3px] p-10 rounded-md">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold">CIRCULARS</h2>
          <div className="bg-slate-300 w-full h-[1px]"></div>
        </div>
        <div className="space-y-4 mt-14">
          {circularData.map((item, index) => (
            <a
              href={item.link}
              key={index}
              className="flex items-center gap-3 text-xl hover:text-blue-700 transition-all duration-200"
            >
              <GiNotebook />
              <h2>{item?.title}</h2>
            </a>
          ))}
        </div>
      </section>
      {/* NOTICES Section */}
      <section className="border-red-600 bg-slate-50 border-[3px] p-10 rounded-md">
        <div>
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold">NOTICES</h2>
            <div className="bg-slate-300 w-full h-[1px]"></div>
          </div>
          <div className="space-y-10 mt-14">
            {noticeData.map((item, index) => (
              <div key={index} className="flex flex-row">
                <div className="text-2xl px-2">
                  <PiClipboardTextFill />
                </div>
                <div>
                  <a
                    href={item.link}
                    className="flex items-center gap-3 text-xl hover:text-blue-700 transition-all duration-200"
                  >
                    <h2>{item?.title}</h2>
                  </a>
                  <h2 className="text-base text-justify mt-5">{item?.description}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Calendar Section */}
      <section className="border-red-600 bg-slate-50 border-[3px] p-10 rounded-md">
        <Calendar />
      </section>
    </div>
  );
};

export default Circular;