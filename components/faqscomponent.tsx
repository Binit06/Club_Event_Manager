"use client";
import { AiOutlineClose } from "react-icons/ai";

interface FaqComponentProps {
  data: {
    question: string;
    answer: string;
  };
  isOpen: boolean;
  onClick: () => void;
}

const FaQ_Comp: React.FC<FaqComponentProps> = ({ data, isOpen, onClick }) => {
  return (
    <div>
      <div className="accordion border-l-4 border-[#ff5722] px-3 py-2 bg-[#1a1a1a] rounded-md">
        <div className="accordion flex flex-col gap-y-2">
          <h2
            id="panel-title"
            onClick={onClick}
            className="flex flex-row justify-between items-center cursor-pointer"
          >
            <button
              className="accordion-trigger text-xl text-white text-left"
              aria-expanded={!isOpen}
              aria-controls="accordion-content"
            >
              {data.question}
            </button>
            <button>
              <AiOutlineClose
                size={18}
                className={`text-white ${
                  isOpen ? "rotate-0" : "rotate-45"
                } transition-transform duration-200`}
              />
            </button>
          </h2>
          <div
            className={`accordion-content text-gray-300 text-sm transition-all duration-300 overflow-hidden ${
              isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
            role="region"
            aria-labelledby="panel-title"
            aria-hidden={!isOpen}
            id="accordion-content"
          >
            <p className="mt-1">{data.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaQ_Comp;
