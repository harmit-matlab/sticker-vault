import './global.css';
import { QueryProvider } from '@/components/providers/QueryProvider';
import { LanguageProvider } from '@/components/providers/LanguageProvider';
import { SonnerToaster, Toaster } from '@/components';

export const metadata = {
  title: 'StickerVault — Anime Stickers',
  description:
    'Premium anime stickers for your collection. Discover vibrant, high-quality stickers from your favorite series.',
  icons: {
    icon: ['/icons/favicon.ico', '/icon.svg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <LanguageProvider>
            {children}
            <SonnerToaster />
            <Toaster />
          </LanguageProvider>
        </QueryProvider>
      </body>
    </html>
  );
}