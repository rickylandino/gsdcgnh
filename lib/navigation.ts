export type NavItem = { name: string; href: string; external?: boolean }

export const navigation: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Officers & Board", href: "/officers" },
    { name: "Meetings", href: "/meetings" },
    { name: "Events", href: "/events" },
    { name: "Membership", href: "/membership" },
    { name: "Photos", href: "/gallery" },
    { name: "Breeders", href: "/breeders" },
    { name: "Club Store", href: "https://germanshepherdogclub.itemorder.com/shop/home/", external: true },
    { name: "Contact", href: "/contact" },
]

export const externalLinkProps = (item: NavItem) =>
    item.external ? { target: "_blank", rel: "noopener noreferrer" } : {}
