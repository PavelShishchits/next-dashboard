import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import EditForm from '@/app/ui/invoices/edit-form';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
  const invoceId = params.id;
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(invoceId),
    fetchCustomers(),
  ]).catch((error) => {
    notFound();
  });

  if (!invoice) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${invoceId}/edit`,
            active: true,
          },
        ]}
      />
      <EditForm invoice={invoice} customers={customers}></EditForm>
    </main>
  );
}
