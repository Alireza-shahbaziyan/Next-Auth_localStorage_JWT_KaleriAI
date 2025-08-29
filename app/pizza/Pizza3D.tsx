"use client";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

export default function Pizza3D() {
	const group = useRef<THREE.Group>(null!);

	useFrame((_, delta) => {
		if (group.current) group.current.rotation.y += delta * 0.6;
	});

	const toppings = useMemo(() => {
		const arr: Array<[number, number]> = [];
		const R = 1.5;
		for (let i = 0; i < 16; i++) {
			const r = Math.sqrt(Math.random()) * R;
			const a = Math.random() * Math.PI * 2;
			arr.push([Math.cos(a) * r, Math.sin(a) * r]);
		}
		return arr;
	}, []);
 
	return (
		<group ref={group} position={[0, 0, 0]}>
			<mesh castShadow receiveShadow>
				<cylinderGeometry args={[1.9, 1.9, 0.18, 64]} />
				<meshStandardMaterial
					color="#caa472"
					roughness={0.9}
					metalness={0.0}
				/>
			</mesh>

			<mesh position={[0, 0.1, 0]}>
				<cylinderGeometry args={[1.65, 1.65, 0.04, 64]} />
				<meshStandardMaterial color="#f1d46a" roughness={0.85} />
			</mesh>

			<mesh position={[0, 0.12, 0]} rotation={[Math.PI / 2, 0, 0]}>
				<torusGeometry args={[1.75, 0.07, 16, 120]} />
				<meshStandardMaterial color="#d6a86a" roughness={0.9} />
			</mesh>

			{toppings.map(([x, z], i) => (
				<mesh key={i} position={[x, 0.14, z]} castShadow>
					<cylinderGeometry args={[0.2, 0.2, 0.05, 32]} />
					<meshStandardMaterial color="#b33e3e" roughness={0.7} />
				</mesh>
			))}
		</group>
	);
}
