import { useGLTF } from "@react-three/drei";
import { useRef } from "react";


const Target =(props)=>{
    const targetRef = useRef();
    const {scene} = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf');

    


return (
    <mesh {...props} ref={targetRef} scale={1.5} rotation={[0,Math.PI/5,0]}>
        <primitive object={scene}/>
    </mesh>
);
}

export default Target;