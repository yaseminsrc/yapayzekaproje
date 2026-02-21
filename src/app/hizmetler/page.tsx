import { services } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ServicesPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Hizmetlerimiz & Fiyatlar</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Size özel sunduğumuz profesyonel bakım ve güzellik hizmetlerini keşfedin.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {services.map((service) => (
          <Card key={service.name} className="flex flex-col md:flex-row items-center overflow-hidden transition-shadow hover:shadow-lg">
            <div className="p-6 bg-accent/30 md:w-32 flex justify-center items-center">
              <service.icon className="h-12 w-12 text-primary" />
            </div>
            <div className="flex-1">
              <CardHeader>
                <CardTitle className="flex justify-between items-baseline">
                  <span className="font-headline text-2xl">{service.name}</span>
                  <span className="text-xl font-semibold text-primary">{service.price}₺</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
