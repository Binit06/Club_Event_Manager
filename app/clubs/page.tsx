"use client";

import Clubs from "@/components/Clubs";
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

const clubs = () => {
    const particlesInit = async (main: any) => {
        await loadFull(main);
    };
    return (
        <>
        <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push"
              },
              onHover: {
                enable: true,
                mode: "grab"
              },
              resize: true
            },
            modes: {
              push: {
                quantity: 4
              },
              repulse: {
                distance: 200,
                duration: 0.4
              }
            }
          },
          particles: {
            color: {
              value: "#263784"
            },
            links: {
              color: "#6366F1",
              distance: 200,
              enable: true,
              opacity: 0.5,
              width: 1
            },
            collisions: {
              enable: true
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce"
              },
              random: false,
              speed: 2,
              straight: false
            },
            number: {
              density: {
                enable: true,
                area: 800
              },
              value: 40
            },
            opacity: {
              value: 0.5
            },
            shape: {
              type: "circle"
            },
            size: {
              value: { min: 1, max: 5 }
            }
          },
          detectRetina: true
        }}
      />
            <div className="
            grid 
            sm:grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-3
            2xl:grid-cols-4
            px-14 
            py-3 
            overflow-hidden 
            gap-12 
            justify-center">
                <Clubs
                  ClubName="OSS Club"
                  ClubFullName="Open Source Software Club"
                  ClubDescription="We promote open-source development by encouraging students to contribute to public repositories, host hackathons, and collaborate on real-world tech projects."
                  ClubImage="/images/oss.svg"
                />
                <Clubs
                  ClubName="DDQ Club"
                  ClubFullName="Design, Debate & Quiz Club"
                  ClubDescription="A creative space for students to showcase their talent in graphic design, engage in thoughtful debates, and test their knowledge through quizzes and competitions."
                  ClubImage="/images/DDQ_Logo.png"
                />
                <Clubs
                  ClubName="Coding Cell"
                  ClubFullName="Coding and Development Cell"
                  ClubDescription="Focused on improving programming skills, building real-time applications, and preparing students for coding competitions and software development careers."
                  ClubImage="/images/Coding_Cell.png"
                />
                <Clubs
                  ClubName="ISDF Club"
                  ClubFullName="Innovation, Science & Digital Futures Club"
                  ClubDescription="Dedicated to fostering innovation through workshops, research projects, and digital transformation initiatives that shape the future of technology and science."
                  ClubImage="/images/ISDF.png"
                />
                <Clubs
                  ClubName="CEAR Club"
                  ClubFullName="Centre for Engineering and Robotics Club"
                  ClubDescription="This club brings together robotics enthusiasts to build machines, participate in national robotics contests, and explore automation and embedded systems."
                  ClubImage="/images/Robotics_Club.png"
                />
                <Clubs
                  ClubName="Sports Club"
                  ClubFullName="Institute Sports Club"
                  ClubDescription="We organize and manage inter-college and intra-college sports events, promote physical fitness, and train athletes in various disciplines like football, basketball, and athletics."
                  ClubImage="/images/Sports_Club.png"
                />
                <Clubs
                  ClubName="GDXR Club"
                  ClubFullName="Game Development and Extended Reality Club"
                  ClubDescription="Focused on building immersive experiences through game development, AR/VR technologies, and interactive media, encouraging creativity and innovation."
                  ClubImage="/images/GDXR.png"
                />
                <Clubs
                  ClubName="PR Cell"
                  ClubFullName="Public Relations and Media Cell"
                  ClubDescription="Handles all official communications, promotions, and branding of campus events and clubs through social media, photography, videography, and content writing."
                  ClubImage="/images/PR_Cell.png"
                />
                <Clubs
                  ClubName="E-Cell"
                  ClubFullName="Entrepreneurship Cell"
                  ClubDescription="Encourages entrepreneurial thinking among students by hosting startup workshops, pitch competitions, and mentoring sessions with founders and industry experts."
                  ClubImage="/images/E_Cell.png"
                />
                <Clubs
                  ClubName="MagBoard"
                  ClubFullName="Magazine Board"
                  ClubDescription="Publishes the college magazine and newsletters, offering a platform for students to express themselves through articles, poetry, artwork, and photography."
                  ClubImage="/images/MagBoard.png"
                />
                <Clubs
                  ClubName="Spiritual Club"
                  ClubFullName="Spiritual and Wellness Club"
                  ClubDescription="Aims to create inner harmony by conducting meditation sessions, yoga classes, and motivational talks to promote mental well-being and personal growth."
                  ClubImage="/images/Spiritual.png"
                />
                <Clubs
                  ClubName="GDSC"
                  ClubFullName="Google Developer Student Club"
                  ClubDescription="Backed by Google, this club helps students grow their knowledge in tech, build solutions for local businesses and communities, and get hands-on experience in real-world projects."
                  ClubImage="/images/GDSC.png"
                />
            </div>
    </>
        
    )
}

export default clubs;