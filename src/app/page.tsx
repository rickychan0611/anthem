"use client";

import { useEffect, useRef, useState } from "react";
import {
  Brush,
  Building2,
  Megaphone,
  Monitor,
  QrCode,
  ShoppingBag,
  ShoppingCart,
  Users,
  X,
} from "lucide-react";

const logoUrl = "/anthem-logo.png";

const heroImage = "/hero.png";
const locationsMapImage = "/locations-map.png";

const screenImages = [
  { label: "Tuth Dental", src: "/TuthDental.png" },
  { label: "RBC", src: "/RBC1.png" },
  { label: "Coast Capital", src: "/CoastCaptial.png" },
  { label: "BMO", src: "/BMO.png" },
  { label: "Pegasus Health", src: "/Pegasus.png" },
  { label: "Honda", src: "/Honda.png" },
];

const navItems = [
  { label: "Home", href: "#top" },
  { label: "For Advertisers", href: "#for-advertisers" },
  { label: "Become a Host", href: "#become-a-host" },
  { label: "Contact", href: "#contact" },
];

const locationTypes = [
  { label: "Newcomer Centres", icon: Users },
  { label: "Malls & Retail", icon: ShoppingBag },
  { label: "Supermarkets", icon: ShoppingCart },
  { label: "Building Lobbies", icon: Building2 },
];

const brandBenefits = [
  {
    title: "Reach",
    body: "Be present and unmissable in front of your key customers for growth.",
    icon: Megaphone,
  },
  {
    title: "Inform",
    body: "Make potential customers aware of your latest promos and offers.",
    icon: Monitor,
  },
  {
    title: "Convert",
    body: "Include a QR code, phone number, or other info to engage and convert.",
    icon: QrCode,
  },
  {
    title: "Inspire",
    body: "Make use of 15- or 30-spots to showcase your creativity through an image or video.",
    icon: Brush,
  },
];

const hostBenefits = [
  {
    title: "Modernize Your Business",
    body: "We provide our hosts with premium high-resolution screens free of charge.",
    icon: Monitor,
  },
  {
    title: "Announce Offers",
    body: "Two 15-second spots are reserved for your promos, offers, and specials.",
    icon: Megaphone,
  },
  {
    title: "Revenue Share",
    body: "Generate passive income whenever we run a paid campaign.",
    icon: Building2,
  },
];

const hostSteps = [
  [
    "Contact Us",
    "Reach out to us using the form below and we'll schedule to meet you at your location.",
  ],
  [
    "Feasibility Check",
    "We'll propose screen placements and give you an idea of the work we'll need to do (if any).",
  ],
  [
    "Setup & Launch",
    "We provide all required hardware, and cover installation and setup with zero disruption to your business.",
  ],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-surface text-on-surface">
      <Header />
      <Hero />
      <LocationStrip />
      <Benefits />
      <HostBenefits />
      <HostSteps />
      <ContactCta />
      <Footer />
    </main>
  );
}

function Header() {
  const [activeItem, setActiveItem] = useState(navItems[0].label);

  useEffect(() => {
    const syncActiveItem = () => {
      const hash = window.location.hash || "#top";
      const item = navItems.find((navItem) => navItem.href === hash);

      if (item) {
        setActiveItem(item.label);
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
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {navItems.map(({ label, href }) => (
            <a
              className={
                activeItem === label
                  ? "border-b-2 border-primary pb-1 font-bold text-primary"
                  : "text-on-surface-variant transition-colors hover:text-primary"
              }
              href={href}
              key={label}
              onClick={() => setActiveItem(label)}
            >
              {label}
            </a>
          ))}
        </nav>
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
            Out-of-Home
            <br />
            Solutions for
            <br />
            <span className="text-primary-container">Multicultural Advertising</span>
          </h1>
          <p className="max-w-xl text-lg leading-8 text-on-surface-variant">
            Our out-of-home advertising solutions help brands and businesses get
            their message in front of newcomers and multicultural audiences in
            high-traffic locations.
          </p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <a
              className="inline-flex items-center justify-center rounded-full bg-primary-container px-8 py-4 font-bold text-[#121212] shadow-md transition-all hover:-translate-y-0.5 hover:bg-on-primary-container"
              href="#contact"
            >
              Talk to Us Today
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-border-light bg-white px-8 py-4 font-bold text-on-surface transition-all hover:bg-surface-container-low"
              href="#become-a-host"
            >
              Become a Host
            </a>
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="relative aspect-[4/3] overflow-hidden rounded-card border-4 border-white shadow-2xl">
            <img
              alt="Digital signage in a modern cafe with diverse customers"
              className="h-full w-full object-cover"
              src={heroImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationStrip() {
  return (
    <section
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
  const [selectedCampaign, setSelectedCampaign] = useState<
    (typeof screenImages)[number] | null
  >(null);

  useEffect(() => {
    if (!selectedCampaign) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedCampaign(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedCampaign]);

  return (
    <section id="for-advertisers" className="px-gutter py-section-gap-mobile md:py-[61px]">
      <SectionIntro
        title="Helping Advertisers Effectively Reach Newcomers and Ethnic Audiences"
        body="Our high resolution displays are strategically placed inside high traffic locations frequently visited by newcomers, international students, and members of various ethnic communities."
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
      <div className="mx-auto mt-16 max-w-container-max md:mt-20">
        <h2 className="mb-12 font-display text-4xl font-bold leading-tight md:text-5xl">
          Some of Our Past Campaigns
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
          {screenImages.map(({ label, src }) => (
            <button
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-card border-0 p-0 text-left"
              key={label}
              onClick={() => setSelectedCampaign({ label, src })}
              type="button"
            >
              <img
                alt={`${label} with Anthem Media digital signage`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={src}
              />
              <span className="absolute inset-0 flex items-end bg-gradient-to-t from-black/65 to-transparent p-4 sm:p-6">
                <span className="font-display text-lg font-semibold text-white sm:text-xl">
                  {label}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {selectedCampaign ? (
        <div
          aria-label={selectedCampaign.label}
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedCampaign(null)}
          role="dialog"
        >
          <button
            aria-label="Close enlarged image"
            className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            onClick={() => setSelectedCampaign(null)}
            type="button"
          >
            <X aria-hidden className="size-6" />
          </button>
          <div
            className="relative w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              alt={`${selectedCampaign.label} with Anthem Media digital signage`}
              className="max-h-[85vh] w-full rounded-card object-contain"
              src={selectedCampaign.src}
            />
            <p className="mt-4 text-center font-display text-xl font-semibold text-white">
              {selectedCampaign.label}
            </p>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function HostBenefits() {
  return (
    <section className="px-gutter py-section-gap-mobile md:py-[60px]">
      <SectionIntro
        title="Benefits of Becoming a Host"
        body="Becoming a host for our screen network is extremely simple and brings about several benefits for your business."
      />
      <div className="mx-auto max-w-container-max overflow-hidden rounded-card border border-border-light divide-y divide-border-light">
        {hostBenefits.map(({ title, body, icon: Icon }) => (
          <article
            className="flex flex-col gap-4 bg-white p-6 sm:flex-row sm:items-start sm:gap-6 sm:p-8"
            key={title}
          >
            <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-mint-soft">
              <Icon aria-hidden className="size-8 text-primary" />
            </div>
            <div className="min-w-0">
              <h3 className="mb-2 font-display text-xl font-semibold sm:text-2xl">{title}</h3>
              <p className="leading-7 text-on-surface-variant">{body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function HostSteps() {
  return (
    <section
      id="become-a-host"
      className="bg-on-surface px-gutter py-section-gap-mobile text-white md:py-[70px]"
    >
      <div className="mx-auto max-w-container-max">
        <h2 className="mb-16 text-center font-display text-4xl font-bold leading-tight md:text-5xl">
          3 Steps to Become a Host
        </h2>
        <div className="relative isolate grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="absolute left-0 top-10 z-0 hidden h-px w-full bg-white/20 md:block" />
          {hostSteps.map(([title, body], index) => (
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
      <div className="mx-auto grid max-w-container-max grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 className="mb-6 font-display text-4xl font-bold leading-tight text-on-surface md:text-5xl">
            Contact Us Today
          </h2>
          <p className="text-lg leading-8 text-on-surface-variant">
            Whether you&apos;re a potential advertiser or interested in becoming a host
            for our screens, feel free to drop us a message and we&apos;ll be in touch
            with you shortly!
          </p>
        </div>
        <form className="rounded-card border border-border-light bg-white p-6 shadow-2xl sm:p-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <LabelInput label="Your Name" placeholder="" required type="text" />
            <LabelInput label="Business Name" placeholder="" required type="text" />
          </div>
          <LabelInput
            className="mt-6"
            label="Email Address"
            placeholder=""
            required
            type="email"
          />
          <LabelInput
            className="mt-6"
            label="Website URL"
            optional
            placeholder=""
            type="url"
          />
          <LabelInput
            className="mt-6"
            label="Phone Number"
            placeholder=""
            required
            type="tel"
          />
          <LabelTextarea
            className="mt-6"
            label="Your Message"
            placeholder=""
            required
          />
          <button
            className="mt-6 w-full rounded-lg bg-mint-hover py-5 font-bold text-on-primary-container shadow-md transition-all hover:-translate-y-0.5 hover:bg-on-primary-container"
            type="submit"
          >
            Submit
          </button>
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
  required = false,
  optional = false,
}: {
  label: string;
  placeholder: string;
  type: string;
  className?: string;
  required?: boolean;
  optional?: boolean;
}) {
  return (
    <label className={`block space-y-2 ${className}`}>
      <span className="ml-1 block text-xs font-bold uppercase text-on-surface-variant">
        {label}
        {required ? <span className="text-primary"> *</span> : null}
        {optional ? (
          <span className="font-normal normal-case text-on-surface-variant/70">
            {" "}
            (optional)
          </span>
        ) : null}
      </span>
      <input
        className="w-full rounded-lg border border-border-light px-5 py-4 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary-container"
        placeholder={placeholder}
        required={required}
        type={type}
      />
    </label>
  );
}

function LabelTextarea({
  label,
  placeholder,
  className = "",
  required = false,
}: {
  label: string;
  placeholder: string;
  className?: string;
  required?: boolean;
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const resizeTextarea = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  return (
    <label className={`block space-y-2 ${className}`}>
      <span className="ml-1 block text-xs font-bold uppercase text-on-surface-variant">
        {label}
        {required ? <span className="text-primary"> *</span> : null}
      </span>
      <textarea
        className="min-h-32 w-full resize-none overflow-hidden rounded-lg border border-border-light px-5 py-4 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary-container"
        onInput={resizeTextarea}
        placeholder={placeholder}
        ref={textareaRef}
        required={required}
        rows={4}
      />
    </label>
  );
}

function Footer() {
  return (
    <footer className="flex w-full flex-col bg-surface-container px-gutter pt-section-gap-mobile text-on-surface md:pt-section-gap">
      <div className="mx-auto flex w-full max-w-container-max flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <a aria-label="Anthem Media home" href="#top">
          <img alt="" className="h-16 w-auto md:h-24" src={logoUrl} />
        </a>
        <nav
          aria-label="Footer navigation"
          className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3"
        >
          {navItems.map(({ label, href }) => (
            <a
              className="font-medium text-on-surface-variant transition-colors hover:text-primary hover:underline"
              href={href}
              key={label}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
      <p className="mx-auto mt-12 w-full max-w-container-max border-t border-border-light pt-6 pb-8 text-center text-xs text-on-surface-variant">
        © 2026 Anthem Media. All rights reserved.
      </p>
    </footer>
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
