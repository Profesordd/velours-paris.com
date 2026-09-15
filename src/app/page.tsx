import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";
import ProductCard from "@/components/ui/ProductCard";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { ArrowRight, Truck, RotateCcw, Shield } from "lucide-react";

// All images verified — zero brand logos
const U = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=85`;

// Verified CDN IDs
const HERO   = U("1679759022456-a7eae2257ba2", 1920); // multiple belts on wooden pole
const EDITO1 = U("1664286074176-5206ee5dc878");        // leather belt on black surface
const EDITO2 = U("1473188588951-666fce8e7c68");        // brown leather satchel, no brand
const EDITO3 = U("1629958317491-bd40c9fa757e");        // black leather bifold wallet

export default function HomePage() {
  const bestSellers = products.filter((p) => p.badge === "BESTSELLER");

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative h-screen flex items-center md:items-end overflow-hidden">
        <Image
          src={HERO}
          alt="Sellier Paris"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/15" />

        <div className="relative z-10 px-8 md:px-16 lg:px-24 pb-0 md:pb-28 w-full max-w-4xl">
          <p className="fade-in-up d200 text-[9px] font-semibold tracking-[0.4em] uppercase text-white/50 mb-7">
            Sellier Paris — Maroquinerie d'exception
          </p>
          <h1 className="fade-in-up d400 text-[clamp(3rem,8vw,7rem)] font-black text-white leading-[0.88] tracking-tight mb-8">
            L'ART<br />DU<br />CUIR.
          </h1>
          <p className="fade-in-up d600 text-white/65 text-sm md:text-base max-w-sm mb-10 leading-relaxed">
            Ceintures, sacs et petite maroquinerie en cuir pleine fleur.<br />
            Fabriqués à la main en Europe, pour durer une vie.
          </p>
          <div className="fade-in-up d800 flex flex-wrap gap-4">
            <Link
              href="/boutique"
              className="bg-white text-[#1A1410] px-8 py-3.5 font-bold text-[10px] tracking-[0.2em] uppercase hover:bg-[#F0EBE4] transition-colors inline-flex items-center gap-2"
            >
              Découvrir la collection <ArrowRight size={12} />
            </Link>
            <Link
              href="/boutique?collection=ceintures"
              className="border border-white/40 text-white px-8 py-3.5 font-medium text-[10px] tracking-[0.2em] uppercase hover:border-white transition-colors"
            >
              Ceintures
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm py-2.5 ticker-wrap">
          <div className="ticker-content text-white/40 text-[9px] uppercase tracking-[0.3em] font-medium">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="mr-16">
                Sellier Paris &nbsp;·&nbsp; Cuir Pleine Fleur &nbsp;·&nbsp; Fabrication Européenne &nbsp;·&nbsp; Livraison Offerte &nbsp;·&nbsp; Garanti à Vie
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── RÉASSURANCE ──────────────────────────────────────────── */}
      <section className="border-b border-[#E5DDD0] bg-[#F7F1E8]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#E5DDD0]">
            {[
              { icon: <Truck size={14} strokeWidth={1.5} />, label: "Livraison gratuite en France" },
              { icon: <RotateCcw size={14} strokeWidth={1.5} />, label: "Retours gratuits sous 30 jours" },
              { icon: <Shield size={14} strokeWidth={1.5} />, label: "Paiement 100 % sécurisé" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-center gap-2.5 py-3 sm:py-2 text-[10px] tracking-[0.12em] uppercase font-medium text-[#8A7A6A]">
                <span className="text-[#C08040]">{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SÉLECTION BESTSELLERS ─────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[9px] font-semibold tracking-[0.3em] uppercase text-[#C08040] mb-3">
              Nos incontournables
            </p>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-black text-[#1A1410] leading-tight">
              Les Bestsellers
            </h2>
          </div>
          <Link
            href="/boutique"
            className="hidden md:flex items-center gap-1.5 text-[10px] tracking-[0.15em] uppercase font-semibold text-[#8A7A6A] hover:text-[#1A1410] transition-colors"
          >
            Tout voir <ArrowRight size={12} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-8">
          {bestSellers.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/boutique"
            className="inline-flex items-center gap-2 border border-[#1A1410] text-[#1A1410] px-10 py-3.5 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-[#1A1410] hover:text-white transition-colors"
          >
            Voir toute la boutique <ArrowRight size={12} />
          </Link>
        </div>
      </section>

      {/* ── ÉDITO 1 : Ceintures ──────────────────────────────────── */}
      <section className="bg-[#F7F1E8] border-y border-[#E5DDD0]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 min-h-[560px]">
            <div className="relative min-h-[400px] md:min-h-full overflow-hidden">
              <Image
                src={EDITO1}
                alt="Ceintures cuir"
                fill
                className="object-cover object-center"
                unoptimized
              />
            </div>
            <div className="flex flex-col justify-center px-10 md:px-16 lg:px-24 py-16 bg-[#F7F1E8]">
              <p className="text-[9px] font-semibold tracking-[0.3em] uppercase text-[#C08040] mb-5">Ceintures</p>
              <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-[#1A1410] leading-tight mb-6">
                La signature<br />de l'élégance.
              </h2>
              <p className="text-[#8A7A6A] text-sm leading-relaxed mb-8 max-w-sm">
                Tannées à la végétale, cousues main, boucles en laiton massif —
                nos ceintures sont conçues pour vieillir avec vous et développer
                une patine unique au fil du temps.
              </p>
              <Link
                href="/boutique?collection=ceintures"
                className="self-start inline-flex items-center gap-2 bg-[#1A1410] text-white text-[10px] font-bold tracking-[0.2em] uppercase px-8 py-3.5 hover:opacity-75 transition-opacity"
              >
                Voir les ceintures <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── ÉDITO 2 : Sacs ───────────────────────────────────────── */}
      <section className="border-b border-[#E5DDD0]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 min-h-[560px]">
            <div className="flex flex-col justify-center px-10 md:px-16 lg:px-24 py-16 bg-white order-2 md:order-1">
              <p className="text-[9px] font-semibold tracking-[0.3em] uppercase text-[#C08040] mb-5">Sacs</p>
              <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-[#1A1410] leading-tight mb-6">
                Pensés pour<br />l'essentiel.
              </h2>
              <p className="text-[#8A7A6A] text-sm leading-relaxed mb-8 max-w-sm">
                Cabas, sacs à main, week-end — chaque modèle est fabriqué en cuir
                pleine fleur de qualité supérieure, avec des doublures nobles et
                des ferrures en laiton ou acier inoxydable.
              </p>
              <Link
                href="/boutique?collection=sacs"
                className="self-start inline-flex items-center gap-2 border border-[#1A1410] text-[#1A1410] text-[10px] font-bold tracking-[0.2em] uppercase px-8 py-3.5 hover:bg-[#1A1410] hover:text-white transition-colors"
              >
                Voir les sacs <ArrowRight size={12} />
              </Link>
            </div>
            <div className="relative min-h-[400px] md:min-h-full overflow-hidden order-1 md:order-2">
              <Image
                src={EDITO2}
                alt="Sacs cuir"
                fill
                className="object-cover object-center"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── ÉDITO 3 : Petite Maroquinerie ────────────────────────── */}
      <section className="bg-[#F7F1E8] border-b border-[#E5DDD0]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 min-h-[560px]">
            <div className="relative min-h-[400px] md:min-h-full overflow-hidden">
              <Image
                src={EDITO3}
                alt="Petite Maroquinerie"
                fill
                className="object-cover object-center"
                unoptimized
              />
            </div>
            <div className="flex flex-col justify-center px-10 md:px-16 lg:px-24 py-16 bg-[#F7F1E8]">
              <p className="text-[9px] font-semibold tracking-[0.3em] uppercase text-[#C08040] mb-5">Petite Maroquinerie</p>
              <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-[#1A1410] leading-tight mb-6">
                L'art<br />du détail.
              </h2>
              <p className="text-[#8A7A6A] text-sm leading-relaxed mb-8 max-w-sm">
                Portefeuilles ultra-slim, porte-cartes végétan, carnets en cuir —
                les petites pièces qui font la différence. Chacune tient dans la poche
                et dure une décennie.
              </p>
              <Link
                href="/boutique?collection=petite-maroquinerie"
                className="self-start inline-flex items-center gap-2 bg-[#1A1410] text-white text-[10px] font-bold tracking-[0.2em] uppercase px-8 py-3.5 hover:opacity-75 transition-opacity"
              >
                Voir la collection <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SAVOIR-FAIRE ─────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-[9px] font-semibold tracking-[0.3em] uppercase text-[#C08040] mb-3">Notre engagement</p>
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-black text-[#1A1410]">Le Savoir-Faire Sellier Paris</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Cuir Pleine Fleur", desc: "La partie la plus noble du cuir, non rectifiée. Résistance maximale, grain naturel préservé." },
            { label: "Tannage Végétal", desc: "Tanné aux écorces de chêne et châtaignier selon les méthodes traditionnelles toscanes et françaises." },
            { label: "Couture Sellier", desc: "Point de sellier à deux fils croisés — si un fil casse, l'autre tient. La couture la plus solide qui soit." },
            { label: "Garantie À Vie", desc: "Nos ceintures sont garanties à vie. Nos sacs et petite maroquinerie sont garantis 2 ans." },
          ].map((v) => (
            <div key={v.label} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-10 h-10 border border-[#E5DDD0] flex items-center justify-center">
                  <span className="text-[#C08040] text-base font-black">✦</span>
                </div>
              </div>
              <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#1A1410] mb-2">{v.label}</p>
              <p className="text-[#8A7A6A] text-xs leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="max-w-2xl mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <p className="text-[9px] font-semibold tracking-[0.3em] uppercase text-[#C08040] mb-3">Support</p>
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-black text-[#1A1410]">Questions fréquentes</h2>
        </div>
        <FAQAccordion />
        <div className="text-center mt-10">
          <p className="text-[#8A7A6A] text-sm">
            Vous n'avez pas trouvé votre réponse ?{" "}
            <Link href="/contact" className="text-[#1A1410] font-semibold underline underline-offset-4 hover:opacity-60">
              Contactez-nous
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
