import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/containers/Hero'
import About from '@/containers/About'
import Vision from '@/containers/Vision'
import Token from '@/containers/Token'
import Quote from '@/containers/Quote'




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-grey-300 ">
     
      <Hero id="#home"></Hero>
      <About id="#about"></About>
      <Vision id="#vision"></Vision>
      <Quote></Quote>
      <Token id="#token"></Token>
      
     

     
    </main>
  )
}
