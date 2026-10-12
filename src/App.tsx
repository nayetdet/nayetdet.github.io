import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function App() {
  return (
    <main className="grid min-h-svh place-items-center px-6 py-16">
      <section className="w-full max-w-xl space-y-6">
        <p className="text-sm font-bold tracking-[0.18em] text-primary uppercase">
          Portfólio
        </p>
        <h1 className="text-4xl/tight font-semibold tracking-tight sm:text-5xl">
          Olá, eu sou João Pedro.
        </h1>
        <p className="text-lg text-muted-foreground">
          Meus projetos e experiências estarão aqui em breve.
        </p>
        <Button type="button">
          Vamos conversar
          <ArrowUpRight aria-hidden="true" className="size-4" />
        </Button>
      </section>
    </main>
  );
}
