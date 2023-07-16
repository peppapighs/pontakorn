"use client";

import { useRef, type MutableRefObject, useEffect } from "react";

import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Pixelation } from "@react-three/postprocessing";
import { Object3D, type InstancedMesh, Matrix4, Vector3, Color } from "three";

const COUNT = 500;
const BOX_SIZE = 0.1;
const XY_BOUND = 40;
const Z_BOUND = 20;
const VELOCITY = 0.4;
const MAX_VELOCITY_FACTOR = 2;
const MAX_SCALE_FACTOR = 50;

function randomPosition(bound: number) {
  return (Math.random() - 0.5) * bound;
}

function Scene() {
  const meshRef = useRef<InstancedMesh>();

  const tempMatrix = new Matrix4();
  const tempObject = new Object3D();
  const tempPosition = new Vector3();
  const tempColor = new Color();

  useEffect(() => {
    if (!meshRef.current) return;

    const box = new Object3D();
    for (let i = 0; i < COUNT; i++) {
      box.position.x = randomPosition(XY_BOUND);
      box.position.y = randomPosition(XY_BOUND);
      box.position.z = randomPosition(Z_BOUND);
      box.updateMatrix();

      meshRef.current.setMatrixAt(i, box.matrix);
    }
  }, []);

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    for (let i = 0; i < COUNT; i++) {
      meshRef.current.getMatrixAt(i, tempMatrix);

      tempObject.scale.set(1, 1, Math.max(1, VELOCITY * MAX_SCALE_FACTOR));

      tempPosition.setFromMatrixPosition(tempMatrix);
      if (tempPosition.z > Z_BOUND / 2) {
        while (tempPosition.z > Z_BOUND / 2) tempPosition.z -= Z_BOUND;
        tempPosition.x = randomPosition(XY_BOUND);
        tempPosition.y = randomPosition(XY_BOUND);
      } else {
        tempPosition.z += Math.max(delta, VELOCITY * MAX_VELOCITY_FACTOR);
      }
      tempObject.position.set(tempPosition.x, tempPosition.y, tempPosition.z);

      tempObject.updateMatrix();
      meshRef.current.setMatrixAt(i, tempObject.matrix);

      const color = 1 - Math.max(0, tempPosition.z / (-Z_BOUND / 2));
      tempColor.setRGB(color, color, color);

      meshRef.current.setColorAt(i, tempColor);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor)
      meshRef.current.instanceColor.needsUpdate = true;
  });

  return (
    <>
      <color attach="background" args={["black"]} />
      <instancedMesh
        ref={meshRef as MutableRefObject<InstancedMesh>}
        args={[undefined, undefined, COUNT]}
        matrixAutoUpdate
      >
        <boxGeometry args={[BOX_SIZE, BOX_SIZE, BOX_SIZE]} />
        <meshBasicMaterial color={[1, 1, 1]} />
      </instancedMesh>
      <EffectComposer>
        <Pixelation granularity={5} />
      </EffectComposer>
    </>
  );
}

export default function Warp({ ...props }) {
  return (
    <div {...props}>
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  );
}
