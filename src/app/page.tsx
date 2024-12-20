import FadeIn from '@/components/FadeIn';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import downArrow from '@/public/down-arrow.svg';
import facebookLogo from '@/public/logo/facebook.svg';
import instagramLogo from '@/public/logo/instagram.svg';
import linkedinLogo from '@/public/logo/linkedin.svg';
import telegramLogo from '@/public/logo/telegram.svg';
import unitLogo from '@/public/logo/unit.svg';
import whatsappLogo from '@/public/logo/whatsapp.svg';
import xLogo from '@/public/logo/x.svg';
import pudgyPenguinImg from '@/public/pudgy-penguin.png';
import sailImg from '@/public/sail.png';
import unitNetworkImg from '@/public/unit-network.png';
import { MenuIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='min-h-screen font-poppins'>
      <div className='h-[calc(100vh+2rem)] hero-background-image px-6 md:px-16 fade-to-black'>
        <div className='max-w-7xl h-screen mx-auto w-full flex flex-col items-center justify-between'>
          <FadeIn
            delay={1}
            direction='down'
            className='flex md:hidden items-center justify-between py-8 text-white w-full'
          >
            <Sheet>
              <SheetTrigger>
                <MenuIcon className='w-6 h-6' />
              </SheetTrigger>
              <SheetContent side='left'>
                <SheetHeader>
                  <SheetTitle>UNITPUDGY ANTARCTICA</SheetTitle>
                </SheetHeader>
                <div className='flex flex-col items-center justify-center gap-4 mt-4'>
                  <Link href='/' className='text-base font-medium'>
                    HOME
                  </Link>
                  <Link href='/antarctica' className='text-base font-medium'>
                    ANTARCTICA
                  </Link>
                  <Link href='/tokenisation' className='text-base font-medium'>
                    TOKENISATION
                  </Link>
                  <Link href='/global' className='text-base font-medium'>
                    GLOBAL
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
            <Image src={unitLogo} alt='Unit Logo' width={32} height={32} />
          </FadeIn>
          <FadeIn
            delay={1}
            direction='down'
            className='hidden md:flex items-center justify-between py-8 text-white w-full'
          >
            <div className='flex items-center gap-20'>
              <Link href='/' className='text-base font-medium border-b-2 px-1'>
                HOME
              </Link>
              <Link href='/antarctica' className='text-base font-medium'>
                ANTARCTICA
              </Link>
            </div>
            <Image src={unitLogo} alt='Unit Logo' width={32} height={32} />
            <div className='flex items-center gap-20'>
              <Link href='/tokenisation' className='text-base font-medium'>
                TOKENISATION
              </Link>
              <Link href='/global' className='text-base font-medium'>
                GLOBAL
              </Link>
            </div>
          </FadeIn>
          <div className='flex items-center flex-col justify-center text-white max-w-xl text-center'>
            <FadeIn>
              <h2 className='md:text-2xl font-medium'>UNIT NETWORK X PUDGY X INSIDER EXPEDITIONS</h2>
            </FadeIn>
            <FadeIn delay={0.5}>
              <h1 className='text-6xl md:text-8xl font-abhaya-libre font-semibold mt-2'>EXPLORE ANTARCTICA</h1>
            </FadeIn>
          </div>
          <FadeIn delay={1} className='flex items-center justify-between text-white w-full py-10 gap-8'>
            <div>
              <p className='text-2xl font-semibold font-abhaya-libre'>JANUARY 4-12, 2025</p>
              <p className='text-base text-[#A6A6A6]'>Trip Date</p>
            </div>
            <Image src={downArrow} alt='Down Arrow' width={24} height={24} className='hidden md:block' />
            <div className='text-end md:text-left'>
              <p className='text-2xl font-semibold font-abhaya-libre'>USHUAIA, ARGENTINA</p>
              <p className='text-base text-[#A6A6A6]'>Starting Location</p>
            </div>
          </FadeIn>
        </div>
      </div>
      <div className='w-full bg-white rounded-3xl -mt-[2rem]'>
        <div className='grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl mx-auto pt-20 md:pt-32 gap-8 md:gap-16 px-6 md:px-16'>
          <div className='flex flex-col'>
            <FadeIn enableInView delay={0.3}>
              <h1 className='text-4xl md:text-6xl md:text-[64px] font-abhaya-libre font-semibold'>
                WHAT IS PUDGY PENGUINS?
              </h1>
            </FadeIn>
            <FadeIn enableInView delay={0.6}>
              <p className='md:text-2xl md:text-[22px] pt-8 md:pt-28'>
                Pudgy Penguin is a leading community globally, which fosters{' '}
                <span className='font-semibold'>creativity, freedom, and community</span>. The Pudgy Penguins brand
                produces content, merchandise, toys, and digital collectables.{' '}
                <span className='font-semibold'>We believe in the power of play and imagination</span>, and we&apos;re
                committed to helping you unlock your inner child.
              </p>
            </FadeIn>
          </div>
          <FadeIn enableInView delay={0.9} className='bg-[#F5F5F5] rounded-3xl md:px-10 md:pt-24'>
            <div className='w-full h-[24rem] relative rounded-3xl overflow-clip'>
              <Image src={pudgyPenguinImg} alt='Pudgy Penguin Image' fill className='object-cover object-top' />
            </div>
          </FadeIn>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl mx-auto pt-20 md:pt-32 gap-8 md:gap-16 px-6 md:px-16 pb-20 md:pb-32'>
          <FadeIn enableInView delay={0.9} className='bg-[#F5F5F5] rounded-3xl md:px-10 md:pt-24 order-last md:order-first'>
            <div className='w-full h-[24rem] relative rounded-3xl overflow-clip'>
              <Image src={unitNetworkImg} alt='Unit Network Image' fill className='object-cover' />
            </div>
          </FadeIn>
          <div className='flex flex-col'>
            <FadeIn enableInView delay={0.3}>
              <h1 className='text-4xl md:text-6xl md:text-[64px] font-abhaya-libre font-semibold'>
                WHAT IS UNIT NETWORK?
              </h1>
            </FadeIn>
            <FadeIn enableInView delay={0.6}>
              <p className='md:text-2xl md:text-[22px] pt-8 md:pt-28'>
                Unit Network is a <span className='font-semibold'>leading technology for tokenisation</span> with a
                community with a wide range of interest and backgrounds, with the underlying mission to create{' '}
                <span className='font-semibold'>a better economic system and world</span>.
              </p>
            </FadeIn>
          </div>
        </div>
        <div className='w-full max-w-7xl mx-auto px-6 md:px-16'>
          <hr className='border-[#DEDEDE] border w-full' />
        </div>
        <div className='w-full max-w-7xl mx-auto pt-8 md:pt-28 px-6 md:px-16 pb-20 md:pb-32'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16'>
            <FadeIn enableInView delay={0.3}>
              <h2 className='text-4xl md:text-6xl md:text-[64px] font-abhaya-libre font-semibold'>
                WHAT IS UNITPUDGY ANTARCTICA?
              </h2>
            </FadeIn>
            <div>
              <FadeIn enableInView delay={0.6}>
                <p className='md:text-2xl md:text-[22px]'>
                  Pudgy is going to <span className='font-semibold'>Antarctica in January</span>, and plans to go yearly.
                </p>
              </FadeIn>
              <FadeIn enableInView delay={0.9}>
                <Link
                  href='/antarctica'
                  className='bg-black text-white px-6 py-3 rounded-full font-semibold text-lg mt-8 md:mt-16 hover:bg-gray-800 transition block w-fit'
                >
                  Learn more
                </Link>
              </FadeIn>
            </div>
          </div>
          <FadeIn enableInView delay={0.9} className='w-full h-[20rem] relative rounded-3xl overflow-clip mt-14'>
            <Image src={sailImg} alt='Sail Image' fill className='object-cover' />
          </FadeIn>
        </div>
        <div className='w-full max-w-7xl mx-auto px-6 md:px-16'>
          <FadeIn enableInView delay={0.3}>
            <h3 className='text-4xl md:text-6xl md:text-[56px] font-semibold font-abhaya-libre text-center'>THINGS TO KNOW</h3>
          </FadeIn>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 md:mt-20'>
            <FadeIn
              enableInView
              delay={0.6}
              className='bg-black w-full h-[26rem] md:h-[40rem] rounded-3xl p-12 flex flex-col items-center justify-center gap-8 text-center'
            >
              <h4 className='text-white text-4xl md:text-5xl font-semibold font-abhaya-libre'>
                UNITPUDGY TOKENISATION
              </h4>
              <p className='md:text-xl text-white md:leading-8'>
                Pudgy is being tokenised on the Unit Network, so many people can hold a Pudgy Penguin. We hope this will
                bring this movement to the world.
              </p>
              <Link
                href='/tokenisation'
                className='bg-white text-black px-6 py-3 rounded-full font-semibold text-lg hover:bg-white/90 transition'
              >
                Learn more
              </Link>
            </FadeIn>
            <FadeIn
              enableInView
              delay={0.9}
              className='bg-black w-full h-[26rem] md:h-[40rem] rounded-3xl p-12 flex flex-col items-center justify-center gap-8 text-center'
            >
              <h4 className='text-white text-4xl md:text-5xl font-semibold font-abhaya-libre max-w-[20rem]'>
                UNITPUDGY GLOBAL
              </h4>
              <p className='md:text-xl text-white md:leading-8'>
                Pudgy is organising over 60 global events to bring together the Pudgy Community, and support one
                another.
              </p>
              <Link
                href='/global'
                className='bg-white text-black px-6 py-3 rounded-full font-semibold text-lg hover:bg-white/90 transition'
              >
                Learn more
              </Link>
            </FadeIn>
          </div>
        </div>
        <div className='w-full max-w-7xl mx-auto px-6 md:px-16 h-[40rem] flex flex-col items-center justify-center py-8'>
          <p className='text-center font-abhaya-libre text-4xl font-semibold'>Unit Network</p>
          <div className='flex items-center justify-center gap-4 mt-4'>
            <Link
              href='#'
              className='rounded-full bg-black p-1 min-h-8 min-w-8 max-h-8 max-w-8 flex items-center justify-center'
            >
              <Image src={whatsappLogo} alt='Whatsapp Logo' width={20} height={20} className='invert' />
            </Link>
            <Link
              href='#'
              className='rounded-full bg-black p-1 min-h-8 min-w-8 max-h-8 max-w-8 flex items-center justify-center'
            >
              <Image src={instagramLogo} alt='Instagram Logo' width={24} height={24} className='invert' />
            </Link>
            <Link
              href='#'
              className='rounded-full bg-black p-1 min-h-8 min-w-8 max-h-8 max-w-8 flex items-center justify-center'
            >
              <Image src={telegramLogo} alt='Telegram Logo' width={28} height={28} className='invert' />
            </Link>
            <Link
              href='#'
              className='rounded-full bg-black p-1 min-h-8 min-w-8 max-h-8 max-w-8 flex items-center justify-center'
            >
              <Image src={facebookLogo} alt='Facebook Logo' width={26} height={26} className='invert' />
            </Link>
            <Link
              href='#'
              className='rounded-full bg-black p-1 min-h-8 min-w-8 max-h-8 max-w-8 flex items-center justify-center'
            >
              <Image src={xLogo} alt='X Logo' width={18} height={18} className='invert' />
            </Link>
            <Link
              href='#'
              className='rounded-full bg-black p-1 min-h-8 min-w-8 max-h-8 max-w-8 flex items-center justify-center'
            >
              <Image src={linkedinLogo} alt='Linkedin Logo' width={16} height={16} className='invert' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
