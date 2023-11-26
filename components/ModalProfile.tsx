import useAuthModel from "@/hooks/useAuthModel";
import * as Dialog from "@radix-ui/react-dialog";
import { IoMdClose } from "react-icons/io"

interface ModalProfileProps {
    isOpen: boolean;
    onChange: (open: boolean) => void;
    title: string;
    description: string;
    children: React.ReactNode;
}
const ModalProfile: React.FC<ModalProfileProps> = ({
    isOpen,
    onChange,
    title,
    description,
    children
}) => {
    const authModel = useAuthModel()
    return(
        <div>
            <Dialog.Root
            open={isOpen}
            defaultOpen={isOpen}
            onOpenChange={onChange}
            >
                <Dialog.Portal>
                    <Dialog.Overlay 
                    className="
                    fixed
                    inset-0
                    "
                    />
                    <Dialog.Content
                        className="
                        fixed
                        drop-shadow-md
                        top-[0%]
                        left-[1%]
                        max-h-full
                        h-full
                        md:h-auto
                        md:max-h-[85vh]
                        w-full
                        md:w-[90vw]
                        md:max-w-[450px]
                        translate-x-[0%]
                        translate-y-[50%]
                        rounded-md
                        bg-[#10151c]
                        p-[25px]
                        focus:outline-none
                        overflow-auto
                        scrollbar
                        shadow-lg
                        shadow-black
                        "
                    >
                        <Dialog.Title
                        className="
                        text-xl
                        text-center
                        font-bold
                        mb-4
                        "
                        >
                            {title}
                        </Dialog.Title>
                        <Dialog.Description className="
                        mb-5
                        text-sm
                        loading-normal
                        text-center
                        ">
                            {description}
                        </Dialog.Description>
                        <div>
                            {children}
                        </div>
                        <Dialog.Close asChild>
                            <button className="
                            text-neutral-400
                            hover:text-white
                            absolute
                            top-[10px]
                            right-[10px]
                            inline-flex
                            h-[25px]
                            w-[25px]
                            appearance-none
                            items-center
                            justify-center
                            rounded-full
                            focus:outline-none
                            "
                            onClick={authModel.onClose}>
                                <IoMdClose />
                            </button>
                        </Dialog.Close>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    )
}

export default ModalProfile