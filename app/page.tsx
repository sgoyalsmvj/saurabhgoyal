import Hero from '@/components/main/Hero'
import Image from 'next/image'
import Skills from '@/components/main/Skiils'
import Encryption from '@/components/main/Encryption'
import Projects from '@/components/main/Projects'
import ContactMe from '@/components/main/ContactMe'
export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col gap-20'>
      <Hero/>
      <Skills/>
      {/* <Encryption/> */}
      <Projects/>
      <ContactMe/>
      </div>
    </main>
  )
}
