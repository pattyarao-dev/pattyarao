import AboutMe from '@/components/AboutMe'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main id="landing__page" className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-violet-main to-black">
      <Navbar/>
      <HeroSection/>
      <AboutMe/>
    </main>
  )
}
