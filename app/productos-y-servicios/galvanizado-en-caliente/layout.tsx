// app/productos-y-servicios/galvanizado-en-caliente/layout.tsx
export default function GalvanizadoCalienteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
}