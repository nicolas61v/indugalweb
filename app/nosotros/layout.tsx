// app/nosotros/layout.tsx
export default function NosotrosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* El pb-32 añade un padding bottom para evitar que el contenido se mezcle con el footer */}
      {children}
    </div>
  );
} 