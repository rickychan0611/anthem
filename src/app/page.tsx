"use client";

import { useEffect, useState } from "react";
import {
  Brush,
  Building2,
  CheckCircle,
  ClipboardList,
  Megaphone,
  Monitor,
  MousePointerClick,
  QrCode,
  RadioTower,
  Settings,
  Share2,
  ShoppingBag,
  Store,
  Users,
} from "lucide-react";

const logoUrl = "/anthem-logo.png";

const heroImage = "/hero.png";
const locationsMapImage = "/locations-map.png";

const screenImages = [
  {
    label: "Boutiques",
    src: "/shop.png",
  },
  {
    label: "City Streets",
    src: "/street.png",
  },
  {
    label: "Medical Clinics",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBg7X0I6AdZVY_bzMTviFVeS1yvmZhG1SbGsmXAQVOnLHuQSjoHB_0c0YHQalPoef4YjXSzcOPH1n3lYwr1N8xnTGpNBBgJhdNHY_bbwyHp1q_Ja5KdT5sbxadKEE_IedrxXMnWBi-NN3C4HexsRYohytk_CNo2XD9FTrW2eLP3deBRmfc-tVrMlFGiYSh0czTzKwyeiYNZUjLZG-zovo8Ru-YiLyLJfxBrMga_wNXkLLcMLS8Im4nN8ASj6cnXflJ1shC-j0lCWRg",
  },
];

const serviceImage = "computer.png"
const navItems = ["Solutions", "Locations", "Services", "How It Works", "Contact"];

const locationTypes = [
  { label: "Shopping Malls", icon: ShoppingBag },
  { label: "Commercial Areas", icon: Building2 },
  { label: "City Streets", icon: Users },
  { label: "Building Lobbies", icon: Store },
];

const brandBenefits = [
  {
    title: "Promote Offers",
    body: "Instantly broadcast your latest sales and limited-time offers to people already out shopping.",
    icon: Megaphone,
  },
  {
    title: "Update Remotely",
    body: "Manage your screen network from a single dashboard with real-time content deployment.",
    icon: Settings,
  },
  {
    title: "Drive Action",
    body: "Integrated QR codes turn passive viewers into active leads and website visitors instantly.",
    icon: QrCode,
  },
  {
    title: "Local Ad Hub",
    body: "Unlock new revenue streams by offering ad space to complementary local businesses.",
    icon: Store,
  },
];

const mediaServices = [
  {
    title: "Content Design",
    body: "Custom creative designed for maximum local impact.",
    icon: Brush,
  },
  {
    title: "Management",
    body: "Active monitoring to keep screens healthy and campaigns live.",
    icon: Monitor,
  },
  {
    title: "QR Integration",
    body: "Custom landing pages for your screen campaigns.",
    icon: MousePointerClick,
  },
  {
    title: "Monthly Support",
    body: "Local support available when you need help.",
    icon: ClipboardList,
  },
];

const campaignSteps = [
  ["Choose Goal", "Identify your target local audience and campaign objectives."],
  ["Create Content", "Our design team crafts high-impact visuals for your screens."],
  ["Launch", "Your campaign goes live across selected premium locations."],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-surface text-on-surface">
      <Header />
      <Hero />
      <LocationStrip />
      <Benefits />
      <ScreensGrid />
      <MediaServices />
      <CampaignSteps />
      <ContactCta />
      <Footer />
    </main>
  );
}

function Header() {
  const [activeItem, setActiveItem] = useState(navItems[0]);

  useEffect(() => {
    const syncActiveItem = () => {
      const hash = window.location.hash.replace("#", "");
      const item = navItems.find(
        (navItem) => navItem.toLowerCase().replaceAll(" ", "-") === hash,
      );

      if (item) {
        setActiveItem(item);
      }
    };

    syncActiveItem();
    window.addEventListener("hashchange", syncActiveItem);

    return () => window.removeEventListener("hashchange", syncActiveItem);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border-light bg-surface shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-container-max items-center justify-between gap-4 px-gutter">
        <a className="flex min-w-0 items-center gap-3" href="#top" aria-label="Anthem Media home">
          <img alt="" className="h-[59px] w-auto shrink-0" src={logoUrl} />
          <span className="truncate font-display text-xl font-bold">Anthem Media</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              className={
                activeItem === item
                  ? "border-b-2 border-primary pb-1 font-bold text-primary"
                  : "text-on-surface-variant transition-colors hover:text-primary"
              }
              href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
              key={item}
              onClick={() => setActiveItem(item)}
            >
              {item}
            </a>
          ))}
        </nav>
        <a
          className="hidden rounded-full bg-primary-container px-6 py-3 font-bold text-on-primary-container shadow-sm transition-all hover:bg-mint-hover sm:inline-flex"
          href="#contact"
        >
          Get a Free Demo
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[86vh] items-center px-gutter pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div className="mx-auto grid max-w-container-max grid-cols-1 items-center gap-12 text-white lg:grid-cols-12 lg:gap-16">
        <div className="space-y-8 lg:col-span-6">

          <h1 className="max-w-3xl font-display text-5xl font-bold leading-tight text-on-surface sm:text-6xl lg:text-7xl">
            Turn Everyday
            <br />
            Screens Into
            <br />
            <span className="text-primary-container">Local Attention</span>
          </h1>
          <p className="max-w-xl text-lg leading-8 text-on-surface-variant">
            Anthem Media helps businesses dominate local attention
            through premium digital-out-of-home (DOOH) screens in high-traffic commercial
            hubs.
          </p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <a
              className="inline-flex items-center justify-center rounded-full bg-primary-container px-8 py-4 font-bold text-[#121212] shadow-md transition-all hover:-translate-y-0.5 hover:bg-on-primary-container"
              href="#contact"
            >
              Get a Free Demo
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-border-light bg-white px-8 py-4 font-bold text-on-surface transition-all hover:bg-surface-container-low"
              href="#how-it-works"
            >
              See How It Works
            </a>
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="relative overflow-hidden rounded-card border-4 border-white shadow-2xl">
            <img
              alt="Digital signage in a modern cafe"
              className="aspect-[4/3] w-full object-cover"
              src={heroImage}
            />
            <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-primary/90 px-4 py-2 text-xs font-bold uppercase text-white shadow-lg backdrop-blur-sm">
              <span className="size-2 rounded-full bg-white" />
              Live Screen
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationStrip() {
  return (
    <section
      id="locations"
      className="relative z-20 flex min-h-[20rem] items-center justify-center bg-cover bg-center px-gutter py-16 md:min-h-[20rem] md:py-24"
      style={{ backgroundImage: `url(${locationsMapImage})` }}
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 sm:rounded-full  bg-primary-container/40 p-6 text-on-surface shadow-lg backdrop-blur-md sm:grid-cols-2 sm:p-8 lg:grid-cols-4 lg:gap-6">
        {locationTypes.map(({ label, icon: Icon }) => (
          <div className="flex items-center gap-4 items-center justify-center" key={label}>
            <Icon aria-hidden className="size-8 text-on-surface" />
            <span className="font-display text-lg font-semibold text-on-surface">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section id="solutions" className="px-gutter py-section-gap-mobile md:py-[61px]">
      <SectionIntro
        title="Empowering Local Brands"
        body="Our technology bridges the gap between digital content and the physical local community."
      />
      <div className="mx-auto grid max-w-container-max grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {brandBenefits.map(({ title, body, icon: Icon }) => (
          <article
            className="group rounded-card border border-border-light bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            key={title}
          >
            <div className="mb-6 flex size-16 items-center justify-center rounded-lg bg-mint-soft transition-transform group-hover:scale-105">
              <Icon aria-hidden className="size-9 text-primary" />
            </div>
            <h3 className="mb-3 font-display text-2xl font-semibold">{title}</h3>
            <p className="leading-7 text-on-surface-variant">{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ScreensGrid() {
  return (
    <section className="bg-surface-container-low px-gutter py-section-gap-mobile md:py-[60px]">
      <div className="mx-auto mb-12 max-w-container-max">
        <h2 className="mb-4 font-display text-4xl font-bold leading-tight md:text-5xl">
          Screens in the Wild
        </h2>
        <p className="max-w-xl text-lg leading-8 text-on-surface-variant">
          From bubble tea shops to medical clinics, our screens are positioned
          where local attention naturally gathers.
        </p>
      </div>
      <div className="mx-auto grid max-w-container-max grid-cols-1 gap-6 md:grid-cols-3">
        {screenImages.map(({ label, src }) => (
          <figure
            className="group relative h-80 overflow-hidden rounded-card sm:h-96 md:h-[430px]"
            key={label}
          >
            <img
              alt={`${label} with Anthem Media digital signage`}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              src={src}
            />
            <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-black/65 to-transparent p-8">
              <span className="font-display text-2xl font-semibold text-white">
                {label}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function MediaServices() {
  return (
    <section id="services" className="px-gutter py-section-gap-mobile md:py-[60px]">
      <div className="mx-auto grid max-w-container-max grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-8">
          <div>
            <h2 className="mb-4 font-display text-4xl font-bold leading-tight md:text-5xl">
              End-to-End Media Management
            </h2>
            <p className="text-lg leading-8 text-on-surface-variant">
              We provide the strategy, design, and support to ensure your message
              lands clearly every time.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {mediaServices.map(({ title, body, icon: Icon }) => (
              <article
                className="rounded-card border border-border-light bg-surface-neutral p-6"
                key={title}
              >
                <Icon aria-hidden className="mb-4 size-8 text-primary" />
                <h3 className="mb-2 font-bold">{title}</h3>
                <p className="text-sm leading-6 text-on-surface-variant">{body}</p>
              </article>
            ))}
          </div>
        </div>
        <img
          alt="Media strategist reviewing digital signage layouts"
          className="aspect-[5/4] w-full rounded-card object-cover shadow-xl"
          src={serviceImage}
        />
      </div>
    </section>
  );
}

function CampaignSteps() {
  return (
    <section
      id="how-it-works"
      className="bg-on-surface px-gutter py-section-gap-mobile text-white md:py-[70px]"
    >
      <div className="mx-auto max-w-container-max">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-display text-4xl font-bold leading-tight md:text-5xl">
            How Your Campaign Works
          </h2>
          <p className="text-lg leading-8 text-surface-container/80">
            Simple, transparent, and effective local advertising.
          </p>
        </div>
        <div className="relative isolate grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="absolute left-0 top-10 z-0 hidden h-px w-full bg-white/20 md:block" />
          {campaignSteps.map(([title, body], index) => (
            <article className="relative z-10 space-y-5 text-center md:text-left" key={title}>
              <div
                className={`mx-auto flex size-20 items-center justify-center rounded-full text-3xl font-bold md:mx-0 ${index === 0
                    ? "bg-primary-container text-on-primary-container"
                    : "border border-white/20 bg-on-surface text-white"
                  }`}
              >
                {index + 1}
              </div>
              <h3 className="font-display text-2xl font-semibold">{title}</h3>
              <p className="leading-7 text-white/70">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCta() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-mint-soft px-gutter py-section-gap-mobile md:py-section-gap"
    >
      <div className="mx-auto grid max-w-container-max grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 className="mb-8 font-display text-4xl font-bold leading-tight text-on-surface md:text-6xl">
            Let&apos;s Put Your Business On Screen
          </h2>
          <p className="mb-10 text-lg leading-8 text-on-surface-variant">
            Join businesses seeing growth through Anthem Media&apos;s
            digital-out-of-home network. Book your personalized demo today.
          </p>
          <div className="space-y-5">
            {[
              "100% locally owned and operated",
              "Zero-hassle installation and support",
              "Flexible advertising packages",
            ].map((item) => (
              <div className="flex items-start gap-4" key={item}>
                <CheckCircle aria-hidden className="mt-0.5 size-6 text-primary" />
                <span className="font-bold text-on-surface">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <form className="rounded-card border border-border-light bg-white p-6 shadow-2xl sm:p-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <LabelInput label="Your name" placeholder="" type="text" />
            <LabelInput
              label="Business name"
              placeholder=""
              type="text"
            />
          </div>
          <LabelInput
            className="mt-6"
            label="Website URL"
            placeholder=""
            type="url"
          />
          <LabelInput
            className="mt-6"
            label="Email address"
            placeholder=""
            type="email"
          />
          <button
            className="mt-6 w-full rounded-lg bg-mint-hover py-5 font-bold text-on-primary-container shadow-md transition-all hover:-translate-y-0.5 hover:bg-on-primary-container"
            type="submit"
          >
            Submit My Request
          </button>
          <p className="mt-4 text-center text-xs text-on-surface-variant/70">
            We respect your privacy. No spam, ever.
          </p>
        </form>
      </div>
    </section>
  );
}

function LabelInput({
  label,
  placeholder,
  type,
  className = "",
}: {
  label: string;
  placeholder: string;
  type: string;
  className?: string;
}) {
  return (
    <label className={`block space-y-2 ${className}`}>
      <span className="ml-1 block text-xs font-bold uppercase text-on-surface-variant">
        {label}
      </span>
      <input
        className="w-full rounded-lg border border-border-light px-5 py-4 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary-container"
        placeholder={placeholder}
        type={type}
      />
    </label>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-surface-container px-gutter py-section-gap-mobile text-on-surface md:py-section-gap">
      <div className="mx-auto grid max-w-container-max grid-cols-1 gap-10 md:grid-cols-12">
        <div className="space-y-6 md:col-span-4">
          <div className="flex items-center gap-3">
            <img alt="" className="h-10 w-auto opacity-80" src={logoUrl} />
            <span className="font-display text-xl font-bold">Anthem Media</span>
          </div>
          <p className="max-w-sm leading-7 text-on-surface-variant">
            Premier digital-out-of-home (DOOH) media network, connecting
            local businesses with the community through smart digital signage.
          </p>
          <div className="flex gap-3">
            {[Share2, RadioTower].map((Icon, index) => (
              <a
                aria-label={index === 0 ? "Share Anthem Media" : "Visit Anthem Media online"}
                className="flex size-10 items-center justify-center rounded-full bg-white text-primary shadow-sm transition-all hover:bg-primary hover:text-white"
                href="#"
                key={index}
              >
                <Icon aria-hidden className="size-5" />
              </a>
            ))}
          </div>
        </div>
        <FooterLinks title="Company" links={["Solutions", "Locations", "Services"]} />
        <FooterLinks
          title="Resources"
          links={["How It Works", "Case Studies", "Contact"]}
        />
        <div className="space-y-5 md:col-span-4">
          <h3 className="font-bold">Stay Updated</h3>
          <form className="flex gap-2">
            <input
              className="min-w-0 flex-1 rounded-lg border border-border-light bg-white px-4 outline-none focus:ring-2 focus:ring-primary-container"
              placeholder="Your email"
              type="email"
            />
            <button
              className="rounded-lg bg-mint-hover px-5 py-3 font-bold text-on-primary-container transition-all hover:bg-on-primary-container"
              type="submit"
            >
              Join
            </button>
          </form>
          <p className="text-xs text-on-surface-variant">
            © 2026 Anthem Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="space-y-5 md:col-span-2">
      <h3 className="font-bold">{title}</h3>
      <nav className="flex flex-col gap-3" aria-label={title}>
        {links.map((link) => (
          <a
            className="text-on-surface-variant transition-all hover:text-primary hover:underline"
            href={`#${link.toLowerCase().replaceAll(" ", "-")}`}
            key={link}
          >
            {link}
          </a>
        ))}
      </nav>
    </div>
  );
}

function SectionIntro({ title, body }: { title: string; body: string }) {
  return (
    <div className="mx-auto mb-12 max-w-container-max text-center md:mb-16">
      <h2 className="mb-4 font-display text-4xl font-bold leading-tight md:text-5xl">
        {title}
      </h2>
      <p className="mx-auto max-w-2xl text-lg leading-8 text-on-surface-variant">
        {body}
      </p>
    </div>
  );
}
