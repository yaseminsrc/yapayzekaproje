export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-card">
      <div className="container py-4">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {currentYear} Güzellik Stüdyo. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
