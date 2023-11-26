"use client"

import { useEffect } from 'react';
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

class TypeWriter {
  textElement: Element;
  words: string[];
  text: string;
  wordIndex: number;
  wait: number;
  isDeleting: boolean;

  constructor(textElement: Element | null, words: string[], wait = 3000) {
    this.textElement = textElement!;
    this.words = words;
    this.text = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait.toString(), 10);
    this.isDeleting = false;
    this.type();
  }

  // Type method
  type() {
    // current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullText = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.text = fullText.substring(0, this.text.length - 1);
    } else {
      // Add char
      this.text = fullText.substring(0, this.text.length + 1);
    }

    // Insert text into element
    if (this.textElement instanceof HTMLElement) {
      this.textElement.innerHTML = this.text;
    }

    // Initial type Speed
    let typeSpeed = 250;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.text === fullText) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.text === '') {
      this.isDeleting = false;
      //
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }
    setTimeout(() => this.type(), typeSpeed);
  }
}

export default function TypeWriterComponent() {
  useEffect(() => {
    const textElement = document.querySelector('.txt-type');
    const words = textElement?.getAttribute('data-words');
    const wait = textElement?.getAttribute('data-wait');

    if (textElement && words) {
      const parsedWords = JSON.parse(words);
      if(wait){
        const typeWriter = new TypeWriter(textElement, parsedWords, parseInt(wait));
      }
    }

    return () => {
      // Perform any necessary cleanup
    };
  }, []);

  const particlesInit = async (main: any) => {
    await loadFull(main);
  };
  return (
  <div>
    <div className="welcome flex flex-col bg-black justify-center px-[40px]">
    <div id='particle' className='w-fit h-[90vh] absolute'>
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
    </div>
      <div className="container msg flex flex-col gap-y-2 select-none">
        <h1 className='font-normal text-6xl new:text-4xl'>Clubify for&nbsp;<span className="txt-type text-[#FF5722]" data-wait="2000" data-words='["Developers", "Secretaries", "Participants"]'></span></h1>
        <h2 className='text-[2rem] new:text-[1rem]'>Welcome to Club Event Manager</h2>
        <p className="welcome-msg text-gray-400 text-lg">
          "Turning Moments into Memories : Your Ultimate Club Experience Awaits"
        </p>
      </div>
    </div>
  </div>
  );
}
