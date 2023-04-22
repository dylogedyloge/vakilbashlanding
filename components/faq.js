import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Faq() {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-blue-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "آیا استفاده از وکیل باشی رایگان است؟",
    answer:
      "شما می‌توانید از پلن رایگان استفاده کنید و تا سه مقاله تولید کنید. پس از آن با توجه به نیاز کسب و کارتان یکی از پلن‌های برنزی نقره‌ای یا طلایی را انتخاب کنید",
  },
  {
    question:
      "آیا می‌توانم آزادانه از مقالات تولید شده وکیل باشی در وبسایت خودم استفاده کنم؟",
    answer:
      "بله می‌توانید. مقالات تولید شده در وکیل باشی توسط هوش مصنوعی تولید می‌شود و حق کپی رایت ندارد",
  },
  {
    question: "قوانین بازگشت وجه و فسخ قرارداد وکیل باشی چیست؟ ",
    answer:
      "اگر شما در هر مرحله‌ای مایل به کنسل کردن پلن خریداری شده‌تان باشید می‌توانید درخواست کنسل کردن سرویس بدهید. پس از آن کارشناسان ما با شما تماس می‌گیرند و شما را راهنمایی خواهند کرد",
  },
  {
    question: "آیا وکیل باشی خدمات پشتیبانی ارائه می‌دهد؟",
    answer:
      "بله شما می‌توانید با شماره تلفن پشتیبانی تماس بگیرید و یا به وسیله سامانه چت وکیل باشی با همکاران پشتیبانی ما در تماس باشید",
  },
];
