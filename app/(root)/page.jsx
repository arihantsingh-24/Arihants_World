"use client";
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../../components/Loader";
import Island from "../../models/Island";
import Sky from "@/models/Sky";
import Bird from "@/models/Bird";
import Plane from "@/models/Plane";
import HomeInfo from "@/components/HomeInfo";

const page = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const [islandScale, setIslandScale] = useState([1, 1, 1]);
  const [islandPosition, setIslandPosition] = useState([0, -6.5, -43]);
  const [planeScale, setPlaneScale] = useState([2.5, 2.5, 2.5]);
  const [planePosition, setPlanePosition] = useState([0, -2, -2]);
  const [islandRotation] = useState([0.1, 4.7, 0]);

  useEffect(() => {
    const adjustIslandSize = () => {
      if (window.innerWidth < 768) {
        setIslandScale([0.9, 0.9, 0.9]);
        setIslandPosition([0, -6.5, -43]);
      }
    };
    const adjustPlaneSize = () => {
      if (window.innerWidth < 768) {
        setPlaneScale([1.5, 1.5, 1.5]);
        setPlanePosition([0, -1.5, -1.5]);
      }
    };

    adjustIslandSize();
    adjustPlaneSize();

    // Add a resize event listener to adjust the size dynamically
    window.addEventListener("resize", adjustIslandSize);
    window.addEventListener("resize", adjustPlaneSize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", adjustIslandSize);
      window.removeEventListener("resize", adjustPlaneSize);
    };
  }, []);

  return (
    <section className="w-full h-screen relative">
      <div className='absolute top-20 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage}/>}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        } `}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skycolor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />

          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            position={planePosition}
            scale={planeScale}
            isRotating={isRotating}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default page;

// colors: {
//   gray: {
//     200: "#D5DAE1"
//   },
//   black: {
//     DEFAULT: "#000",
//     500: "#1D2235"
//   },
//   blue: {
//     500: "#2b77e7"
//   }
// },
