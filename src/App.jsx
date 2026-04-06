import { useEffect, useMemo, useState } from "react";

const brand = {
  name: "Fayez Alshehri Goods Wholesalers Co LLC",
  location: "Dubai, United Arab Emirates",
  whatsappUAE: "+971 50 839 2291",
  whatsappUAELink: "https://wa.me/971508392291",
  ksaContact: "+966 50 733 6603",
  kennethPhone: "+971 58 592 5075",
  kennethEmail: "kenneth2t@fayezalshehrigoods.net",
};

const categories = [
  {
    title: "Business & General Supplies",
    description:
      "Essential wholesale products for retail, office, and daily commercial operations.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Kitchen & Catering Supplies",
    description:
      "Reliable supply solutions for restaurants, cafeterias, caterers, and food service businesses.",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Industrial Cleaning Solutions",
    description:
      "Professional cleaning products and hygiene solutions for facilities and business environments.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Electrical & Utility Products",
    description:
      "Practical electrical items and utility essentials for maintenance, operations, and project needs.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Building Materials",
    description:
      "Dependable supply support for construction, renovation, and maintenance requirements.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Interior & Fit-Out Supplies",
    description:
      "Quality materials and product support for interior design, fit-out, and finishing projects across the UAE.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
];

const reasons = [
  "Consistent stock availability",
  "Competitive bulk pricing",
  "Fast and professional communication",
  "Trusted supplier network",
  "Reliable business support across UAE",
  "Access to affiliated interior design partnerships",
];

const sectors = [
  "Retail Shops",
  "Supermarkets",
  "Restaurants & Cafés",
  "Commercial Buyers",
  "Contractors",
  "Interior Design Projects",
];

const processSteps = [
  {
    title: "Inquiry",
    text: "Share your product or project requirement with our team for fast initial assessment.",
  },
  {
    title: "Quotation",
    text: "We prepare a clear, competitive quotation aligned with your business requirement.",
  },
  {
    title: "Supply & Coordination",
    text: "We support delivery, supply flow, and relevant coordination for smooth execution.",
  },
];

const testimonials = [
  {
    quote: "Reliable communication and a professional way of handling supply requirements.",
    author: "Business Client, UAE",
  },
  {
    quote: "A dependable wholesale partner with practical support and responsive service.",
    author: "Commercial Buyer, Dubai",
  },
  {
    quote: "Strong business approach, clear quotations, and confidence in project support.",
    author: "Project Partner, UAE",
  },
];

const pageLinks = [
  { key: "home", label: "Home" },
  { key: "about", label: "About Us" },
  { key: "products", label: "Products" },
  { key: "contact", label: "Contact" },
];

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1f4d3a]">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-bold md:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-lg leading-8 text-slate-600">{text}</p> : null}
    </div>
  );
}

function NavButton({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`transition ${active ? "text-rose-200" : "text-white hover:text-rose-200"}`}
    >
      {children}
    </button>
  );
}

function CategoryCard({ item }) {
  return (
    <article className="group overflow-hidden rounded-[28px] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="h-56 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
        <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
      </div>
    </article>
  );
}

function ContactCards() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="rounded-[28px] border border-white/10 bg-white/5 p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-rose-200">Managing Director</p>
        <h3 className="mt-3 text-2xl font-semibold">Fayez Mohamed Alshehri</h3>
        <div className="mt-6 space-y-4 text-slate-200">
          <p>
            <span className="font-semibold text-white">WhatsApp (UAE):</span> {brand.whatsappUAE}
          </p>
          <p>
            <span className="font-semibold text-white">Call / SMS / WhatsApp:</span> {brand.ksaContact}
          </p>
        </div>
      </div>

      <div className="rounded-[28px] border border-white/10 bg-white/5 p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-rose-200">Business Inquiries</p>
        <h3 className="mt-3 text-2xl font-semibold">Mr. Kenneth Gatdula</h3>
        <div className="mt-6 space-y-4 text-slate-200">
          <p>
            <span className="font-semibold text-white">Phone:</span> {brand.kennethPhone}
          </p>
          <p>
            <span className="font-semibold text-white">Email:</span> {brand.kennethEmail}
          </p>
        </div>
      </div>
    </div>
  );
}

function HomePage({ setPage }) {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0f241c] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1586528116493-6d7f76f36e16?auto=format&fit=crop&w=1800&q=80"
            alt="Warehouse and supply operations"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f241c] via-[#143126]/90 to-[#0f241c]/70" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-rose-200">
              Trusted wholesale & supply partner
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Reliable Product Supply for Businesses Across the UAE
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
              {brand.name} delivers dependable supply solutions, competitive pricing, and
              professional support for retailers, contractors, commercial buyers, and project partners.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => setPage("contact")}
                className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#0f241c] shadow-lg transition hover:-translate-y-0.5"
              >
                Request a Quote
              </button>
              <a
                href={brand.whatsappUAELink}
                className="rounded-xl border border-rose-200/50 px-6 py-3 text-sm font-semibold text-rose-100 transition hover:bg-white/10"
              >
                WhatsApp Now
              </a>
            </div>
          </div>

          <div className="lg:pl-10">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "UAE-Based Company",
                "Reliable Supply Chain",
                "Competitive Wholesale Pricing",
                "Serving Businesses Across UAE",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
                  <p className="text-sm uppercase tracking-[0.2em] text-rose-200">Assurance</p>
                  <p className="mt-2 text-lg font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-6 text-sm font-medium text-slate-700 md:grid-cols-4 lg:px-8">
          {[
            "UAE-Based Company",
            "Reliable Supply Chain",
            "Competitive Wholesale Pricing",
            "Serving Businesses Across UAE",
          ].map((item) => (
            <div key={item} className="rounded-xl bg-slate-50 px-4 py-4 text-center shadow-sm">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHeading
            eyebrow="About us"
            title="A Reliable Partner for Business Supply Needs"
            text="Based in Dubai, we support businesses across the UAE with dependable sourcing, responsive communication, and long-term partnership value."
          />
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our focus is not only on supply, but on creating business confidence through professionalism,
            consistency, and trusted service. We serve commercial buyers, retailers, restaurants,
            contractors, and project teams who need quality products backed by reliable support.
          </p>
          <button
            onClick={() => setPage("about")}
            className="mt-8 rounded-xl bg-[#1f4d3a] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
          >
            Learn More About Us
          </button>
        </div>
        <div className="overflow-hidden rounded-[28px] shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1400&q=80"
            alt="Supply and warehouse team"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="What we offer"
            title="Wholesale Categories Built for Business Demand"
            text="A focused product portfolio designed for practical business needs, commercial supply, and project support."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((item) => (
              <CategoryCard key={item.title} item={item} />
            ))}
          </div>
          <button
            onClick={() => setPage("products")}
            className="mt-10 rounded-xl border border-[#1f4d3a] px-6 py-3 text-sm font-semibold text-[#1f4d3a] transition hover:bg-[#1f4d3a] hover:text-white"
          >
            View Full Products Page
          </button>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr,0.9fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Why choose us"
            title="Built Around Reliability, Value, and Business Trust"
          />
          <div className="mt-8 grid gap-4">
            {reasons.map((reason) => (
              <div key={reason} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mt-1 h-3 w-3 rounded-full bg-rose-300" />
                <p className="text-lg text-slate-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] bg-[#102820] p-8 text-white shadow-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-200">Who we serve</p>
          <h3 className="mt-4 text-2xl font-bold">Supporting Diverse Business Sectors</h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {sectors.map((sector) => (
              <div key={sector} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#102820] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-200">Business solutions</p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">More Than Supply — We Deliver Connected Solutions</h2>
            <p className="mt-6 text-lg leading-8 text-slate-200">
              Beyond product sourcing and wholesale supply, we help connect clients with trusted and
              professional interior designers across the UAE through our affiliated network.
            </p>
          </div>
          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="grid gap-5">
              {[
                "Project-oriented supply support",
                "Affiliated interior design network",
                "Commercial and residential fit-out alignment",
                "Reliable contact and quotation flow",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-white/5 p-5 text-lg text-slate-100">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[32px] bg-slate-50 px-8 py-12 shadow-sm lg:px-12 lg:py-16">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1f4d3a]">Partnership call to action</p>
            <div className="mt-4 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold md:text-4xl">Start Your Business Supply Partnership Today</h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Contact our team for quotations, supply requirements, and business inquiries across Dubai and the UAE.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setPage("contact")}
                  className="rounded-xl bg-[#1f4d3a] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
                >
                  Request a Quote
                </button>
                <a
                  href={brand.whatsappUAELink}
                  className="rounded-xl border border-[#1f4d3a] px-6 py-3 text-sm font-semibold text-[#1f4d3a] transition hover:bg-[#1f4d3a] hover:text-white"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <section className="bg-[#0f241c] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-rose-200">About Fayez Alshehri Goods Wholesalers</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
            A Trusted Wholesale Supplier and Business Solutions Partner in the UAE
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            We support commercial buyers, retailers, contractors, and project teams with dependable
            supply, responsive service, and business-focused partnerships.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Company overview"
            title="Built on reliability, professionalism, and practical support"
            text="Our company is positioned to serve businesses that require confidence in supply, clarity in communication, and a partner that understands operational needs."
          />
          <p className="mt-6 text-lg leading-8 text-slate-600">
            From general commercial requirements to fit-out-related supply support, our role is to help
            businesses secure the products they need with competitive pricing and trusted coordination.
          </p>
        </div>
        <div className="overflow-hidden rounded-[28px] shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1400&q=80"
            alt="Business supply overview"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                title: "Our Mission",
                text: "To provide dependable wholesale supply solutions that help businesses operate with confidence and efficiency.",
              },
              {
                title: "Our Vision",
                text: "To be recognized as a trusted and responsive supply partner for businesses across the UAE.",
              },
              {
                title: "Our Value",
                text: "Professional communication, reliable sourcing, competitive pricing, and long-term partnership thinking.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[28px] bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="How we work"
          title="A clear and efficient business process"
          text="We keep our process straightforward so clients can move from inquiry to supply with speed and clarity."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <div key={step.title} className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1f4d3a]">Step 0{index + 1}</p>
              <h3 className="mt-4 text-2xl font-semibold">{step.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{step.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function ProductsPage() {
  return (
    <>
      <section className="bg-[#0f241c] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-rose-200">Product categories</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
            Product Categories Designed for Commercial Supply and Project Support
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            Our category structure is focused on practical needs, business continuity, and reliable sourcing.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((item) => (
              <CategoryCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Business fit"
            title="Aligned with the needs of buyers, operators, and project teams"
            text="Every category has been selected to support practical purchasing decisions and long-term business requirements."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {sectors.map((sector) => (
              <div key={sector} className="rounded-[24px] bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold">{sector}</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Supply support tailored for {sector.toLowerCase()} requiring dependable products and responsive coordination.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ContactPage() {
  return (
    <>
      <section className="bg-[#0f241c] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-rose-200">Contact us</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
            Professional Contact Channels for Supply, Quotations, and Partnerships
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            Reach out for business inquiries, quotation requests, and interior design partnership coordination.
          </p>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ContactCards />
          <div className="mt-8 rounded-[28px] border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-rose-200">Interior design partnerships</p>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-200">
              We connect clients with trusted and professional interior designers across the UAE through our affiliated network,
              supporting commercial and residential project needs with confidence and professionalism.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr,0.9fr]">
            <div className="rounded-[28px] bg-slate-50 p-8 shadow-sm">
              <h2 className="text-3xl font-bold">Business Contact Summary</h2>
              <div className="mt-6 space-y-4 text-lg text-slate-700">
                <p><span className="font-semibold">Company:</span> {brand.name}</p>
                <p><span className="font-semibold">Location:</span> {brand.location}</p>
                <p><span className="font-semibold">WhatsApp:</span> {brand.whatsappUAE}</p>
                <p><span className="font-semibold">Business Contact:</span> {brand.kennethPhone}</p>
                <p><span className="font-semibold">Email:</span> {brand.kennethEmail}</p>
              </div>
            </div>
            <div className="rounded-[28px] bg-[#102820] p-8 text-white shadow-xl">
              <h2 className="text-3xl font-bold">Request a Quote</h2>
              <p className="mt-4 text-lg leading-8 text-slate-200">
                Add your company form or Netlify form here for quotation requests, product inquiries, and project requirements.
              </p>
              <div className="mt-8 grid gap-4">
                {[
                  "Company Name",
                  "Contact Person",
                  "Phone Number",
                  "Email Address",
                  "Product / Project Requirement",
                ].map((field) => (
                  <div key={field} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-300">
                    {field}
                  </div>
                ))}
                <a
                  href={brand.whatsappUAELink}
                  className="mt-2 inline-flex w-fit rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#102820]"
                >
                  Contact via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function FayezWholesaleWebsite() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    const readHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (["home", "about", "products", "contact"].includes(hash)) {
        setPage(hash);
      }
    };

    readHash();
    window.addEventListener("hashchange", readHash);
    return () => window.removeEventListener("hashchange", readHash);
  }, []);

  const CurrentPage = useMemo(() => {
    switch (page) {
      case "about":
        return <AboutPage />;
      case "products":
        return <ProductsPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage setPage={setPage} />;
    }
  }, [page]);

  const goToPage = (nextPage) => {
    setPage(nextPage);
    window.location.hash = nextPage;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0f241c]/95 text-white backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-rose-200">Dubai, UAE</p>
            <h2 className="text-lg font-semibold tracking-wide">{brand.name}</h2>
          </div>

          <nav className="hidden items-center gap-8 text-sm md:flex">
            {pageLinks.map((item) => (
              <NavButton key={item.key} active={page === item.key} onClick={() => goToPage(item.key)}>
                {item.label}
              </NavButton>
            ))}
          </nav>

          <a
            href={brand.whatsappUAELink}
            className="rounded-xl border border-rose-200/40 px-4 py-2 text-sm font-semibold text-rose-100 transition hover:bg-white/10"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <main>{CurrentPage}</main>

      <footer className="bg-[#08130f] py-10 text-slate-300">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1.2fr,0.8fr,0.8fr] lg:px-8">
          <div>
            <h3 className="text-lg font-semibold text-white">{brand.name}</h3>
            <p className="mt-3 max-w-md leading-7 text-slate-400">
              Trusted wholesale supplier and business solutions partner serving businesses across Dubai and the UAE.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-200">Quick links</p>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              {pageLinks.map((item) => (
                <button key={item.key} onClick={() => goToPage(item.key)} className="w-fit text-left hover:text-white">
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-200">Contact</p>
            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <p>{brand.location}</p>
              <p>{brand.whatsappUAE}</p>
              <p>{brand.kennethEmail}</p>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 px-6 pt-6 text-sm text-slate-500 lg:px-8">
          © 2026 {brand.name}. All rights reserved.
        </div>
      </footer>

      <a
        href={brand.whatsappUAELink}
        className="fixed bottom-6 right-6 rounded-full bg-[#1f4d3a] px-5 py-3 text-sm font-semibold text-white shadow-2xl transition hover:-translate-y-0.5"
      >
        WhatsApp Us
      </a>
    </div>
  );
}
