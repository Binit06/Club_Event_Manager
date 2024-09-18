import { starred_events } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";


const getStarredElements = async (): Promise<starred_events[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    })
    console.log("Started...")

    const {
        data: sessionData,
        error: sessionError
    } = await supabase.auth.getSession();


    const { data, error } = await supabase
        .from('starred_events')
        .select('*')
        .eq('user_id', sessionData.session?.user.id)

    console.log(data as any)
    if (error) {
        console.log(error)
    }
    console.log(data)

    return data as any || []
}

export default getStarredElements
