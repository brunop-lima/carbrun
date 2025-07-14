import { Envelope, InstagramLogo, WhatsappLogo } from '@phosphor-icons/react'

function Footer() {

    return (
        <>
            <div className="flex justify-center bg-pink-500	 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                           CarBrun Grafica
                        </p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
	                        <a href="https://wa.me/+551149976830?text=Ol%C3%A1%2C%20" target="_blank">
    	                    <WhatsappLogo size={48} weight='bold' />
                        </a>
                            <a href="https://www.instagram.com/carbrun.grafica?igshid=YzAwZjE1ZTI0Zg%3D%3D" target="_blank">
    	                    <InstagramLogo size={48} weight='bold' />
                        </a>
                            <a href="mailto:carbrun.grafica@gmail.com " target="_blank">
    	                    < Envelope size={48} weight='bold' />
	                    </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer