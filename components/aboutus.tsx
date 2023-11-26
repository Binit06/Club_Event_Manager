const AboutUs = () => {
    return(
        <main id="main" className="">
            <section id="about" className="flex justify-center items-center">
                <div className="container relative z-8 px-36 new:px-2 medium:px-4 w-[100%] flex flex-col gap-y-6">
                    <header className="section-header flex flex-col gap-y-5 w-full">
                        <h3 className="title font-sans text-[#EEEEEE] text-[32px] uppercase text-center font-bold relative pb-[15px] new:text-[26px]">About Us</h3>
                        <p className="text-center text-[20px] font-sans pb-[30px] text-[#DDDDDD]">Clubify will provide club admins a one stop solution to easily manage events and at the same time would provide students a destination to their awesome club experience.</p>
                    </header>   

                    <div className="row px-[30px] gap-10 medium:grid xl:grid medium:grid-rows-3 xl:grid-cols-3">
                        <div className="col-md-6 col-lg-4">
                            <div className="box p-[30px] relative rounded-xl mt-[0px] ml-[10px] mr-[10px] mb-[40px] text-center overflow-hidden">
                                <div className="icon bg-[#FCEEF3] mt-0 mr-auto mb-[15px] ml-auto pt-[12px] inline-block text-center w-[60px] h-[60px]"><i className="ion-ios-paper-outline text-[#FF689B] text-[36px] leading-none"></i></div>
                                <h4 className="title font-serif font-bold text-[18px] mb-[15px] text-[#FF5722]">Club Management</h4>
                                <p className="description font-sans text-[18px] leading-7 mb-0 text-center text-[#EEEEEE]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic mollitia voluptate accusantium facere. Aspernatur ullam omnis aperiam minima. Optio numquam quibusdam voluptate officia </p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="box p-[30px] relative rounded-xl mt-[0px] ml-[10px] mr-[10px] mb-[40px] text-center overflow-hidden">
                                <div className="icon bg-[#FCEEF3] mt-0 mr-auto mb-[15px] ml-auto pt-[12px] inline-block text-center w-[60px] h-[60px]"><i className="ion-ios-speedometer-outline text-[#14C2FE] text-[36px] leading-none" ></i></div>
                                <h4 className="title font-serif font-bold text-[18px] mb-[15px] text-[#FF5722]">Reminders</h4>
                                <p className="description font-sans text-[18px] leading-7 mb-0 text-center text-[#EEEEEE]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic mollitia voluptate accusantium facere. Aspernatur ullam omnis aperiam minima. Optio numquam quibusdam voluptate officia </p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 medium:col-span-2 medium:w-1/2">
                            <div className="box p-[30px] relative rounded-xl mt-[0px] ml-[10px] mr-[10px] mb-[40px] text-center overflow-hidden hover:border hover:border-[#FF5722]">
                                <div className="icon bg-[#FCEEF3] mt-0 mr-auto mb-[15px] ml-auto pt-[12px] inline-block text-center w-[60px] h-[60px]"><i className="ion-ios-clock-outline text-[#8660FE] text-[36px] leading-none"></i></div>
                                <h4 className="title font-serif font-bold text-[18px] mb-[15px] text-[#FF5722]">Time Management</h4>
                                <p className="description font-sans text-[18px] leading-7 mb-0 text-center text-[#EEEEEE]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic mollitia voluptate accusantium facere. Aspernatur ullam omnis aperiam minima. Optio numquam quibusdam voluptate officia </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    )
}

export default AboutUs;