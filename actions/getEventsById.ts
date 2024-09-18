import { Events } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";


const getEventsById = async (id: string) : Promise<Events[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    })

    const {data, error} = await supabase
        .from('events')
        .select('*')
        .eq('event_id', id)
    
    if(error){
        console.log(error)
    }

    return data as any || []
}

export default  getEventsById