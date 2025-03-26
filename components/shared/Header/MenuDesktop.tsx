'use client';

import * as React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

const shopItems: { title: string; href: string }[] = [
	{
		title: 'T-Shirts',
		href: '/shop/t-shirts',
	},
	{
		title: 'Hoodies',
		href: '/shop/hoodies',
	},
	{
		title: 'Sweatshirts',
		href: '/shop/sweatshirts',
	},
	{
		title: 'Shopper\u00A0Bags',
		href: '/shop/shopper-bags',
	},
	{
		title: 'Collections',
		href: '/shop/collections',
	},
];

export default function MenuDesktop() {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>
						<Link href='/shop' legacyBehavior passHref>
							Shop
						</Link>
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className=''>
							{shopItems.map((item) => (
								<ListItem
									key={item.title}
									title={item.title}
									href={item.href}
								/>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>

				<NavigationMenuItem>
					<Link href='/shop/on-sale' legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							On Sale
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>

				<NavigationMenuItem>
					<Link href='/shop/new-arrivals' legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							New Arrivals
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>

				<NavigationMenuItem>
					<Link href='/shop/authors' legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Authors
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

const ListItem = React.forwardRef<
	React.ComponentRef<'a'>,
	React.ComponentPropsWithoutRef<'a'>
>(({ className, title, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
						className
					)}
					{...props}
				>
					<div className='text-sm font-normal leading-none'>{title}</div>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = 'ListItem';
