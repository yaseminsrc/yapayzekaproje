import AppointmentForm from '@/components/appointment-form';

export default function AppointmentPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Randevu Alın</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Güzellik yolculuğunuza ilk adımı atın. Formu doldurarak randevunuzu kolayca oluşturun.
          </p>
        </div>
        <AppointmentForm />
      </div>
    </div>
  );
}
