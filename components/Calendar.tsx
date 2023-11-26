"use client";

import { useState } from 'react'
import Datepicker from "react-tailwindcss-datepicker";
import Box from "./Box";
import ScheduleContent from "@/app/schedule/components/ScheduleComponent";
import { Clubs, Events, Forms, Options, Registration } from "@/types";
import EventItems from "./EventItems";
import { generateDate, months } from '@/hooks/calender';
import { RxCaretLeft, RxCaretRight } from "react-icons/rx"
import Reminder from './Reminder';
import ReminderItems from './ReminderItems';
import CalenderComponent from './CalenderComponent';

interface CalenderProps {
  user_events: Events[];
  forms_got: Forms[];
  register_got: Registration[];
  fetched_options: Options[];
  fetched_clubs: Clubs[]
}
const Calender: React.FC<CalenderProps> = ({
  user_events,
  forms_got,
  register_got,
  fetched_options,
  fetched_clubs
}) => {
  console.log(fetched_options.length)
  const [datselectDate, setdatSelectDate] = useState({
    startDate: null,
    endDate: null
  })
  let [filteredEvents, setFilteredEvents] = useState<Events[]>([]);
  const handleOnClick = (values: any) => {
    setMonth(new Date(values?.startDate).getMonth())
    setYearnew(new Date(values?.startDate).getFullYear())
    console.log("Started")
    let SelectedDate = new Date(values?.startDate);
    console.log(SelectedDate)
    setdatSelectDate(values)
    const adjustedDate = SelectedDate;
    const SelectedEvents = user_events.filter((items) => {
        if(items.Event_Start_Data === items.Event_End_Data && adjustedDate.toISOString() === new Date(items.Event_Start_Data).toISOString()){
          console.log(adjustedDate.toISOString())
          console.log(new Date(items.Event_Start_Data).toISOString())
          console.log("Entered into the correct sequence")
          return true
        }
        const startCheck = adjustedDate && new Date(items.Event_Start_Data) <= adjustedDate;
        const EndCheck = adjustedDate && new Date(items.Event_End_Data) >= adjustedDate;
        return adjustedDate && startCheck && EndCheck;
    });
    setFilteredEvents(SelectedEvents);
    filteredEvents = SelectedEvents;
    console.log(filteredEvents);
    console.log(filteredEvents === null);
    console.log("Event Added")
  }

  const handleClickMain = (value: any) => {
    setdatSelectDate({startDate: null, endDate:null})
    console.log("Entered into Date Section")
    const selectedDate = value
    console.log(selectedDate)
    const SelectedEvents = user_events.filter((items) => {
        if(items.Event_Start_Data === items.Event_End_Data && selectedDate.toDateString() === new Date(items.Event_Start_Data).toDateString()){
            console.log(selectedDate.toDateString())
            console.log(new Date(items.Event_Start_Data).toDateString())
            console.log("Entered into the correct sequence")
            return true
        }
        const startCheck = selectedDate && new Date(items.Event_Start_Data).setHours(0, 0, 0) <= selectedDate;
        const EndCheck = selectedDate && new Date(items.Event_End_Data).setHours(0, 0, 0) >= selectedDate;
        return selectedDate && startCheck && EndCheck;
    })
    console.log(SelectedEvents)
    setFilteredEvents(SelectedEvents);
    filteredEvents = SelectedEvents
  }
    const [month, setMonth] = useState(new Date().getMonth())
    const [yearnew, setYearnew] = useState(new Date().getFullYear())
    const [selectDate, setSelectDate] = useState(new Date())
  return(
    <div className="w-full h-fit flex flex-row gap-x-2">
        <div className="w-[30%] h-full">
            <CalenderComponent 
                onclick={(date) => handleClickMain(date)}
                months_new={month.toString()}
                year={yearnew.toString()}
                />
        </div>
        <div className="px-2 flex flex-col gap-y-4 h-fit new:px-0 new:visible new:w-full medium:w-full medium:visible medium:px-0 w-[45%] new:flex-col-reverse new:gap-y-2 medium:flex medium:flex-col-reverse">
            <div className="py-4 h-fit w-full rounded-lg bg-[#10151c] medium:w-full new:visible gap-y-2">
                <EventItems />
                <Box className="w-full h-fit flex flex-col gap-y-2 max-h-[280px] overflow-auto scrollbar new:w-full">
                    <ScheduleContent allow_register={true} filtered_events={user_events.filter((date) => new Date(date.Event_Start_Data) > new Date())} form_details={forms_got} registration_got={register_got} fetchedOption={fetched_options} fetchedClubs={fetched_clubs}/>
                </Box>
            </div>
            <Box className="bg-[#10151c] rounded-lg px-0 py-2">
                <div className="pt-3 pb-1 bg-[#10151c] px-4 rounded-lg w-full">
                    Events
                </div>
            <div className="w-full bg-[#10151c] px-0 rounded-lg flex flex-col py-3 new:w-full max-h-[250px] overflow-auto scrollbar">
                {filteredEvents? (
                <Box className="w-full h-fit new:w-full">
                    <ScheduleContent filtered_events={filteredEvents} allow_register={true} form_details={forms_got} registration_got={register_got} fetchedOption={fetched_options} fetchedClubs={fetched_clubs}/>
                </Box>
                ):(
                <div>

                </div>
                )}
            </div>
            </Box>
        </div>
        <div className="flex flex-col gap-y-3 w-1/4 medium:w-full">
            <div className="py-2 h-fit w-full rounded-lg bg-[#10151c] flex flex-col gap-y-4 px-2 new:w-full medium:w-full basic:w-full">
                <Box className="w-full h-fit text-white">
                    Starred Events
                </Box>
                <Box className="w-full h-fit rounded-lg bg-[rgba(16,21,26,0.2)] text-neutral-400 flex flex-col gap-y-2 max-h-[280px] overflow-auto scrollbar py-1">
                    <ScheduleContent allow_register={false}  filtered_events={user_events} form_details={forms_got} registration_got={register_got} fetchedOption={fetched_options} fetchedClubs={fetched_clubs}/>
                </Box>
            </div>
            <div className="py-4 w-full rounded-lg bg-[#10151c] flex flex-col gap-y-3">
                <Box className="w-full h-fit rounded-lg bg-[rgba(16,21,26,0.2)] px-5 text-white">
                    Reminders
                </Box>
                <ReminderItems />
                <div className="px-5 w-full h-fit scrollbar max-h-[150px] flex flex-col gap-y-2 overflow-auto">
                    <Reminder />
                    <Reminder />
                    <Reminder />
                    <Reminder />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Calender