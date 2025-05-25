// app/admin/components/recent-orders.tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function RecentOrders() {
  const orders = [
    {
      id: 'ORD-001',
      customer: 'John Doe',
      total: '$149.00',
      status: 'fulfilled',
      date: '2023-06-12',
    },
    {
      id: 'ORD-002',
      customer: 'Jane Smith',
      total: '$89.00',
      status: 'pending',
      date: '2023-06-11',
    },
    {
      id: 'ORD-003',
      customer: 'Robert Johnson',
      total: '$239.00',
      status: 'processing',
      date: '2023-06-10',
    },
    {
      id: 'ORD-004',
      customer: 'Emily Davis',
      total: '$59.00',
      status: 'fulfilled',
      date: '2023-06-09',
    },
    {
      id: 'ORD-005',
      customer: 'Michael Wilson',
      total: '$199.00',
      status: 'processing',
      date: '2023-06-08',
    },
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'fulfilled':
        return 'default';
      case 'pending':
        return 'destructive';
      case 'processing':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>
                  <Badge variant={getStatusVariant(order.status)}>
                    {order.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}