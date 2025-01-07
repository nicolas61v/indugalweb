import { Link } from '@nextui-org/link';
import Image from 'next/image';
import NextLink from 'next/link';
import { siteConfig } from '@/config/site';

interface FooterLinkProps {
  href: string;
  label: string;
}

const FooterLink = ({ href, label }: FooterLinkProps) => {
  return (
    <li>
      <NextLink href={href} className="text-gray-400 hover:text-white">
        {label}
      </NextLink>
    </li>
  );
};

export const Footer = () => {
  return (
    <footer className="w-full bg-primary">
      <div className="flex flex-col items-start justify-between w-full px-8 py-8 md:flex-row md:items-center gap-y-8 md:gap-y-0">
        <div className="flex flex-col items-start justify-center w-full md:w-1/3">
          <div className="text-2xl font-bold">
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
          <p className="mt-4 text-gray-300 text-md">
            Galvanizados Industriales del Aburrá SAS - Industrias y Galvanizados SAS
          </p>
        </div>
        <div className="flex flex-col justify-center w-full mt-8 md:mt-0 md:w-1/3">
          <ul className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-8">
            {siteConfig.navItems.map((item) => (
              <FooterLink key={item.href} {...item} />
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-center w-full mt-8 md:mt-0 md:w-1/3">
          <ul className="space-y-4 text-gray-400">
            <li>{siteConfig.info.location}</li>
            <li>{siteConfig.info.email}</li>
          </ul>
        </div>
      </div>
      <div className="px-8 py-4">
        <div className="w-full h-0.5 bg-gray-600"></div>
        <p className="mt-4 text-sm text-center text-gray-400">
          © 2025 GalvaGroup. Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};