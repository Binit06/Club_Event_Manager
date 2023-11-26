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
                <Clubs ClubName="OSS Club" ClubFullName="Open Source Software Club" ClubDescription="Our main goal is to spread awareness about the goodness of sharing knowledge via contributing to the Open Source Community and making good use of it in the real time applications." ClubImage="/images/oss.svg"/>
                <Clubs ClubName="DDQ Club" ClubFullName="Open Source Software Club" ClubDescription="Our main goal is to spread awareness about the goodness of sharing knowledge via contributing to the Open Source Community and making good use of it in the real time applications." ClubImage="/images/DDQ_Logo.png"/>
                <Clubs ClubName="Coding Cell" ClubFullName="Open Source Software Club" ClubDescription="Our main goal is to spread awareness about the goodness of sharing knowledge via contributing to the Open Source Community and making good use of it in the real time applications." ClubImage="/images/Coding_Cell.png"/>
                <Clubs ClubName="ISDF Club" ClubFullName="Open Source Software Club" ClubDescription="Our main goal is to spread awareness about the goodness of sharing knowledge via contributing to the Open Source Community and making good use of it in the real time applications." ClubImage="/images/ISDF.png"/>
                <Clubs ClubName="CEAR Club" ClubFullName="Open Source Software Club" ClubDescription="Our main goal is to spread awareness about the goodness of sharing knowledge via contributing to the Open Source Community and making good use of it in the real time applications." ClubImage="/images/Robotics_Club.png"/>
                <Clubs ClubName="OSS Club" ClubFullName="Open Source Software Club" ClubDescription="Our main goal is to spread awareness about the goodness of sharing knowledge via contributing to the Open Source Community and making good use of it in the real time applications." ClubImage="/images/Sports_Club.png"/>
                <Clubs ClubName="OSS Club" ClubFullName="Open Source Software Club" ClubDescription="Our main goal is to spread awareness about the goodness of sharing knowledge via contributing to the Open Source Community and making good use of it in the real time applications." ClubImage="/images/GDXR.png"/>
                <Clubs ClubName="OSS Club" ClubFullName="Open Source Software Club" ClubDescription="Our main goal is to spread awareness about the goodness of sharing knowledge via contributing to the Open Source Community and making good use of it in the real time applications." ClubImage="/images/PR_Cell.png"/>
                <Clubs ClubName="OSS Club" ClubFullName="Open Source Software Club" ClubDescription="Our main goal is to spread awareness about the goodness of sharing knowledge via contributing to the Open Source Community and making good use of it in the real time applications." ClubImage="/images/E_Cell.png"/>
                <Clubs ClubName="OSS Club" ClubFullName="Open Source Software Club" ClubDescription="Our main goal is to spread awareness about the goodness of sharing knowledge via contributing to the Open Source Community and making good use of it in the real time applications." ClubImage="/images/MagBoard.png"/>
                <Clubs ClubName="OSS Club" ClubFullName="Open Source Software Club" ClubDescription="Our main goal is to spread awareness about the goodness of sharing knowledge via contributing to the Open Source Community and making good use of it in the real time applications." ClubImage="/images/Spiritual.png"/>
                <Clubs ClubName="OSS Club" ClubFullName="Open Source Software Club" ClubDescription="Our main goal is to spread awareness about the goodness of sharing knowledge via contributing to the Open Source Community and making good use of it in the real time applications." ClubImage="/images/GDSC.png"/>
            </div>
    </>
        
    )
}

export default clubs;