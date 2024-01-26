import { NextRequest, NextResponse } from 'next/server';
import { fetchCustomers } from '@/app/lib/data';

export async function GET() {
  // console.log('req', req);
  const data = await fetchCustomers();
  // console.log(data);
  return Response.json(data);
}
