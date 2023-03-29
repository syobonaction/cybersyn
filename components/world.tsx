import { Canvas } from '@react-three/fiber'
import { XR } from '@react-three/xr'
import { FlyControls } from '@react-three/drei/web'
import { Physics } from "@react-three/rapier"
import { Sky, PointerLockControls } from '@react-three/drei';

export default function World(props: any) {
    const { children } = props;

    return (
        <>
            <Canvas 
                shadows 
                camera={{ fov: 45 }} 
                style={{
                    height: '100vh',
                    width: '100vw'
                }}
            >
                <Sky sunPosition={[100, 20, 100]} />
                <Physics gravity={[0, -30, 0]}>
                    {children}
                </Physics>
                <FlyControls movementSpeed={5}/>
                <PointerLockControls />
            </Canvas>
        </>
    )
}