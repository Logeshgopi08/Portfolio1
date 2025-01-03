import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import CanvasLoader from "../Components/CanvasLoader"
import { PerspectiveCamera } from "@react-three/drei"
import HackerRoom from "../Components/HackerRoom"
// import { Leva } from "leva"
import { useMediaQuery } from "react-responsive"
import { calculateSizes } from "../constants"
import Target from "../Components/Target"
import ReactLogo from "../Components/ReactLogo"
import Rings from "../Components/Rings"
import Cube from "../Components/Cude"
import Button from "../Components/Button"



const Hero = () => {

  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section className="min-h-screen flex flex-col w-full relative">
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 gap-3 c-space">
            <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
            Hi, I am LOGESHGOPI <span className="waving-hand">👋</span> 
            </p>

            <p className="hero_tag text-gray_gradient">FullStack Developer</p>

        </div>

        <div className="w-full h-full absolute inset-0 ">
          {/* <Leva/> */}
           <Canvas className="w-full h-full">
            <Suspense fallback= {<CanvasLoader/>}>

            <PerspectiveCamera position={[0,0,20]} makeDefault/>
            
            <HackerRoom scale={sizes.deskScale } rotation={[0,-Math.PI,0]} position={sizes.deskPosition}/>
            <group>
              <Target position={sizes.targetPosition}/>
              <ReactLogo position={sizes.reactLogoPosition}/>
              <Rings position={sizes.ringPosition}/>
              <Cube position={sizes.cubePosition}/>
            </group>
            <ambientLight intensity={1}/>
            <directionalLight position={[10,10,10]} intensity={0.5}/>
            </Suspense>

           </Canvas>

        </div>

        <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space ">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
      
    </section>
  )
}

export default Hero
