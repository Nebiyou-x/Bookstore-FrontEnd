// app/admin/page.tsx
import { StatsCard } from './components/stats-card';
import { RecentOrders } from './components/recent-orders';
import { SalesChart } from './components/sales-chart';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex items-center space-x-2">
          {/* Date picker or other controls could go here */}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Revenue"
          value="$45,231.89"
          description="+20.1% from last month"
          icon="DollarSign"
        />
        <StatsCard
          title="Total Orders"
          value="1,234"
          description="+12% from last month"
          icon="ShoppingCart"
        />
        <StatsCard
          title="Total Books"
          value="573"
          description="+8 from last month"
          icon="Book"
        />
        <StatsCard
          title="Active Users"
          value="1,129"
          description="+18.3% from last month"
          icon="Users"
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-7">
        <div className="lg:col-span-4">
          <SalesChart />
        </div>
        <div className="lg:col-span-3">
          <RecentOrders />
        </div>
      </div>
    </div>
  );
}