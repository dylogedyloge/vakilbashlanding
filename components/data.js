import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "خدمات و مزایای وکیل باشی",
  desc: "استفاده از مزایای هوش مصنوعی برای کاربرانی که متخصص هوش مصنوعی نیستند مشکل است. وکیل باشی این چالش را  در زمینه تولید محتوا حل کرده است و به کاربران با هر سطح تخصصی اجازه می‌دهد از این فناوری انقلابی استفاده کنند",
  image: benefitOneImg,
  bullets: [
    {
      title: "افزایش سئوی وبسایت",
      desc: "در کوتاهترین زمان و با کمترین هزینه سئوی وبسایت خود را بالا ببرید",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Iاستفاده آسان",
      desc: "تنها با چند دستور ساده مقاله کامل خود را  دریافت کنید",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "پلن‌های متنوع",
      desc: "بر اساس نیاز کسب و کار پلن خود را انتخاب کنید و در هزینه صرفه‌جویی کنید",
      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  title: "همیشه  می‌توانید از وکیل باشی استفاده کنید",
  desc: "مشتریان ما به سرعت کسب و کار خود را رشد می دهند",
  image: benefitTwoImg,
  bullets: [
    {
      title: "استفاده با گوشی موبایل",
      desc: "وکیل باشی طوری طراحی شده است که شما برای تولید مقاله لازم نیست حتماً پشت میز کار خود باشید. می‌توانید با گوشی موبایل خود هم تولید مقاله کنید",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "امکان تمدید و ارتقای سرویس",
      desc: "پس از خریداری یک پلن می‌توانید در هر زمان با توجه به نیاز خود پلن خود را عوض کنید و یا سرویس خود را تمدید کنید",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "امکان کنسل کردن سرویس",
      desc: "در هر مرحله‌ای می‌توانید سرویس خود را کنسل کنید و وجه خود را با توجه به قوانین بازگشت وجه دریافت کنید",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
