export const dynamic = "force-dynamic";
import "./globals.css";
import { ProtectedShell } from "@/components/ui/ProtectedShell";

const NAV = [{ href: "/", label: "Inicio" }, { href: "/ayunos", label: "Ayunos" }, { href: "/cultos", label: "Cultos" }, { href: "/diezmos", label: "Diezmos" }, { href: "/miembros", label: "Miembros" }, { href: "/ministerios", label: "Ministerios" }, { href: "/usuarios", label: "Usuarios" }];

export const metadata = { title: "Iglesia Vida", description: "Generado con ScrumDev AI" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <ProtectedShell items={NAV} title="Iglesia Vida">{children}</ProtectedShell>
      </body>
    </html>
  );
}
