// app/galvanizado-en-frio/layout.tsx
export default function GalvanizadoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      {children}
    </div>
  );
}