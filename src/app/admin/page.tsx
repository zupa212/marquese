"use client";

import React, { useEffect, useState } from 'react';
import { Section } from '@/components/Section';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LineChart,
    Line,
    PieChart,
    Pie,
    Cell
} from 'recharts';
import { Phone, Calendar, MapPin, TrendingUp, MousePointer2, Scissors } from 'lucide-react';

const COLORS = ['#D4AF37', '#2E5A47', '#1C1C1C'];

export default function AdminDashboard() {
    const [stats, setStats] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/analytics')
            .then(res => res.json())
            .then(data => {
                setStats(data);
                setLoading(false);
            });
    }, []);

    if (loading) return (
        <div className="min-h-screen bg-brand-ivory flex items-center justify-center">
            <div className="text-brand-gold animate-pulse font-serif text-2xl italic">Φόρτωση...</div>
        </div>
    );

    const categoryData = Object.keys(stats?.byCategory || {}).map(key => ({
        name: key.toUpperCase(),
        value: stats.byCategory[key]
    }));

    const serviceStats = (stats.raw as any[])
        .filter(item => item.category === 'service')
        .reduce((acc: any, item) => {
            const name = item.metadata?.serviceName || item.label;
            acc[name] = (acc[name] || 0) + 1;
            return acc;
        }, {});

    const topServices = Object.entries(serviceStats)
        .map(([name, count]) => ({ name, count: count as number }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);

    return (
        <main className="min-h-screen bg-brand-ivory pt-24 pb-12">
            <Section className="!py-0">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
                    <div>
                        <span className="text-brand-gold font-serif text-lg italic tracking-widest uppercase">Overview</span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-charcoal">Admin Dashboard</h1>
                    </div>
                    <div className="flex items-center space-x-2 text-brand-charcoal/40 text-sm">
                        <Calendar size={14} />
                        <span>{new Date().toLocaleDateString('el-GR')}</span>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    <StatCard
                        title="Sυνολικά Κλικ"
                        value={stats.totalClicks}
                        icon={<MousePointer2 className="text-brand-gold" />}
                    />
                    <StatCard
                        title="Bookings"
                        value={stats.byCategory.booking || 0}
                        icon={<Calendar className="text-brand-gold" />}
                    />
                    <StatCard
                        title="Phone Calls"
                        value={stats.byCategory.call || 0}
                        icon={<Phone className="text-brand-gold" />}
                    />
                    <StatCard
                        title="Directions"
                        value={stats.byCategory.directions || 0}
                        icon={<MapPin className="text-brand-gold" />}
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Daily Trend Chart */}
                    <div className="bg-white p-8 rounded-sm border border-brand-charcoal/5 shadow-sm">
                        <h3 className="text-xl font-serif font-bold mb-8 flex items-center">
                            <TrendingUp className="mr-2 text-brand-gold" size={20} />
                            Traffic Trend (Daily)
                        </h3>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={stats.dailyStats}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                                    <XAxis dataKey="date" />
                                    <YAxis />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#1C1C1C', border: 'none', borderRadius: '4px' }}
                                        itemStyle={{ color: '#D4AF37' }}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="count"
                                        stroke="#D4AF37"
                                        strokeWidth={3}
                                        dot={{ r: 4, fill: '#D4AF37' }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Top Services */}
                    <div className="bg-white p-8 rounded-sm border border-brand-charcoal/5 shadow-sm">
                        <h3 className="text-xl font-serif font-bold mb-8 flex items-center">
                            <Scissors className="mr-2 text-brand-gold" size={20} />
                            Δημοφιλέστερες Υπηρεσίες
                        </h3>
                        <div className="space-y-6">
                            {topServices.length > 0 ? topServices.map((svc, i) => (
                                <div key={svc.name} className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-6 h-6 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center text-[10px] font-bold">
                                            {i + 1}
                                        </div>
                                        <span className="text-sm font-medium text-brand-charcoal">{svc.name}</span>
                                    </div>
                                    <span className="text-xs font-bold text-brand-gold uppercase tracking-tighter bg-brand-gold/5 px-2 py-1 rounded">
                                        {svc.count} Clicks
                                    </span>
                                </div>
                            )) : (
                                <p className="text-brand-charcoal/40 text-sm italic py-12 text-center">Δεν υπάρχουν ακόμα δεδομένα υπηρεσιών</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-sm border border-brand-charcoal/5 overflow-hidden shadow-sm">
                    <div className="p-6 border-b border-brand-charcoal/5 flex justify-between items-center">
                        <h3 className="text-xl font-serif font-bold">Recent Activity</h3>
                        <span className="text-xs uppercase tracking-widest text-brand-charcoal/40">Last 50 clicks</span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-brand-ivory text-xs uppercase tracking-widest font-bold text-brand-charcoal/60">
                                    <th className="px-6 py-4">Category</th>
                                    <th className="px-6 py-4">Label</th>
                                    <th className="px-6 py-4">Page</th>
                                    <th className="px-6 py-4">Time</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-brand-charcoal/5">
                                {stats.raw.map((item: any) => (
                                    <tr key={item.id} className="hover:bg-brand-ivory/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest ${item.category === 'booking' ? 'bg-brand-gold/10 text-brand-gold' :
                                                item.category === 'call' ? 'bg-brand-green/10 text-brand-green' :
                                                    item.category === 'service' ? 'bg-brand-gold/5 text-brand-gold' :
                                                        'bg-brand-charcoal/5 text-brand-charcoal'
                                                }`}>
                                                {item.category}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium">{item.label}</td>
                                        <td className="px-6 py-4 text-sm text-brand-charcoal/60">{item.page}</td>
                                        <td className="px-6 py-4 text-sm text-brand-charcoal/40">
                                            {new Date(item.timestamp).toLocaleString('el-GR')}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Section>
        </main>
    );
}

function StatCard({ title, value, icon }: { title: string, value: any, icon: any }) {
    return (
        <div className="bg-white p-6 rounded-sm border border-brand-charcoal/5 shadow-sm">
            <div className="flex justify-between items-start mb-4">
                <span className="text-xs uppercase tracking-widest font-bold text-brand-charcoal/40">{title}</span>
                {icon}
            </div>
            <div className="text-3xl font-serif font-bold text-brand-charcoal italic">{value || 0}</div>
        </div>
    );
}
