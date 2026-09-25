"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const products = [
  {
    title: "Trading Terminal",
    href: "/products/terminal",
    description: "Execute and manage trades with a modern terminal.",
  },
  {
    title: "API Access",
    href: "/products/api",
    description: "Connect your systems with low-latency market APIs.",
  },
];

const marketData = [
  {
    title: "Live Quotes",
    href: "/market-data/quotes",
    description: "Real-time pricing across major instruments.",
  },
  {
    title: "Historical Data",
    href: "/market-data/historical",
    description: "Backfill charts and models with clean history.",
  },
];

const mobileLinks = [
  { title: "Products", href: "/products" },
  { title: "Market Data", href: "/market-data" },
  { title: "Pricing", href: "/pricing" },
  { title: "FAQ", href: "/#faq" },
];

function HeaderButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const isPrimary = variant === "primary";

  return (
    <a
      href={href}
      role="button"
      tabIndex={0}
      data-slot="button"
      className={cn(
        "group/button shrink-0 items-stretch border-0 p-px transition duration-300 ease-in-out outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 h-9 cursor-pointer rounded-[11px]",
        isPrimary
          ? "inline-flex bg-linear-to-b from-primary/80 to-primary dark:from-primary dark:to-primary/75"
          : "hidden bg-white/50 sm:inline-flex dark:bg-neutral-600/50",
        className
      )}
    >
      <span
        data-slot="button-label"
        className={cn(
          "inline-flex h-full w-full min-w-0 items-center justify-center gap-1.5 rounded-[10px] px-2.5 text-sm font-medium whitespace-nowrap transition duration-300 ease-in-out [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
          isPrimary
            ? "bg-linear-to-b from-primary to-[color-mix(in_oklch,var(--primary),var(--foreground)_14%)] text-primary-foreground hover:from-primary/90 hover:to-primary active:from-[color-mix(in_oklch,var(--primary),var(--foreground)_22%)] active:to-[color-mix(in_oklch,var(--primary),var(--foreground)_18%)]"
            : "bg-linear-to-b from-background to-muted/60 text-foreground hover:from-muted/40 hover:to-muted aria-expanded:from-muted aria-expanded:to-muted/80 dark:from-input dark:to-input/70 dark:hover:from-input/90 dark:hover:to-input/60"
        )}
      >
        {children}
      </span>
    </a>
  );
}

function NavListItem({
  title,
  href,
  description,
}: {
  title: string;
  href: string;
  description: string;
}) {
  return (
    <li>
      <NavigationMenuLink
        render={<Link href={href} />}
        className="flex flex-col items-start gap-1 rounded-md p-3"
      >
        <div className="text-sm font-medium text-foreground">{title}</div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </NavigationMenuLink>
    </li>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-[60] bg-background/70 backdrop-blur-xl transition-[background-color,backdrop-filter] duration-300">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="cursor-pointer rounded-md focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
        >
          <BrandLogo />
        </Link>

        <NavigationMenu className="hidden max-w-none flex-1 md:flex">
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-popup-open:bg-transparent data-popup-open:hover:bg-transparent data-open:bg-transparent data-open:hover:bg-transparent data-open:focus:bg-transparent data-active:bg-transparent data-active:hover:bg-transparent data-active:focus:bg-transparent">
                Products
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-72 gap-1 p-1">
                  {products.map((item) => (
                    <NavListItem key={item.href} {...item} />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-popup-open:bg-transparent data-popup-open:hover:bg-transparent data-open:bg-transparent data-open:hover:bg-transparent data-open:focus:bg-transparent data-active:bg-transparent data-active:hover:bg-transparent data-active:focus:bg-transparent">
                Market Data
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-72 gap-1 p-1">
                  {marketData.map((item) => (
                    <NavListItem key={item.href} {...item} />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                render={<Link href="/pricing" />}
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent hover:bg-transparent focus:bg-transparent data-popup-open:bg-transparent data-popup-open:hover:bg-transparent data-open:bg-transparent data-open:hover:bg-transparent data-open:focus:bg-transparent data-active:bg-transparent data-active:hover:bg-transparent data-active:focus:bg-transparent"
                )}
              >
                Pricing
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                render={<Link href="/#faq" />}
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent hover:bg-transparent focus:bg-transparent data-popup-open:bg-transparent data-popup-open:hover:bg-transparent data-open:bg-transparent data-open:hover:bg-transparent data-open:focus:bg-transparent data-active:bg-transparent data-active:hover:bg-transparent data-active:focus:bg-transparent"
                )}
              >
                FAQ
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-1.5">
          <HeaderButtonLink
            href="https://app.ticksconnect.com/login"
            variant="secondary"
          >
            Sign in
          </HeaderButtonLink>
          <HeaderButtonLink href="https://app.ticksconnect.com/signup">
            Get started
          </HeaderButtonLink>

          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-8 cursor-pointer rounded-[10px] bg-transparent p-px hover:bg-white/50 md:hidden dark:hover:bg-neutral-600/80"
                />
              }
            >
              <Menu aria-hidden="true" />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs">
              <SheetHeader>
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <BrandLogo className="h-6" />
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {mobileLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    {link.title}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-2 p-4">
                <HeaderButtonLink
                  href="https://app.ticksconnect.com/login"
                  variant="secondary"
                  className="inline-flex w-full sm:inline-flex"
                >
                  Sign in
                </HeaderButtonLink>
                <HeaderButtonLink
                  href="https://app.ticksconnect.com/signup"
                  className="w-full"
                >
                  Get started
                </HeaderButtonLink>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
