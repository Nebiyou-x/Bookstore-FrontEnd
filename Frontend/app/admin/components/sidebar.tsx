// app/admin/components/sidebar.tsx
'use client';

import { useState } from 'react';
import { PanelLeft, X } from 'lucide-react';
import { NavItem } from './nav-item';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside
      className={`relative h-full border-r bg-background transition-all duration-300 ease-in-out ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between p-4">
          {!isCollapsed && (
            <h1 className="text-xl font-semibold">Admin Panel</h1>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="h-8 w-8"
          >
            {isCollapsed ? <PanelLeft size={18} /> : <X size={18} />}
          </Button>
        </div>

        <nav className="flex-1 space-y-1 p-2">
          <NavItem
            href="/admin"
            icon="LayoutDashboard"
            label="Dashboard"
            isCollapsed={isCollapsed}
          />
          <NavItem
            href="/admin/books"
            icon="Book"
            label="Books"
            isCollapsed={isCollapsed}
          />
          <NavItem
            href="/admin/users"
            icon="Users"
            label="Users"
            isCollapsed={isCollapsed}
          />
          <NavItem
            href="/admin/orders"
            icon="ShoppingCart"
            label="Orders"
            isCollapsed={isCollapsed}
          />
        </nav>

        <div className="p-4">
          <div className="flex items-center justify-between">
            {!isCollapsed && (
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-muted" />
                <div>
                  <p className="text-sm font-medium">Admin User</p>
                  <p className="text-xs text-muted-foreground">admin@example.com</p>
                </div>
              </div>
            )}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </aside>
  );
}