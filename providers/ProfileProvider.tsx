"use client";

import ProfileModel from "@/components/ProfileModel";
import React, { useEffect, useState } from "react";


const ProfileProvider = () => {
    const [isMounted, setIsMounted] = useState(false)
    
    useEffect(() => {
        setIsMounted(true)
    }, [])

    if(!isMounted) {
        return null
    }
    // console.log("The form got is + " + forms)
    return (
        <div className="h-fit">
            <ProfileModel />
        </div>
    )
}

export default ProfileProvider;