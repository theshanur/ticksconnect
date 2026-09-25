import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";

const productLinks = [
  { href: "/products/accounts", label: "Accounts" },
  { href: "/products/trade-copier", label: "Trade Copier" },
  { href: "/products/agents", label: "Agents" },
  { href: "/products/market-data", label: "Market Data API" },
];

const companyLinks = [
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
  { href: "/risk", label: "Risk" },
  { href: "/refunds", label: "Refunds" },
];

const linkClassName =
  "w-fit cursor-pointer rounded-md text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none";

function FooterNav({
  label,
  links,
}: {
  label: string;
  links: { href: string; label: string }[];
}) {
  return (
    <nav aria-label={label} className="flex flex-col gap-3">
      <p className="text-[11px] font-medium tracking-[0.14em] text-muted-foreground uppercase">
        {label}
      </p>
      {links.map((link) => (
        <Link key={link.href} href={link.href} className={linkClassName}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-foreground/8">
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-10 sm:px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-xs">
            <BrandLogo className="h-7 sm:h-7" />
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              One place for the accounts you already have.
            </p>
          </div>

          <FooterNav label="Product" links={productLinks} />
          <FooterNav label="Company" links={companyLinks} />
          <FooterNav label="Legal" links={legalLinks} />
        </div>

        <div className="mt-16 border-t border-foreground/10 pt-6">
          <p className="text-sm text-muted-foreground">© 2026 Ticksconnect</p>
        </div>
      </div>
    </footer>
  );
}
