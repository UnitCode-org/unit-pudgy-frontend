import Link from 'next/link';
import Image from 'next/image';
import facebookLogo from '@/public/logo/facebook.svg';
import instagramLogo from '@/public/logo/instagram.svg';
import xLogo from '@/public/logo/x.svg';
import linkedinLogo from '@/public/logo/linkedin.svg';
import telegramLogo from '@/public/logo/telegram.svg';
import whatsappLogo from '@/public/logo/whatsapp.svg';
import unitLogo from '@/public/logo/unit.svg';
import downArrow from '@/public/down-arrow.svg';
import FadeIn from '@/components/FadeIn';
import penguins2Img from '@/public/penguins-2.png';

export default function Tokenisation() {
  return (
    <div className='min-h-screen font-poppins'>
      <div className='h-[calc(100vh+2rem)] tokenisation-background-image px-16 fade-to-black'>
        <div className='max-w-7xl h-screen mx-auto w-full flex flex-col items-center justify-between'>
          <FadeIn delay={1} direction='down' className='flex items-center justify-between py-8 text-white w-full'>
            <div className='flex items-center gap-20'>
              <Link href='/' className='text-base font-medium'>
                HOME
              </Link>
              <Link href='/antarctica' className='text-base font-medium'>
                ANTARCTICA
              </Link>
            </div>
            <Image src={unitLogo} alt='Unit Logo' width={32} height={32} />
            <div className='flex items-center gap-20'>
              <Link href='/tokenisation' className='text-base font-medium border-b-2 px-1'>
                TOKENISATION
              </Link>
              <Link href='/global' className='text-base font-medium'>
                GLOBAL
              </Link>
            </div>
          </FadeIn>
          <div className='flex items-center flex-col justify-center text-white max-w-xl text-center'>
            <FadeIn>
              <h2 className='text-2xl font-medium'>UNIT NETWORK X PUDGY</h2>
            </FadeIn>
            <FadeIn delay={0.5}>
              <h1 className='text-8xl font-abhaya-libre font-semibold mt-2'>TOKENISATION</h1>
            </FadeIn>
          </div>
          <FadeIn delay={1} className='flex items-center justify-center text-white w-full py-10'>
            <Image src={downArrow} alt='Down Arrow' width={24} height={24} />
          </FadeIn>
        </div>
      </div>
      <div className='w-full bg-white rounded-3xl -mt-[2rem]'>
        <div className='grid grid-cols-2 w-full max-w-7xl mx-auto pt-32 gap-6 px-16'>
          <FadeIn enableInView delay={0.3}>
            <h1 className='text-6xl text-[58px] font-abhaya-libre font-semibold'>WHAT IS UNITPUDGY TOKENISATION?</h1>
          </FadeIn>
          <FadeIn enableInView delay={0.6}>
            <p className='text-2xl text-[22px]'>
              Pudgy is being <span className='font-semibold'>tokenised</span> on the Unit Network, so many people can hold
              a Pudgy Penguin. We hope this will bring this movement to the world.
            </p>
          </FadeIn>
        </div>
        <div className='w-full max-w-7xl mx-auto px-16 py-20'>
          <hr className='border-[#DEDEDE] border w-full' />
        </div>
        <div className='grid grid-cols-2 w-full max-w-7xl mx-auto gap-6 px-16'>
          <FadeIn enableInView delay={0.6}>
            <p className='text-2xl text-[22px]'>
              So we&apos;ll be buying up Pudgy&apos;s at the floor price, then allow many people to fractionally own it.
            </p>
          </FadeIn>
          <FadeIn enableInView delay={0.3}>
            <h1 className='text-6xl text-[58px] font-abhaya-libre font-semibold'>HOW DOES IT WORK?</h1>
          </FadeIn>
        </div>
        <div className='w-full max-w-7xl mx-auto px-16 py-20'>
          <hr className='border-[#DEDEDE] border w-full' />
        </div>
        <div className='grid grid-cols-2 w-full max-w-7xl mx-auto gap-6 px-16'>
          <FadeIn enableInView delay={0.3}>
            <h1 className='text-6xl text-[58px] font-abhaya-libre font-semibold'>WHICH TECHNOLOGY WILL THIS USE?</h1>
          </FadeIn>
          <FadeIn enableInView delay={0.6}>
            <p className='text-2xl text-[22px]'>
              This will use the Unit Network, leading tokenisation/franctional ownership platform.
            </p>
          </FadeIn>
        </div>
        <div className='w-full max-w-7xl mx-auto px-16'>
          <FadeIn enableInView delay={0.9} className='w-full h-[20rem] relative rounded-3xl overflow-clip mt-14'>
            <Image src={penguins2Img} alt='Pudgy Penguins Image' fill className='object-cover' />
          </FadeIn>
        </div>
        <div className='w-full max-w-7xl mx-auto px-16 h-[40rem] flex flex-col items-center justify-center py-8'>
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
