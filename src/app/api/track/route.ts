import { NextResponse } from 'next/server';
import { logClick } from '@/lib/analytics';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { category, label, page } = body;

        if (!category || !label || !page) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        await logClick({ category, label, page });
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Track API error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
