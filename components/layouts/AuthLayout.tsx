"use client";
import AuthPic from "@/public/img/saljdneljasndaw.png";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Starfield from "@/components/Starfield";
const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	<div className="min-h-screen flex   items-center justify-center md:justify-around bg-gradient-to-br from-black via-gray-900 to-indigo-900">
		<Starfield density={0.0003} parallax={40} speed={12} />

		<motion.div
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
			className="md:bg-gradient-to-br  from-gray-950 via-gray-800 to-indigo-900
       						md:backdrop-blur-md rounded-2xl  justify-center   flex flex-col-reverse md:flex-row  md:justify-around md:items-center md:gap-9 
	    						md:shadow-2xl md:shadow-indigo-900 p-10 w-full max-w-md md:w-3/6 md:max-w-full overflow-hidden">
			<div className="md:w-2/3">{children}</div>
			<div className=" md:w-2/3 text-center py-2 md:py-0">
				<h1 className=" text-4xl font-oswald leading-tight md:text-2xl lg:text-6xl  font-black">
					Meet{" "}
					<span className="bg-gradient-to-r from-indigo-300 to-indigo-600 bg-clip-text text-transparent">
						Kaleri AI
					</span>
				</h1>
				<Image
					src={AuthPic}
					alt="Auth Page"
					fill={false}
					className="w-20 md:block hidden  sm:w-56 h-auto mx-auto  "
				/>
			</div>
		</motion.div>
	</div>
);

export default AuthLayout;
