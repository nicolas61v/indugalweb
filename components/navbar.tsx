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
import { TopBar } from './top-bar';
import { siteConfig } from '@/config/site';
// import { ThemeSwitch } from '@/components/theme-switch';
import { Logo, FacebookIcon, LinkedinIcon, InstagramIcon, XIcon } from '@/components/icons';

export const Navbar = () => {
	return (
		<>
		<TopBar/>
		<NextUINavbar className="bg-black/20 sticky" maxWidth="xl" >
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink
						className="flex justify-start items-center gap-1"
						href="/"
					>
						<Logo />
						<p className="font-bold text-inherit">GalvaGroup</p>
					</NextLink>
				</NavbarBrand>
				<ul className="hidden sm:flex gap-4 justify-start ml-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: 'foreground' }),
									'data-[active=true]:text-primary data-[active=true]:font-medium'
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

			<NavbarContent
				className="hidden md:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden sm:flex gap-2">
					<Link
						isExternal
						aria-label="Facebook"
						href={siteConfig.links.facebook}
					>
						<FacebookIcon className="text-white" />
					</Link>
					<Link
						isExternal
						aria-label="Linkedin"
						href={siteConfig.links.linkedin}
					>
						<LinkedinIcon className="text-white" />
					</Link>
					<Link
						isExternal
						aria-label="X"
						href={siteConfig.links.twitter}
					>
						<XIcon className="text-white" />
					</Link>
					<Link
						isExternal
						aria-label="Instagram"
						href={siteConfig.links.instagram}
					>
						<InstagramIcon className="text-white" />
					</Link>
					{/* <ThemeSwitch /> */}
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				{/* <ThemeSwitch /> */}
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link color={'foreground'} href="#" size="lg">
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
		</>
	);
};
