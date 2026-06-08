"use client";
export const dynamic = "force-dynamic";
import { DiezmosModule } from "@/components/ui/DiezmosModule";
import { PageHeader } from "@/components/ui/PageHeader";
export default function DiezmosPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Diezmos y ofrendas" subtitle="Registra aportes por miembro y tipo; totales automáticos." />
      <DiezmosModule />
    </div>
  );
}
