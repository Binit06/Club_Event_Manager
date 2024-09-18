import Calender from "@/components/Calendar";
import React from "react"
import 'react-calendar/dist/Calendar.css'
import getEvents from "@/actions/getEvents";
import getFormElements from "@/actions/getFormElements";
import getRegistrations from "@/actions/getRegistration";
import getOptionElements from "@/actions/getOptionsElements";
import getClubsElement from "@/actions/getClubs";
import getStarredElements from "@/actions/getStarredEvents";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers"
import { Events } from "@/types";
import getEventsById from "@/actions/getEventsById";

export const revalidate = 0

const Schedule = async () => {
    const events = await getEvents()
    const forms = await getFormElements()
    const registers = await getRegistrations()
    const options = await getOptionElements()
    const clubs = await getClubsElement()
    const starredEvents = await getStarredElements()
    const starred : Events[] = [];
    starredEvents.map(async (value) => {
        const data = await getEventsById(value.id.toString());
        starred.push(data[0])
        console.log(data)
    })
    return(
        <div>
            <Calender user_events={events} forms_got={forms} register_got={registers} fetched_options={[]} fetched_clubs={[]} fetched_starred_events={starred}/>
        </div>
    )
}

export default Schedule
