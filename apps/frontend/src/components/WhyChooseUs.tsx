import { Sparkles, Palette, Truck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';

const features = [
  {
    icon: Sparkles,
    title: 'Premium Quality',
    description:
      'Every sticker is printed on waterproof, scratch-resistant vinyl that lasts for years without fading or peeling.',
  },
  {
    icon: Palette,
    title: 'Vibrant Colors',
    description:
      'High-definition printing brings every anime character to life with bold, vivid colors that pop on any surface.',
  },
  {
    icon: Truck,
    title: 'Fast Shipping',
    description:
      'Get your stickers delivered to your door in days, not weeks. We ship worldwide with tracking on every order.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-muted/40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why <span className="gradient-text">StickerVault</span>?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Quality and care in every sticker we make.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="border-border hover:shadow-lg transition-shadow duration-200 bg-card cursor-default"
            >
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}