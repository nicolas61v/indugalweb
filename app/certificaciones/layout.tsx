// app/certificaciones/layout.tsx
export default function CertificacionesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100 pb-32">
      {children}
    </div>
  );
}