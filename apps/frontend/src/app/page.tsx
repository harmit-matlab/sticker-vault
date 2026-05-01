import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { FeaturedStickers } from '@/components/FeaturedStickers';
import { WhyChooseUs } from '@/components/WhyChooseUs';

export default function HomePage() {
  return (
    <main>
      <section className="relative flex min-h-screen items-center justify-center bg-background overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://picsum.photos/seed/hero-section/1920/1080"
            alt="Anime stickers background"
            fill
            className="object-cover opacity-15"
            priority
          />
        </div>

        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Collect Your Favorite{' '}
            <span className="gradient-text">Anime Stickers</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
            Discover premium, vibrant stickers from the anime series you love.
            Deck out your gear with high-quality designs that stand out.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button variant="hero" size="xl" className="cursor-pointer">
              Browse Collection
            </Button>
          </div>
        </div>
      </section>

      <FeaturedStickers />
      <WhyChooseUs />
    </main>
  );
}