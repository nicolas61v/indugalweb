'use client';

import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from '@nextui-org/navbar';
import {
	DropdownItem,
	DropdownTrigger,
	Dropdown,
	DropdownMenu,
} from '@nextui-org/dropdown';
import { Link } from '@nextui-org/link';
import { link as linkStyles } from '@nextui-org/theme';
import NextLink from 'next/link';
import clsx from 'clsx';
import { siteConfig } from '@/config/site';
import Image from 'next/image';
import { Button } from '@nextui-org/button';
import { ChevronDown } from 'lucide-react';

export const Navbar = () => {
	return (
		<NextUINavbar
			className="sticky bg-white"
			maxWidth="2xl"
			height={'6rem'}
		>
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink
						className="flex items-center justify-start gap-1 transition-all duration-100 hover:scale-110"
						href="/"
					>
						<Image
							alt="GalvaGroup logo"
							src={'/logos/galvagroup-logo.png'}
							className='min-w-[130px]'
							width={190}
							height={55}
						/>
					</NextLink>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent
				className="hidden lg:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<ul className="items-center justify-start hidden gap-4 ml-2 sm:flex">
					{siteConfig.navItems.map((item) =>
						item.dropdownItems ? (
							<Dropdown
								key={item.label}
								className="bg-white rounded-none text-primary"
								data-hover="text-white"
							>
								<NavbarItem className='data-[hover=true]:transition-colors data-[hover=true]:bg-green data-[hover=true]:text-white'>
									<DropdownTrigger>
										<Button
											disableRipple
											className="font-medium text-lg data-[active=true]:text-primary data-[active=true]:font-medium px-0 bg-transparent text-primary"
											endContent={<ChevronDown />}
											radius="sm"
										>
											{item.label}
										</Button>
									</DropdownTrigger>
								</NavbarItem>
								<DropdownMenu
									key={item.label}
									aria-label={item.label}
									className="w-[300px]"
									itemClasses={{
										base: 'gap-4',
									}}
								>
									{item.dropdownItems.items.map((item) => (
										<DropdownItem
											key={item.label}
											className="data-[hover=true]:bg-transparent data-[hover=true]:opacity-50 transition-all duration-100"
										>
											<NextLink
												className={clsx(
													linkStyles({
														color: 'primary',
														size: 'lg',
													}),
												)}
												color="foreground"
												href={item.href}
											>
												{item.label}
											</NextLink>
										</DropdownItem>
									))}
								</DropdownMenu>
							</Dropdown>
						) : (
							<NavbarItem key={item.href}>
								<NextLink
									className={clsx(
										linkStyles({
											color: 'primary',
											size: 'lg',
										}),
										'font-medium data-[active=true]:text-primary data-[active=true]:font-medium'
									)}
									color="foreground"
									href={item.href}
								>
									{item.label}
								</NextLink>
							</NavbarItem>
						)
					)}
				</ul>
			</NavbarContent>

			<NavbarContent
				className="pl-4 font-bold lg:hidden basis-1 text-primary"
				justify="end"
			>
				{/* <ThemeSwitch /> */}
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu className="bg-white">
				<div className="flex flex-col gap-2 mx-4 mt-2">
				{siteConfig.navMenuItems.map((item) =>
						item.dropdownItems ? (
							<Dropdown
								key={item.label}
								className="bg-white rounded-none text-primary"
								data-hover="text-white"
							>
								<NavbarItem className='data-[hover=true]:transition-colors data-[hover=true]:bg-green data-[hover=true]:text-white'>
									<DropdownTrigger>
										<Button
											disableRipple
											className="font-medium text-lg data-[active=true]:text-primary data-[active=true]:font-medium px-0 bg-transparent text-primary"
											endContent={<ChevronDown />}
											radius="sm"
										>
											{item.label}
										</Button>
									</DropdownTrigger>
								</NavbarItem>
								<DropdownMenu
									key={item.label}
									aria-label={item.label}
									className="w-[300px]"
									itemClasses={{
										base: 'gap-4',
									}}
								>
									{item.dropdownItems.items.map((item) => (
										<DropdownItem
											key={item.label}
											className="data-[hover=true]:bg-transparent data-[hover=true]:opacity-50 transition-all duration-100"
										>
											<NextLink
												className={clsx(
													linkStyles({
														color: 'primary',
														size: 'lg',
													}),
												)}
												color="foreground"
												href={item.href}
											>
												{item.label}
											</NextLink>
										</DropdownItem>
									))}
								</DropdownMenu>
							</Dropdown>
						) : (
							<NavbarItem key={item.href}>
								<NextLink
									className={clsx(
										linkStyles({
											color: 'primary',
											size: 'lg',
										}),
										'font-medium data-[active=true]:text-primary data-[active=true]:font-medium'
									)}
									color="foreground"
									href={item.href}
								>
									{item.label}
								</NextLink>
							</NavbarItem>
						)
					)}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
