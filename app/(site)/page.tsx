import AboutUs from "@/components/aboutus";
import FaQ from "@/components/faqs";
import TypeWriterComponent from "@/components/main";

export default async function Home() {
  return (
    <div className="flex flex-col w-full">
      <TypeWriterComponent />
      <AboutUs />
      <FaQ />
    </div>
  )
}
