import { NextResponse } from 'next/server';
import { getAnalytics } from '@/lib/analytics';

export async function GET() {
    try {
        const data = await getAnalytics();

        // Aggregations
        const totalClicks = data.length;
        const byCategory = data.reduce((acc: Record<string, number>, record) => {
            acc[record.category] = (acc[record.category] || 0) + 1;
            return acc;
        }, {});

        // Daily breakdown (last 30 days)
        const byDate = data.reduce((acc: Record<string, number>, record) => {
            const date = record.timestamp.split('T')[0];
            acc[date] = (acc[date] || 0) + 1;
            return acc;
        }, {});

        const dailyStats = Object.keys(byDate).sort().map(date => ({
            date,
            count: byDate[date]
        }));

        return NextResponse.json({
            totalClicks,
            byCategory,
            dailyStats,
            raw: data.slice(-50) // Last 50 raw entries
        });
    } catch (error) {
        console.error('Analytics stats error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
