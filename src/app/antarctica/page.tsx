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
import natureImg from '@/public/nature.jpg';
import talksImg from '@/public/talks.jpg';
import musicImg from '@/public/music.jpg';
import penguinsImg from '@/public/penguins.png';
import iglooImg from '@/public/igloo.png';
import boatNoseImg from '@/public/boat-nose.jpg';
import Countdown from './_components/countdown';
import FadeIn from '@/components/FadeIn';

export default function Antarctica() {
  return (
    <div className='min-h-screen font-poppins'>
      <div className='h-[calc(100vh+2rem)] antarctica-background-image px-16 fade-to-black'>
        <div className='max-w-7xl h-screen mx-auto w-full flex flex-col items-center justify-between'>
          <FadeIn delay={1} direction='down' className='flex items-center justify-between py-8 text-white w-full'>
            <div className='flex items-center gap-20'>
              <Link href='/' className='text-base font-medium'>
                HOME
              </Link>
              <Link href='/antarctica' className='text-base font-medium border-b-2 px-1'>
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
          <div className='flex items-center flex-col justify-center text-white max-w-xl text-center gap-12'>
            <FadeIn>
              <h2 className='text-2xl font-medium max-w-sm'>PUDGY PENGUINS IS GOING TO ANTARCTICA IN EARLY JANUARY</h2>
            </FadeIn>
            <FadeIn delay={0.5}>
              <Countdown />
            </FadeIn>
            <FadeIn delay={0.5}>
              <h2 className='text-2xl font-medium'>JOIN THIS ADVENTURE OF A LIFETIME.</h2>
            </FadeIn>
          </div>
          <FadeIn delay={1} className='flex items-center justify-between text-white w-full py-10'>
            <div>
              <p className='text-2xl font-semibold font-abhaya-libre'>JANUARY 4-12, 2025</p>
              <p className='text-base text-[#A6A6A6]'>Trip Date</p>
            </div>
            <Image src={downArrow} alt='Down Arrow' width={24} height={24} />
            <div>
              <p className='text-2xl font-semibold font-abhaya-libre'>USHUAIA, ARGENTINA</p>
              <p className='text-base text-[#A6A6A6]'>Starting Location</p>
            </div>
          </FadeIn>
        </div>
      </div>
      <div className='w-full bg-white rounded-3xl -mt-[2rem]'>
        <div className='w-full max-w-7xl mx-auto pt-32 px-16'>
          <FadeIn enableInView delay={0.3}>
            <Image src={iglooImg} alt='Igloo Image' width={160} height={160} className='mx-auto' />
          </FadeIn>
          <FadeIn enableInView delay={0.3}>
            <h2 className='text-5xl font-semibold font-abhaya-libre text-center max-w-md mx-auto mt-16'>
              PUDGY ANTARCTICA ACTIVITIES
            </h2>
          </FadeIn>
          <div className='grid grid-cols-3 gap-10 max-w-5xl mx-auto mt-24'>
            <FadeIn enableInView delay={0.6} className='relative h-[26rem]'>
              <div className='absolute z-10 w-full h-full rounded-3xl overflow-clip'>
                <div className='w-full h-full relative blur-[2px] brightness-50'>
                  <Image src={natureImg} alt='Sail Image' fill className='object-cover object-left' />
                </div>
              </div>
              <div className='absolute z-20 w-full h-full rounded-3xl p-8 flex flex-col items-center justify-center gap-8 text-center bg-transparent'>
                <h4 className='text-white text-2xl text-[22px] font-semibold'>NATURE, HIKING, AND WELLNESS</h4>
                <p className='text-base leading-8 text-white'>
                  Opportunity to hike daily, with wellness activities alongside.
                </p>
              </div>
            </FadeIn>
            <FadeIn enableInView delay={0.9} className='relative h-[26rem]'>
              <div className='absolute z-10 w-full h-full rounded-3xl overflow-clip'>
                <div className='w-full h-full relative blur-[2px] brightness-50'>
                  <Image src={talksImg} alt='Sail Image' fill className='object-cover object-left' />
                </div>
              </div>
              <div className='absolute z-20 w-full h-full rounded-3xl p-8 flex flex-col items-center justify-center gap-8 text-center bg-transparent'>
                <h4 className='text-white text-2xl text-[22px] font-semibold'>TALKS</h4>
                <p className='text-base leading-8 text-white'>Regular talks from leading experts in the field.</p>
              </div>
            </FadeIn>
            <FadeIn enableInView delay={1.2} className='relative h-[26rem]'>
              <div className='absolute z-10 w-full h-full rounded-3xl overflow-clip'>
                <div className='w-full h-full relative blur-[2px] brightness-50'>
                  <Image src={musicImg} alt='Sail Image' fill className='object-cover object-left' />
                </div>
              </div>
              <div className='absolute z-20 w-full h-full rounded-3xl p-8 flex flex-col items-center justify-center gap-8 text-center bg-transparent'>
                <h4 className='text-white text-2xl text-[22px] font-semibold'>MUSIC</h4>
                <p className='text-base leading-8 text-white'>
                  Live music and performance from well known DJs, musicians and artists.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
        <div className='w=full max-w-7xl mx-auto pt-36 px-16 pb-32'>
          <div className='grid grid-cols-2 gap-16'>
            <div>
              <FadeIn enableInView delay={0.3}>
                <h2 className='text-6xl text-[64px] font-abhaya-libre font-semibold'>PUDGY ANTARCTICA GIVEAWAY</h2>
              </FadeIn>
              <FadeIn enableInView delay={0.6}>
                <button className='bg-black text-white px-6 py-3 rounded-full font-semibold text-lg mt-16 hover:bg-black/90 transition'>
                  Share on X
                </button>
              </FadeIn>
            </div>
            <FadeIn enableInView delay={0.9}>
              <p className='text-2xl text-[22px]'>
                Exciting Opportunity!
                <br />
                Once all 20 spots are filled,{' '}
                <span className='font-semibold'>
                  one lucky participant from the group will be selected to attend for free!
                </span>{' '}
                In addition, a golden ticket will be awarded to a member of the Pudgy community who helps spread the
                word by sharing this link.
                <br />
                <br />
                Don’t miss your chance—secure your spot and share the opportunity today!
              </p>
            </FadeIn>
          </div>
          <FadeIn enableInView delay={0.9} className='w-full h-[20rem] relative rounded-3xl overflow-clip mt-14'>
            <Image src={penguinsImg} alt='Pudgy Penguin Image' fill className='object-cover' />
          </FadeIn>
        </div>
        <div className='footer-background-image'>
          <div className='w-full max-w-7xl mx-auto px-16 h-[60rem] flex flex-col items-center justify-between py-8'>
            <div className='h-[40px]' />
            <FadeIn enableInView delay={0.3} className='grid grid-cols-2 bg-white rounded-3xl max-w-2xl overflow-clip'>
              <div className='pr-12'>
                <div className='relative h-[32rem]'>
                  <Image src={boatNoseImg} alt='Boat Image' fill className='object-cover' />
                </div>
              </div>
              <div className='flex flex-col items-center justify-center gap-8 py-12 pr-12'>
                <h3 className='text-4xl font-abhaya-libre font-semibold text-center'>
                  WANT TO JOIN UNIT PUDGY ANTARCTICA?
                </h3>
                <p className='text-base text-center'>
                  Sign up using this link and use the code{' '}
                  <span className='font-semibold'>&quot;PUDGY&quot; for 20% off ($2000).</span>
                </p>
                <Link
                  href='https://insiderexpeditions.com/artists-in-antarctica-2025'
                  target='_blank'
                  className='bg-black text-white px-6 py-3 rounded-full font-semibold text-lg mt-16 hover:bg-gray-800 transition block w-full text-center'
                >
                  Join Now
                </Link>
              </div>
            </FadeIn>
            <div>
              <p className='text-center font-abhaya-libre text-4xl font-semibold text-white'>Unit Network</p>
              <div className='flex items-center justify-center gap-4 mt-4'>
                <Link
                  href='#'
                  className='rounded-full bg-white p-1 min-h-8 min-w-8 max-h-8 max-w-8 flex items-center justify-center'
                >
                  <Image src={whatsappLogo} alt='Whatsapp Logo' width={20} height={20} />
                </Link>
                <Link
                  href='#'
                  className='rounded-full bg-white p-1 min-h-8 min-w-8 max-h-8 max-w-8 flex items-center justify-center'
                >
                  <Image src={instagramLogo} alt='Instagram Logo' width={24} height={24} />
                </Link>
                <Link
                  href='#'
                  className='rounded-full bg-white p-1 min-h-8 min-w-8 max-h-8 max-w-8 flex items-center justify-center'
                >
                  <Image src={telegramLogo} alt='Telegram Logo' width={28} height={28} />
                </Link>
                <Link
                  href='#'
                  className='rounded-full bg-white p-1 min-h-8 min-w-8 max-h-8 max-w-8 flex items-center justify-center'
                >
                  <Image src={facebookLogo} alt='Facebook Logo' width={26} height={26} />
                </Link>
                <Link
                  href='#'
                  className='rounded-full bg-white p-1 min-h-8 min-w-8 max-h-8 max-w-8 flex items-center justify-center'
                >
                  <Image src={xLogo} alt='X Logo' width={18} height={18} />
                </Link>
                <Link
                  href='#'
                  className='rounded-full bg-white p-1 min-h-8 min-w-8 max-h-8 max-w-8 flex items-center justify-center'
                >
                  <Image src={linkedinLogo} alt='Linkedin Logo' width={16} height={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
