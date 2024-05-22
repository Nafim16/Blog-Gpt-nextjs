import Image from "next/image";
import HeroImg from "/public/hero.webp";
import { Logo } from "../Components/Logo";
import Link from "next/link";


export default function Home() {


  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center relative">
      <Image src={HeroImg} alt="" fill className="absolute" />
      <div className="relative z-10 text-gray-400 px-10 py-5 text-center max-w-screen-sm bg-slate-900/80 rounded-lg backdrop-blur-sm">
        <Logo />
        <p className="text-white mb-2">
          This is AI-Powered SAAS Solution For generating SEO-Optimized Posts in Seconds. Get High Quality Content based on your Hashtags!!
        </p>
        <Link href='/post/new' className="bg-green-500 tracking-wider w-full text-center text-white font-bold cursor-pointer uppercase px-4 py-2 rounded-md hover:bg-green-600 transition-colors block">
          Start Generating
        </Link>
      </div>
    </div>
  );
}
