import FadeIn from '@/components/FadeIn';
import downArrow from '@/public/down-arrow.svg';
import facebookLogo from '@/public/logo/facebook.svg';
import instagramLogo from '@/public/logo/instagram.svg';
import linkedinLogo from '@/public/logo/linkedin.svg';
import telegramLogo from '@/public/logo/telegram.svg';
import unitLogo from '@/public/logo/unit.svg';
import whatsappLogo from '@/public/logo/whatsapp.svg';
import xLogo from '@/public/logo/x.svg';
import penguin3Img from '@/public/penguins-3.png';
import penguin4Img from '@/public/penguins-4.png';
import penguin5Img from '@/public/penguins-5.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Global() {
  return (
    <div className='min-h-screen font-poppins'>
      <div className='h-[calc(100vh+2rem)] global-background-image px-16 fade-to-black'>
        <div className='max-w-7xl h-screen mx-auto w-full flex flex-col items-center justify-between'>
          <FadeIn delay={1} direction='down' className='flex items-center justify-between py-8 text-white w-full'>
            <div className='flex items-center gap-20'>
              <Link href='/' className='text-base font-medium'>
                HOME
              </Link>
              <Link href='/antartica' className='text-base font-medium'>
                ANTARTICA
              </Link>
            </div>
            <Image src={unitLogo} alt='Unit Logo' width={32} height={32} />
            <div className='flex items-center gap-20'>
              <Link href='/tokenisation' className='text-base font-medium'>
                TOKENISATION
              </Link>
              <Link href='/global' className='text-base font-medium border-b-2 px-1'>
                GLOBAL
              </Link>
            </div>
          </FadeIn>
          <div className='flex items-center flex-col justify-center text-white max-w-xl text-center'>
            <FadeIn>
              <h2 className='text-2xl font-medium'>PUDGY</h2>
            </FadeIn>
            <FadeIn delay={0.5}>
              <h1 className='text-8xl font-abhaya-libre font-semibold mt-2'>GLOBAL</h1>
            </FadeIn>
          </div>
          <FadeIn delay={1} className='flex items-center justify-center text-white w-full py-10'>
            <Image src={downArrow} alt='Down Arrow' width={24} height={24} />
          </FadeIn>
        </div>
      </div>
      <div className='w-full bg-white rounded-3xl -mt-[2rem]'>
        <FadeIn enableInView delay={0.3}>
          <h2 className='text-6xl text-[56px] font-abhaya-libre font-semibold text-center pt-32'>
            PUDGY&apos;S NEW CHAPTER
          </h2>
        </FadeIn>
        <div className='grid grid-cols-3 w-full max-w-7xl mx-auto pt-20 gap-x-10 gap-y-20 px-16'>
          <FadeIn enableInView delay={0.6} className='bg-[#F5F5F5] h-[23rem] rounded-3xl px-6 py-8 flex flex-col items-start justify-between gap-8 text-start'>
            <p className='text-black text-3xl font-medium'>PUDGY IS GOING GLOBAL</p>
            <p className='text-xl text-black leading-8'>
              We&apos;re planning a number of global events, meet-ups and gatherings.
            </p>
          </FadeIn>
          <FadeIn enableInView delay={0.9} className='relative h-[23rem] rounded-3xl overflow-clip'>
            <Image src={penguin3Img} alt='Pudgy Penguin Image' fill className='object-cover' />
          </FadeIn>
          <FadeIn enableInView delay={1.2} className='bg-black h-[23rem] rounded-3xl px-6 py-8 flex flex-col items-start justify-between gap-8 text-start'>
            <p className='text-white text-3xl font-medium'>HOW CAN I BE A PART?</p>
            <p className='text-xl text-white leading-8'>
              Reach out to our team if you&apos;re keen to be a Unit Pudgy ambassador.
            </p>
          </FadeIn>
          <FadeIn enableInView delay={0.6} className='relative h-[23rem] rounded-3xl overflow-clip'>
            <Image src={penguin4Img} alt='Pudgy Penguin Image' fill className='object-cover' />
          </FadeIn>
          <FadeIn enableInView delay={0.9} className='bg-[#F5F5F5] h-[23rem] rounded-3xl px-6 py-8 flex flex-col items-start justify-between gap-8 text-start'>
            <p className='text-black text-3xl font-medium'>ANY MORE INFO?</p>
            <p className='text-xl text-black leading-8'>
              We&apos;ll be sharing lots more soon!
              <br />
              <br />
              Stay tuned.
            </p>
          </FadeIn>
          <FadeIn enableInView delay={1.2} className='relative h-[23rem] rounded-3xl overflow-clip'>
            <Image src={penguin5Img} alt='Pudgy Penguin Image' fill className='object-cover' />
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
