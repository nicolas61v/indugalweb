import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from '@nextui-org/navbar';
import { Link } from '@nextui-org/link';
import { link as linkStyles } from '@nextui-org/theme';
import NextLink from 'next/link';
import clsx from 'clsx'; 
import { siteConfig } from '@/config/site';
import Image from 'next/image';

export const Navbar = () => {
	return (
		<NextUINavbar className="sticky bg-white" maxWidth="2xl" height={'6rem'}>
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink
						className="flex items-center justify-start gap-1 transition-all duration-100 hover:scale-110"
						href="/"
					>
						<Image alt='GalvaGroup logo' src={'/logos/galvagroup-logo.png'} width={190} height={55} />
					</NextLink>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent
				className="hidden md:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<ul className="justify-start hidden gap-4 ml-2 sm:flex">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: 'primary', size: 'lg'}),
									'font-medium data-[active=true]:text-primary data-[active=true]:font-medium'
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>

			<NavbarContent className="pl-4 font-bold sm:hidden basis-1 text-primary" justify="end">
				{/* <ThemeSwitch /> */}
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu className='bg-white'>
				<div className="flex flex-col gap-2 mx-4 mt-2">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link color={'primary'} href="#" size="lg">
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
