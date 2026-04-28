import { Icon } from "@iconify/react";

const socials = [
  { icon: "mdi:github", href: "https://github.com/BansiDeepak", label: "GitHub" },
  { icon: "mdi:linkedin", href: "https://linkedin.com/in/BansiDeepak", label: "LinkedIn" },
  { icon: "mdi:email-outline", href: "mailto:bansideepak2000@gmail.com", label: "Email" },
  { icon: "mdi:phone-outline", href: "tel:+917330056795", label: "Phone" },
];

export function SocialSidebar() {
  return (
    <nav aria-label="Social links" className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-20 md:left-8 md:right-auto md:top-24 md:translate-y-0 md:flex-row md:gap-5">
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target={s.href.startsWith("http") ? "_blank" : undefined}
          rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={s.label}
          className="text-matrix neon-hover hover:scale-125 cursor-pointer"
        >
          <Icon icon={s.icon} className="text-2xl md:text-[26px]" />
        </a>
      ))}
    </nav>
  );
}
