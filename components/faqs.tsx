"use client";

import { useState } from "react";
import FaQ_Comp from "./faqscomponent";

const FaQ = () => {
  const [isClicked, setIsClicked] = useState<Array<boolean>>(
    new Array(6).fill(false)
  );

  const handleOnClick = (index: number) => {
    const updateclicked = [...isClicked];
    updateclicked[index] = !updateclicked[index];
    setIsClicked(updateclicked);
  };

  const FaqData = [
    {
      question: "What is Clubify?",
      answer:
        "Clubify is a platform designed to help students discover and manage campus club activities while providing club admins with tools to streamline operations."
    },
    {
      question: "Is Clubify free to use?",
      answer:
        "Yes! Clubify is completely free for both students and club administrators."
    },
    {
      question: "How can I join a club using Clubify?",
      answer:
        "You can browse available clubs on the platform and click on the 'Join' button. The club admin will then review and approve your request."
    },
    {
      question: "Can I create my own club on Clubify?",
      answer:
        "Absolutely! Simply sign up as a club admin and follow the steps to create a new club, add details, and start organizing events."
    },
    {
      question: "How do reminders work in Clubify?",
      answer:
        "Clubify automatically sends reminders for upcoming events and important dates via email and in-app notifications to keep everyone updated."
    },
    {
      question: "Is my data secure on Clubify?",
      answer:
        "We take privacy seriously. All your information is stored securely and used only to enhance your club experience."
    }
  ];

  return (
    <div className="w-full h-fit py-9 flex flex-col gap-y-4 px-8">
      <div className="w-full flex justify-center text-3xl relative title_new py-3 text-white">
        We're Here to Help
      </div>
      <div className="bg-black px-4 flex flex-col gap-y-4 mt-2">
        {FaqData.map((faq, index) => (
          <FaQ_Comp
            data={faq}
            key={index}
            onClick={() => handleOnClick(index)}
            isOpen={isClicked[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default FaQ;
