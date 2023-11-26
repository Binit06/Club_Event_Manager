"use client";

import useProfileModel from "@/hooks/useProfileModel";
import ModalProfile from "./ModalProfile";
import { Users } from "@/types";
import useLoadImage from "@/hooks/useLoadImage";
import { useUser } from "@/hooks/useUser";

const ProfileModel = () => {
    const {onClose, isOpen} = useProfileModel();
    const onChange = (open: boolean) => {
        if(!open) {
            onClose()
        }
    }
    
    return(
        <ModalProfile
        title="Welcome Back"
        description="Login to your account"
        isOpen={isOpen}
        onChange={onChange}
        >
            Profile Content
        </ModalProfile>
    )
}

export default ProfileModel