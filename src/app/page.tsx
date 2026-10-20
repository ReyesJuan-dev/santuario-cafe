import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-8 md:px-12">
      <header className="flex items-center justify-between border-b border-stone-300 pb-6">
        <Link href="/" className="text-xl font-semibold tracking-tight">Santuario Cafe<span className="text-amber-800">.</span></Link>
        <nav aria-label="Main navigation"><a href="#welcome" className="text-sm underline-offset-4 hover:underline">Welcome</a></nav>
      </header>
      <section id="welcome" className="grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-amber-900">Santuario Cafe</p>
          <h1 className="font-serif text-6xl leading-[1.05] tracking-tight md:text-7xl">A little pause.<br />A good coffee.</h1>
          <p className="mt-8 max-w-sm text-lg leading-relaxed text-stone-600">A place to slow down, settle in, and enjoy the moment.</p>
          <p className="mt-10 text-sm text-stone-500">Our website is brewing. More coming soon.</p>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-stone-200">
          <Image src="/images/cafePic1.jpg" alt="A glimpse of Santuario Cafe" fill priority sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
      </section>
      <footer className="border-t border-stone-300 py-6 text-sm text-stone-500">Santuario Cafe · Made for moments like these.</footer>
    </main>
  );
}
