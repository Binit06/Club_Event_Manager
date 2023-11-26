import AboutUs from "@/components/aboutus";
import FaQ from "@/components/faqs";
import TypeWriterComponent from "@/components/main";

export default async function Home() {
  return (
    <div className="flex flex-col w-full">
      <TypeWriterComponent />
      <AboutUs />
      <FaQ />
      <div>
      <div className="footer flex flex-row">
          <div>
            <div className="wave">
              <h2 className="line_title">Amphibits</h2>
              <p>To inspire and empower individuals to become proficient in coding through collaborative learning and innovative resources.</p>
            </div>
          </div>
          <div>
            <div className="wave">
              <h2 className="line_title">Contact Us</h2>
              <p>Amphibits</p>
            </div>
          </div>
          <div>
            <div className="wave">
            <h2 className="line_title">FeedBack</h2>
            <button>Feedback</button>
            </div>

          </div>
      </div>
      </div>
    </div>
  )
}
