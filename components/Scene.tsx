"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Icosahedron, Float, Stars, Text } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function CoreGeometry() {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        meshRef.current.rotation.x = t * 0.2;
        meshRef.current.rotation.y = t * 0.3;
    });

    return (
        <Icosahedron ref={meshRef} args={[1.5, 0]}>
            <meshStandardMaterial
                color="#7c3aed"
                wireframe
                emissive="#8b5cf6"
                emissiveIntensity={0.5}
            />
        </Icosahedron>
    );
}

function FloatingSymbol({ children, position, color }: { children: string; position: [number, number, number]; color: string }) {
    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <Text
                color={color}
                fontSize={0.5}
                position={position}
                maxWidth={200}
                lineHeight={1}
                letterSpacing={0.02}
                textAlign="center"
                anchorX="center"
                anchorY="middle"
            >
                {children}
            </Text>
        </Float>
    );
}

function FloatingCode() {
    const symbols = useMemo(() => [
        { text: "<Web />", position: [3, 2, 0], color: "#60a5fa" }, // Web - Blue
        { text: "App", position: [-3, 2, 1], color: "#a78bfa" }, // Mobile - Purple
        { text: "IoT", position: [3, -2, 2], color: "#34d399" }, // IoT - Green
        { text: "AI", position: [-2, -3, -1], color: "#f87171" }, // AI - Red
        { text: "Cloud", position: [0, 3, -2], color: "#fbbf24" }, // Cloud - Amber
        { text: "Data", position: [-4, 0, 2], color: "#e879f9" }, // Data - Fuchsia
        { text: "React", position: [4, 0, -2], color: "#9ca3af" }, // Tech - Gray
    ], []);

    return (
        <group>
            {symbols.map((s, i) => (
                // @ts-ignore
                <FloatingSymbol key={i} position={s.position} color={s.color}>
                    {s.text}
                </FloatingSymbol>
            ))}
        </group>
    );
}

export default function Scene() {
    return (
        <Canvas className="h-full w-full" camera={{ position: [0, 0, 8], fov: 60 }}>
            {/* Lights */}
            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7c3aed" />

            {/* Main Content */}
            <CoreGeometry />
            <FloatingCode />

            {/* Atmosphere */}
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

            {/* Controls */}
            <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.5}
                maxPolarAngle={Math.PI / 1.5}
                minPolarAngle={Math.PI / 3}
            />
        </Canvas>
    );
}
