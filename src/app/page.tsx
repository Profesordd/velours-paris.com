import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";
import ProductCard from "@/components/ui/ProductCard";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { ArrowRight, Truck, RotateCcw, Shield } from "lucide-react";

const U = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=85`;

const HERO   = U("1535272126276-63decfb8c4d7", 1920);
const EDITO1 = U("1623120594168-a6d35474043b");
const EDITO2 = U("1770294759101-fae1377d4d34");
const EDITO3 = U("1609535895148-cf9f5c446290");

export default function HomePage() {
  const bestSellerSlugs = [
    "peignoir-moelleux-blanc",
    "peignoir-moelleux-vieux-rose",
    "peignoir-nid-abeille-terracotta",
    "peignoir-velours-famiglia-ecru",
  ];
  const bestSellers = bestSellerSlugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean) as typeof products;
  const newArrivals = products.filter((p) => p.badge === "NOUVEAU");

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative h-screen flex items-center md:items-end overflow-hidden">
        <Image src={HERO} alt="Velours Paris" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />

        <div className="relative z-10 px-8 md:px-16 lg:px-24 pb-0 md:pb-28 w-full max-w-4xl">
          <p className="fade-in-up d200 text-[9px] font-semibold tracking-[0.4em] uppercase text-white/50 mb-7">
            Velours Paris — Peignoirs d'exception
          </p>
          <h1 className="fade-in-up d400 text-[clamp(3rem,8vw,7rem)] font-black text-white leading-[0.88] tracking-tight mb-8">
            L'ART<br />DE LA<br />DOUCEUR.
          </h1>
          <p className="fade-in-up d600 text-white/65 text-sm md:text-base max-w-sm mb-10 leading-relaxed">
            Coton éponge, velours, nid d'abeille.<br />
            Fabriqués en Europe, pour s'accorder du temps.
          </p>
          <div className="fade-in-up d800 flex flex-wrap gap-4">
            <Link href="/boutique"
              className="bg-white text-[#1C1C1C] px-8 py-3.5 font-bold text-[10px] tracking-[0.2em] uppercase hover:bg-[#F5F1E8] transition-colors inline-flex items-center gap-2">
              Découvrir les peignoirs <ArrowRight size={12} />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm py-2.5 ticker-wrap">
          <div className="ticker-content text-white/40 text-[9px] uppercase tracking-[0.3em] font-medium">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="mr-16">
                Velours Paris &nbsp;·&nbsp; Coton 550 g/m² &nbsp;·&nbsp; Fabrication Européenne &nbsp;·&nbsp; Livraison Offerte &nbsp;·&nbsp; Retours Gratuits 30 jours
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── RÉASSURANCE ──────────────────────────────────────────── */}
      <section className="border-b border-[#E8E3DA] bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#E8E3DA]">
            {[
              { icon: <Truck size={14} strokeWidth={1.5} />, label: "Livraison gratuite en France" },
              { icon: <RotateCcw size={14} strokeWidth={1.5} />, label: "Retours gratuits sous 30 jours" },
              { icon: <Shield size={14} strokeWidth={1.5} />, label: "Paiement 100 % sécurisé" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-center gap-2.5 py-3 sm:py-2 text-[10px] tracking-[0.12em] uppercase font-medium text-[#7A7670]">
                <span className="text-[#B8963E]">{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BESTSELLERS ───────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[9px] font-semibold tracking-[0.3em] uppercase text-[#B8963E] mb-3">Nos incontournables</p>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-black text-[#1C1C1C] leading-tight">Les Bestsellers</h2>
          </div>
          <Link href="/boutique"
            className="hidden md:flex items-center gap-1.5 text-[10px] tracking-[0.15em] uppercase font-semibold text-[#7A7670] hover:text-[#1C1C1C] transition-colors">
            Tout voir <ArrowRight size={12} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-8">
          {bestSellers.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </section>

      {/* ── ÉDITO 1 ──────────────────────────────────────────────── */}
      <section className="bg-[#F5F1E8] border-y border-[#E8E3DA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 min-h-[560px]">
            <div className="relative min-h-[400px] md:min-h-full overflow-hidden">
              <Image src={EDITO1} alt="Peignoir moelleux" fill className="object-cover object-center" unoptimized />
            </div>
            <div className="flex flex-col justify-center px-10 md:px-16 lg:px-24 py-16 bg-[#F5F1E8]">
              <p className="text-[9px] font-semibold tracking-[0.3em] uppercase text-[#B8963E] mb-5">Coton Éponge</p>
              <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-[#1C1C1C] leading-tight mb-6">
                Le moelleux<br />signature.
              </h2>
              <p className="text-[#7A7670] text-sm leading-relaxed mb-8 max-w-sm">
                Nos peignoirs moelleux en coton 550 g/m² sont conçus pour une douceur
                maximale dès la première utilisation. Bouclettes longues, tombé généreux,
                coloris tissés — ils ne se déforment pas et ne décolorent pas au lavage.
              </p>
              <Link href="/boutique"
                className="self-start inline-flex items-center gap-2 bg-[#1C1C1C] text-white text-[10px] font-bold tracking-[0.2em] uppercase px-8 py-3.5 hover:opacity-75 transition-opacity">
                Voir la collection <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── NOUVEAUTÉS ────────────────────────────────────────────── */}
      {newArrivals.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[9px] font-semibold tracking-[0.3em] uppercase text-[#B8963E] mb-3">Vient d'arriver</p>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-black text-[#1C1C1C] leading-tight">Les Nouveautés</h2>
            </div>
            <Link href="/boutique"
              className="hidden md:flex items-center gap-1.5 text-[10px] tracking-[0.15em] uppercase font-semibold text-[#7A7670] hover:text-[#1C1C1C] transition-colors">
              Tout voir <ArrowRight size={12} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-8">
            {newArrivals.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </section>
      )}

      {/* ── ÉDITO 2 ──────────────────────────────────────────────── */}
      <section className="border-b border-[#E8E3DA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 min-h-[560px]">
            <div className="flex flex-col justify-center px-10 md:px-16 lg:px-24 py-16 bg-white order-2 md:order-1">
              <p className="text-[9px] font-semibold tracking-[0.3em] uppercase text-[#B8963E] mb-5">Notre philosophie</p>
              <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-[#1C1C1C] leading-tight mb-6">
                S'accorder<br />du temps.
              </h2>
              <p className="text-[#7A7670] text-sm leading-relaxed mb-8 max-w-sm">
                Un bon peignoir, c'est le premier geste d'une journée posée.
                Chez Velours Paris, chaque pièce est pensée pour durer,
                envelopper et réchauffer — bien au-delà de la salle de bain.
              </p>
              <Link href="/boutique"
                className="self-start inline-flex items-center gap-2 border border-[#1C1C1C] text-[#1C1C1C] text-[10px] font-bold tracking-[0.2em] uppercase px-8 py-3.5 hover:bg-[#1C1C1C] hover:text-white transition-colors">
                Découvrir tous les modèles <ArrowRight size={12} />
              </Link>
            </div>
            <div className="relative min-h-[400px] md:min-h-full overflow-hidden order-1 md:order-2">
              <Image src={EDITO2} alt="Velours Paris" fill className="object-cover object-center" unoptimized />
            </div>
          </div>
        </div>
      </section>

      {/* ── ÉDITO 3 ──────────────────────────────────────────────── */}
      <section className="bg-[#F5F1E8] border-b border-[#E8E3DA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 min-h-[480px]">
            <div className="relative min-h-[360px] md:min-h-full overflow-hidden">
              <Image src={EDITO3} alt="Rituel bien-être" fill className="object-cover object-center" unoptimized />
            </div>
            <div className="flex flex-col justify-center px-10 md:px-16 lg:px-24 py-16 bg-[#F5F1E8]">
              <p className="text-[9px] font-semibold tracking-[0.3em] uppercase text-[#B8963E] mb-5">Nid d'Abeille & Velours</p>
              <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-[#1C1C1C] leading-tight mb-6">
                Pour chaque<br />moment.
              </h2>
              <p className="text-[#7A7670] text-sm leading-relaxed mb-8 max-w-sm">
                Léger en été avec notre nid d'abeille 375 g/m², chaleureux en hiver
                avec notre velours de coton 480 g/m² — chaque modèle a sa saison,
                chaque saison a son peignoir.
              </p>
              <Link href="/boutique"
                className="self-start inline-flex items-center gap-2 bg-[#1C1C1C] text-white text-[10px] font-bold tracking-[0.2em] uppercase px-8 py-3.5 hover:opacity-75 transition-opacity">
                Voir tous les modèles <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SAVOIR-FAIRE ─────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-[9px] font-semibold tracking-[0.3em] uppercase text-[#B8963E] mb-3">Notre engagement</p>
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-black text-[#1C1C1C]">Le Savoir-Faire Velours Paris</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Coton 550 g/m²", desc: "Un grammage élevé pour une douceur maximale et une absorption optimale dès la première utilisation." },
            { label: "Fabrication Européenne", desc: "Produits dans des ateliers en Europe selon des normes strictes de qualité et de conditions de travail." },
            { label: "Coloris Tissés", desc: "Nos couleurs sont intégrées au fil du tissage — elles ne décolorent pas au lavage et restent intenses dans le temps." },
            { label: "Retours 30 Jours", desc: "30 jours pour essayer votre peignoir chez vous. Si vous n'êtes pas satisfait, on reprend les frais de retour." },
          ].map((v) => (
            <div key={v.label} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-10 h-10 border border-[#E8E3DA] flex items-center justify-center">
                  <span className="text-[#B8963E] text-base font-black">✦</span>
                </div>
              </div>
              <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#1C1C1C] mb-2">{v.label}</p>
              <p className="text-[#7A7670] text-xs leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="max-w-2xl mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <p className="text-[9px] font-semibold tracking-[0.3em] uppercase text-[#B8963E] mb-3">Support</p>
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-black text-[#1C1C1C]">Questions fréquentes</h2>
        </div>
        <FAQAccordion />
        <div className="text-center mt-10">
          <p className="text-[#7A7670] text-sm">
            Vous n'avez pas trouvé votre réponse ?{" "}
            <Link href="/contact" className="text-[#1C1C1C] font-semibold underline underline-offset-4 hover:opacity-60">
              Contactez-nous
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
