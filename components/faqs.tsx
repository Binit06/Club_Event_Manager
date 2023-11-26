"use client";

import { useState } from "react"
import FaQ_Comp from "./faqscomponent";

const FaQ = () => {

    const [isClicked, setIsClicked] = useState<Array<boolean>>([false, false, false, false]);

    const handleOnClick = (index: any) => {
    const updateclicked = [...isClicked];
    updateclicked[index] = !isClicked[index];
    setIsClicked(updateclicked); // Pass the updated array to setIsClicked
    };

    const FaqData = [
        {
            question: "This is the first question",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quod facilis exercitationem natus eius modi sequi earum voluptate saepe tempore odio temporibus maiores, quaerat debitis nostrum consequatur? Quo, eaque pariatur."
        },
        {
            question: "This is the second question",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sed unde provident exercitationem, accusamus, dolorum nostrum aliquam veniam dolore ipsam quidem esse cum maiores corporis repellendus dolor veritatis consequatur error?"
        },
        {
            question: "This is the third question",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sed unde provident exercitationem, accusamus, dolorum nostrum aliquam veniam dolore ipsam quidem esse cum maiores corporis repellendus dolor veritatis consequatur error?"
        },
        {
            question: "This is the fourth question",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sed unde provident exercitationem, accusamus, dolorum nostrum aliquam veniam dolore ipsam quidem esse cum maiores corporis repellendus dolor veritatis consequatur error?"
        } 
    ]

    return(
        <div className="w-full h-fit py-9 flex flex-col gap-y-4 px-8">
            <div className="w-full flex justify-center text-3xl relative title_new py-3 text-white">
                We're Here to Help
            </div>
            <div className="bg-black px-4 flex flex-col gap-y-4 mt-2">
                {FaqData.map((faq, index) => (
                    <FaQ_Comp data={faq} key={index}/>
                ))}
            </div>
        </div>
    )
}
export default FaQ