import { siteConfig } from '@/config/site'
import { Link } from '@nextui-org/link'
import { FacebookIcon, InstagramIcon, LinkedinIcon, XIcon } from './icons'
import Image from 'next/image'
import NextLink from 'next/link';

export const Footer = () => {
  return (
    <footer className="w-full h-full bg-primary">
      <div className="flex flex-col items-start justify-center w-full h-full px-8 pt-12 pb-2 gap-y-10">
        <div className='p-4 space-y-6'>
          <div className='text-2xl font-bold'>
            <NextLink
              className="flex items-center justify-start gap-1 p-4 bg-white rounded w-fit"
              href="/"
            >
              <Image
                alt="GalvaGroup logo"
                src={'/logos/galvagroup-logo.png'}
                className="min-w-[130px]"
                width={190}
                height={55}
              />
            </NextLink>
          </div>
          <p className='text-gray-300 text-md'>Galvanizados Industriales del Aburrá SAS - Industrias y Galvanizados SAS</p>
          <div className='space-x-4'>
          <Link
						isExternal
						aria-label="Facebook"
						href={siteConfig.links.facebook}
					>
						<FacebookIcon className="text-gray-300" />
					</Link>
					<Link
						isExternal
						aria-label="Linkedin"
						href={siteConfig.links.linkedin}
					>
						<LinkedinIcon className="text-gray-300" />
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
						<InstagramIcon className="text-gray-300" />
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
          <p className='text-sm text-gray-400'>© 2025 GalvaGroup. Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  )
}
