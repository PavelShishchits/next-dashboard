import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import CardsWrapper from '@/app/ui/dashboard/cards';
// toDo move to api routes https://nextjs.org/docs/app/building-your-application/routing/route-handlers
import { Suspense } from 'react';
import {
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
  CardsSkeleton,
} from '@/app/ui/skeletons';

export const dynamic = 'force-dynamic';

export default async function Page() {
  // const [cardData] = await Promise.all([fetchCardData()]);

  return (
    <main>
      <h1 className={`mb-4 text-xl md:text-2xl`}>Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardsWrapper />
        </Suspense>
        {/* <Card
          title="Collected"
          value={cardData?.totalPaidInvoices}
          type="collected"
        />
        <Card
          title="Pending"
          value={cardData?.totalPendingInvoices}
          type="pending"
        />
        <Card
          title="Total Invoices"
          value={cardData?.numberOfInvoices}
          type="invoices"
        />
        <Card
          title="Total Customers"
          value={cardData?.numberOfCustomers}
          type="customers"
        /> */}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
