"use client";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface faqscomponentprops {
    data: any;
}
const FaQ_Comp: React.FC<faqscomponentprops> = ({data}) => {
    const [isClicked, setIsClicked] = useState(true)
    const handleOnClick = () => {
        setIsClicked(!isClicked)
    }
    return(
        <div>
            <div className="accordion border-l-4 border-[#ff5722]">
                <div className="accordian-panel flex flex-col gap-y-2">
                    <h2 id="panel1-title" onClick={handleOnClick} className="flex flex-row justify-between">
                    <button className="accordion-trigger text-xl" aria-expanded="true" aria-controls="accordion1-content">{data.question}</button>
                    <button><AiOutlineClose size={15} className={`${isClicked ? "rotate-45" : "rotate-0"} transition-all`}/></button>
                    </h2>
                    <div className="accordion-content" role="region" aria-labelledby="panel1-title" aria-hidden={isClicked} id="panel1-content">
                        <div>
                            <p>{data.answer}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaQ_Comp