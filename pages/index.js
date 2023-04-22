import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  return (
    <div dir="rtl">
      <Head>
        <title>وکیل باشی</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/img/logo.svg" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="مزایای وکیل باشی"
        title=" چرا باید از وکیل باشی استفاده کنید؟"
      >
        اگر می‌خواهید در زمان کمتر و با صرف هزینه پایین‌تر تولید محتوا کنید و
        وبسایت خود را برای موتورهای جستجو بهینه کنید تا در صفحات اول جستجو قرار
        بگیرید وکیل باشی انتخاب درستی است
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="نحوه استفاده"
        title="چگونه از وکیل باشی استفاده کنم؟"
      >
        استفاده از وکیل باشی برای تولید مقاله بسیار ساده است. در این ویدیو
        می‌توانید مراحل تولید یک مقاله و در نهایت دانلود آن را ببینید
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="نظر مشتریان"
        title="مشتریان درباره وکیل باشی چه می‌گویند؟"
      >
        ما مفتخریم که مشتریان وکیل باشی از آن رضایت داشته اند. در اینجا گزیده‌ای
        از نظرات آن‌ها را می‌بینید
      </SectionTitle>
      <Testimonials />
      <SectionTitle title="سؤالات متداول">
        ممکن است یکی از این سؤالات برای شما پیش آمده باشد
      </SectionTitle>
      <Faq />
      {/* <Cta /> */}
      <Footer />
      <PopupWidget />
    </div>
  );
}
