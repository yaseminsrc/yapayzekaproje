import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

  return (
    <div className="relative h-[calc(100vh-5rem)] w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl drop-shadow-lg">
          Güzellik Stüdyo
        </h1>
        <p className="mt-4 max-w-lg text-lg md:text-xl text-primary-foreground/80">
          Zarafetin ve güzelliğin buluşma noktası.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href="/randevu">
            Randevu Al <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
