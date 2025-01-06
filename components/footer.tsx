import { siteConfig } from '@/config/site'
import { Link } from '@nextui-org/link'
import { FacebookIcon, InstagramIcon, LinkedinIcon, XIcon } from './icons'

export const Footer = () => {
  return (
    <footer className="w-full h-full max-h-[600px] bg-black">
      <div className="flex flex-col items-start justify-center w-full h-full p-12 px-8 gap-y-10">
        <div className='p-4 space-y-6'>
          <div className='text-2xl font-bold'>
            <h1>GalvaGroup</h1>
          </div>
          <p className='text-gray-400 text-md'>Galvanizados Industriales del Aburrá SAS - Industrias y Galvanizados SAS</p>
          <div className='space-x-4'>
          <Link
						isExternal
						aria-label="Facebook"
						href={siteConfig.links.facebook}
					>
						<FacebookIcon className="text-gray-400" />
					</Link>
					<Link
						isExternal
						aria-label="Linkedin"
						href={siteConfig.links.linkedin}
					>
						<LinkedinIcon className="text-gray-400" />
					</Link>
					<Link
						isExternal
						aria-label="X"
						href={siteConfig.links.twitter}
					>
						<XIcon className="text-gray-400" />
					</Link>
					<Link
						isExternal
						aria-label="Instagram"
						href={siteConfig.links.instagram}
					>
						<InstagramIcon className="text-gray-400" />
					</Link>
          </div>
        </div>
        <div className='flex flex-col justify-start w-full p-4 gap-y-6 md:flex-row gap-x-10'>
          <div className='w-1/4'>
            <ul className='space-y-6 text-gray-400'>
              <p className='font-bold text-white'>Enlances Útiles</p>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>
          </div>
          <div className='w-1/4'>
            <ul className='space-y-6 text-gray-400'>
              <p className='font-bold text-white'>Nuestras Empresas</p>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>
          </div>
          <div className='w-1/4'>
            <ul className='space-y-6 text-gray-400'>
              <p className='font-bold text-white'>Redes</p>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>
          </div>
        </div>
        <div className="w-full px-4 space-y-4">
          <div className='w-full h-0.5 bg-gray-600 px-4'></div>
          <p className='text-sm text-gray-500'>© 2025 GalvaGroup. Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  )
}
