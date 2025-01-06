import { siteConfig } from '@/config/site'
import { Link } from '@nextui-org/link'
import { FacebookIcon, InstagramIcon, LinkedinIcon, XIcon } from './icons'

export const Footer = () => {
  return (
    <footer className="w-full h-full">
      <div className="w-full h-full p-12 flex flex-col justify-center items-start gap-y-10 px-8">
        <div className='space-y-6 p-4'>
          <div className='text-2xl font-bold'>
            <h1>GalvaGroup</h1>
          </div>
          <p className='text-md text-gray-400'>Galvanizados Industriales del Aburrá SAS - Industrias y Galvanizados SAS</p>
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
        <div className='flex flex-col gap-y-6 md:flex-row justify-start gap-x-10 w-full p-4'>
          <div className='w-1/4'>
            <ul className='space-y-6 text-gray-400'>
              <p className='text-white font-bold'>Enlances Útiles</p>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>
          </div>
          <div className='w-1/4'>
            <ul className='space-y-6 text-gray-400'>
              <p className='text-white font-bold'>Nuestras Empresas</p>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>
          </div>
          <div className='w-1/4'>
            <ul className='space-y-6 text-gray-400'>
              <p className='text-white font-bold'>Redes</p>
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
