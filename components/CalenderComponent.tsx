import { generateDate, months } from "@/hooks/calender"
import { useState } from "react";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";

interface CalenderComponentProps {
    onclick: (date: any) => void;
    months_new: string;
    year: string;
}

const CalenderComponent: React.FC<CalenderComponentProps> = ({
    onclick,
    months_new,
    year
}) => {
    const days = ["S", "M", "T", "W", "T", "F", "S"];
    const [month, setMonth] = useState(parseInt(months_new))
    const [yearnew, setYearnew] = useState(parseInt(year))
    const [selectDate, setSelectDate] = useState(new Date())

    const handleDateClick = (values: any) => {
        setMonth(values.getMonth())
        setYearnew(values.getFullYear())
    }
    return(
        <div className="w-full h-fit bg-[#10151c] p-4 rounded-lg">
            <div className="flex justify-between items-center px-4">
                <h1 className="select-none font-semibold">
                    {months[month]}, {yearnew}
                </h1>
                <div className="flex gap-10 items-center ">
                    <RxCaretLeft
                        className="w-5 h-5 cursor-pointer hover:scale-105 transition-all text-white"
                        onClick={() => {
                            if(month === 0){
                                setMonth(11)
                                setYearnew(yearnew-1)
                            } else {
                                setMonth(month - 1)
                            }
                        }}
                    />
                    <h1
                        className="cursor-pointer hover:scale-105 transition-all select-none"
                        onClick={() => {
                            setSelectDate(new Date())
                            setMonth(new Date().getMonth())
                            setYearnew(new Date().getFullYear())
                            handleDateClick(new Date())
                            onclick(new Date())
                        }}
                    >
                        Today
                    </h1>
                    <RxCaretRight
                        className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
                        onClick={() => {
                            if(month === 11){
                                setMonth(0)
                                setYearnew(yearnew+1)
                            } else {
                                setMonth(month+1)
                            }
                        }}
                    />
                </div>
            </div>
            <div className="grid grid-cols-7 ">
                {days.map((day, index) => {
                    return (
                        <h1
                            key={index}
                            className="text-sm text-center h-14 w-14 grid place-content-center text-gray-500 select-none"
                        >
                            {day}
                        </h1>
                    );
                })}
            </div>

            <div className=" grid grid-cols-7 ">
                {generateDate(yearnew, month).map(
                    ({ current_month, date, today }, index) => {
                        return (
                            <div
                                key={index}
                                className={`p-2 text-center h-14 grid place-content-center text-sm`}
                                onClick={() => {handleDateClick(date); onclick(date)}}
                            >
                                <h1
                                    className={`h-10 w-10 rounded-full grid place-content-center hover:bg-indigo-500 hover:text-white transition-all cursor-pointer select-none ${current_month ? "text-white": "text-neutral-600"} ${today? "bg-red-600 text-white": ""} ${selectDate.toDateString() === date.toDateString() ? "bg-indigo-500 text-white": ""}`}
                                    onClick={() => {setSelectDate(date); onclick(date)}}
                                >
                                    {date.getDate()}
                                </h1>
                            </div>
                        );
                    }
                )}
            </div>
        </div>
    )
}

export default CalenderComponent