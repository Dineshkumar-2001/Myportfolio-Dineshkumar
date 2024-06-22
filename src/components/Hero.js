import HeroImg from '../assets/hero.png';
import MyImg from '../assets/1719050784843.jpg'
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa"; 

export default function Hero() {
    const config  = {
        subtitle: 'Im a Fullstack developer',
        social: {
            whatsApp: '9384753302',
            mail: 'dineshkumar93847@gmail.com',
            linkedin: 'https://www.linkedin.com/in/dinesh-kumar-601126230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'

            // const linkedinProfileUrl = "https://www.linkedin.com/in/dinesh-kumar-601126230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
            // const emailAddress = "dineshkumar93847@gmail.com";
            // const whatsappNumber = "9384753302";
        }
    }


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
       <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> Im <span className='text-black'>Dinesh Kumar</span>  
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
                <a href={`https://wa.me/${config.social.whatsApp}`}  className='pr-5 hover:text-white'><FaWhatsapp size={40} /></a>
                <a href={`mailto:${config.social.mail}`} className='pr-5 hover:text-white'><FaEnvelope size={40}/></a>
                <a href={config.social.linkedin} className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
                
                
            </div>
       </div>
       <img className='md:w-1/4 rounded' src={MyImg} />
    </section>
}
