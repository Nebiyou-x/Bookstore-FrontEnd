// app/admin/layout.tsx
import { Sidebar } from './components/sidebar';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   
      <div className={`flex h-screen ${inter.className}`}>
        <Sidebar />
        <div className="flex-1 overflow-auto">
          <main className="p-6">{children}</main>
        </div>
      </div>
  );
}