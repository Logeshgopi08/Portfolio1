import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import CanvasLoader from "../Components/CanvasLoader";
import { workExperiences } from "../constants";
import Developer from "../Components/Developer";

const Experience = () => {

    const [animationName, setAnimationName] = useState('idle');
  return (
    <section className="c-space my-20 " id="work">
      <div className="w-full text-white-600">
        <p className="head-text">My Work Experience</p>
        <div className="work-container">
          <div className="work-canvas">
            <Canvas>
              <ambientLight intensity={7} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

              <Suspense fallback={<CanvasLoader />}>
              <Developer position-y={-3} scale={3} animationName={animationName} />
              </Suspense>
            </Canvas>
          </div>

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((work, index) => (
                <div key={index}
                onClick={() => setAnimationName(work.animation.toLowerCase())}
                  onPointerOver={() => setAnimationName(work.animation.toLowerCase())}
                  onPointerOut={() => setAnimationName('idle')}
                className="work-content_container group">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full object-cover rounded-full" src={work.icon} alt="" />
                    </div>
                    <div className="work-content_bar" />
                    <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{work.name}</p>
                    <p className="text-sm mb-5">
                      {work.pos} -- <span>{work.duration}</span>
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">{work.title}</p>
                  </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
