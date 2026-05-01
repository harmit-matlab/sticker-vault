import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

const stickers = [
  {
    name: 'Warrior Legends Pack',
    category: 'Action',
    image: 'https://picsum.photos/seed/sticker-action/400/400',
    price: '$4.99',
  },
  {
    name: 'Sakura Dreams Set',
    category: 'Romance',
    image: 'https://picsum.photos/seed/sticker-romance/400/400',
    price: '$3.99',
  },
  {
    name: 'Mystic Realm Pack',
    category: 'Fantasy',
    image: 'https://picsum.photos/seed/sticker-fantasy/400/400',
    price: '$5.99',
  },
  {
    name: 'Chibi Squad Collection',
    category: 'Cute',
    image: 'https://picsum.photos/seed/sticker-chibi/400/400',
    price: '$4.49',
  },
  {
    name: 'Neon Night Vinyls',
    category: 'Cyberpunk',
    image: 'https://picsum.photos/seed/sticker-neon/400/400',
    price: '$6.99',
  },
  {
    name: 'Spirit Guardian Set',
    category: 'Supernatural',
    image: 'https://picsum.photos/seed/sticker-spirit/400/400',
    price: '$4.99',
  },
];

const categoryColors: Record<string, string> = {
  Action: 'bg-red-100 text-red-700 border-red-200',
  Romance: 'bg-pink-100 text-pink-700 border-pink-200',
  Fantasy: 'bg-purple-100 text-purple-700 border-purple-200',
  Cute: 'bg-amber-100 text-amber-700 border-amber-200',
  Cyberpunk: 'bg-cyan-100 text-cyan-700 border-cyan-200',
  Supernatural: 'bg-indigo-100 text-indigo-700 border-indigo-200',
};

export function FeaturedStickers() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Featured <span className="gradient-text">Stickers</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Hand-picked collections from our most popular anime series.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stickers.map((sticker) => (
            <Card
              key={sticker.name}
              className="group overflow-hidden border-border hover:shadow-lg transition-shadow duration-200 bg-card cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={sticker.image}
                  alt={sticker.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge
                    variant="outline"
                    className={categoryColors[sticker.category]}
                  >
                    {sticker.category}
                  </Badge>
                  <span className="text-sm font-semibold text-primary">
                    {sticker.price}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground text-base">
                  {sticker.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}