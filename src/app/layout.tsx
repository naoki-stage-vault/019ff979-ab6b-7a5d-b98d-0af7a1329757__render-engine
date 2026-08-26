import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voxel World",
  description: "Juego voxel tipo Minecraft en el navegador",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
