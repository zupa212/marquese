"use client";

import React, { useEffect, useState, useMemo } from 'react';
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
    Cell,
    AreaChart,
    Area,
    Legend
} from 'recharts';
import { Phone, Calendar, MapPin, TrendingUp, MousePointer2, Scissors, Lock, Eye, EyeOff, LogOut, BarChart3, Activity, Users, ArrowUpRight, ArrowDownRight, Clock } from 'lucide-react';

const ADMIN_PASSWORD = 'marquoise@';
const COLORS = ['#D4AF37', '#2E5A47', '#1C1C1C', '#8B6914', '#4A8B6A'];
const CATEGORY_COLORS: Record<string, string> = {
    booking: '#D4AF37',
    call: '#2E5A47',
    directions: '#1C1C1C',
    service: '#8B6914',
};
const CATEGORY_LABELS: Record<string, string> = {
    booking: 'Κρατήσεις',
    call: 'Κλήσεις',
    directions: 'Οδηγίες',
    service: 'Υπηρεσίες',
};

// ─── Login Gate ───────────────────────────────────────────
function LoginGate({ onAuth }: { onAuth: () => void }) {
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [show, setShow] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === ADMIN_PASSWORD) {
            sessionStorage.setItem('admin_auth', 'true');
            onAuth();
        } else {
            setError(true);
            setTimeout(() => setError(false), 2000);
        }
    };

    return (
        <div className="min-h-screen bg-brand-charcoal flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 brick-pattern opacity-5 pointer-events-none"></div>

            {/* Decorative elements */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-gold/5 blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-brand-green/5 blur-3xl"></div>

            <div className="relative z-10 w-full max-w-md mx-4">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-gold/10 border border-brand-gold/20 mb-6">
                        <Lock className="text-brand-gold" size={32} />
                    </div>
                    <h1 className="text-3xl font-serif font-bold text-brand-ivory mb-2">Admin Dashboard</h1>
                    <p className="text-brand-ivory/40 text-sm uppercase tracking-[0.3em]">Marquise Barber Shop</p>
                </div>

                <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-6">
                    <div>
                        <label className="block text-brand-ivory/60 text-xs uppercase tracking-widest mb-3 font-bold">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={show ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter admin password"
                                className={`w-full bg-white/5 border ${error ? 'border-red-500 animate-pulse' : 'border-white/10 focus:border-brand-gold'} rounded-xl px-5 py-4 text-brand-ivory placeholder-brand-ivory/20 outline-none transition-all text-lg font-light tracking-wide`}
                                autoFocus
                            />
                            <button
                                type="button"
                                onClick={() => setShow(!show)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-ivory/30 hover:text-brand-ivory/60 transition-colors"
                            >
                                {show ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                        {error && (
                            <p className="text-red-400 text-xs mt-2 animate-pulse">Wrong password. Try again.</p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-brand-gold text-brand-charcoal font-bold uppercase tracking-widest text-sm py-4 rounded-xl hover:bg-brand-gold/90 transition-all hover:shadow-lg hover:shadow-brand-gold/20 active:scale-[0.98]"
                    >
                        Access Dashboard
                    </button>
                </form>

                <p className="text-center text-brand-ivory/15 text-[10px] mt-8 uppercase tracking-widest">
                    Protected Area — Authorized Access Only
                </p>
            </div>
        </div>
    );
}

// ─── Main Dashboard ──────────────────────────────────────
export default function AdminDashboard() {
    const [authed, setAuthed] = useState(false);
    const [stats, setStats] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [period, setPeriod] = useState<'7d' | '30d' | 'all'>('30d');

    // Check session on mount
    useEffect(() => {
        if (sessionStorage.getItem('admin_auth') === 'true') {
            setAuthed(true);
        }
    }, []);

    // Fetch data once authed
    useEffect(() => {
        if (!authed) return;
        fetch('/api/analytics')
            .then(res => res.json())
            .then(data => {
                setStats(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [authed]);

    const handleLogout = () => {
        sessionStorage.removeItem('admin_auth');
        setAuthed(false);
    };

    if (!authed) return <LoginGate onAuth={() => setAuthed(true)} />;

    if (loading) return (
        <div className="min-h-screen bg-brand-ivory flex flex-col items-center justify-center gap-4">
            <div className="w-12 h-12 border-4 border-brand-gold/20 border-t-brand-gold rounded-full animate-spin"></div>
            <div className="text-brand-charcoal/40 text-sm uppercase tracking-widest">Loading analytics...</div>
        </div>
    );

    if (!stats || stats.error) return (
        <div className="min-h-screen bg-brand-ivory flex items-center justify-center">
            <div className="text-center">
                <p className="text-brand-charcoal/60 text-lg">No analytics data yet.</p>
                <p className="text-brand-charcoal/30 text-sm mt-2">Clicks will appear here once visitors interact with the site.</p>
            </div>
        </div>
    );

    return <DashboardContent stats={stats} period={period} setPeriod={setPeriod} onLogout={handleLogout} />;
}

// ─── Dashboard Content ───────────────────────────────────
function DashboardContent({ stats, period, setPeriod, onLogout }: {
    stats: any;
    period: '7d' | '30d' | 'all';
    setPeriod: (p: '7d' | '30d' | 'all') => void;
    onLogout: () => void;
}) {
    // Filter data by period
    const filteredDaily = useMemo(() => {
        if (!stats.dailyStats) return [];
        const now = new Date();
        const days = period === '7d' ? 7 : period === '30d' ? 30 : 9999;
        const cutoff = new Date(now.getTime() - days * 86400000).toISOString().split('T')[0];
        return stats.dailyStats.filter((d: any) => d.date >= cutoff);
    }, [stats.dailyStats, period]);

    const filteredRaw = useMemo(() => {
        if (!stats.raw) return [];
        const now = new Date();
        const days = period === '7d' ? 7 : period === '30d' ? 30 : 9999;
        const cutoff = new Date(now.getTime() - days * 86400000).toISOString();
        return stats.raw.filter((d: any) => d.timestamp >= cutoff);
    }, [stats.raw, period]);

    // Category breakdown from filtered raw data
    const categoryData = useMemo(() => {
        const counts: Record<string, number> = {};
        filteredRaw.forEach((item: any) => {
            counts[item.category] = (counts[item.category] || 0) + 1;
        });
        return Object.entries(counts).map(([name, value]) => ({
            name: CATEGORY_LABELS[name] || name,
            value,
            fill: CATEGORY_COLORS[name] || '#ccc',
        }));
    }, [filteredRaw]);

    // Top services from filtered data
    const topServices = useMemo(() => {
        const serviceStats: Record<string, number> = {};
        filteredRaw
            .filter((item: any) => item.category === 'service')
            .forEach((item: any) => {
                const name = item.metadata?.serviceName || item.label;
                serviceStats[name] = (serviceStats[name] || 0) + 1;
            });
        return Object.entries(serviceStats)
            .map(([name, count]) => ({ name, count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 8);
    }, [filteredRaw]);

    // Hourly heatmap data
    const hourlyData = useMemo(() => {
        const hours = Array(24).fill(0);
        filteredRaw.forEach((item: any) => {
            const hour = new Date(item.timestamp).getHours();
            hours[hour]++;
        });
        return hours.map((count, hour) => ({
            hour: `${hour.toString().padStart(2, '0')}:00`,
            clicks: count,
        }));
    }, [filteredRaw]);

    // Weekly data for area chart
    const weeklyData = useMemo(() => {
        const weeks: Record<string, Record<string, number>> = {};
        filteredRaw.forEach((item: any) => {
            const d = new Date(item.timestamp);
            const weekStart = new Date(d);
            weekStart.setDate(d.getDate() - d.getDay());
            const key = weekStart.toISOString().split('T')[0];
            if (!weeks[key]) weeks[key] = { booking: 0, call: 0, directions: 0, service: 0 };
            if (weeks[key][item.category] !== undefined) {
                weeks[key][item.category]++;
            }
        });
        return Object.entries(weeks)
            .map(([week, cats]) => ({ week, ...cats }))
            .sort((a, b) => a.week.localeCompare(b.week));
    }, [filteredRaw]);

    // Compute stats
    const totalFiltered = filteredRaw.length;
    const bookings = filteredRaw.filter((i: any) => i.category === 'booking').length;
    const calls = filteredRaw.filter((i: any) => i.category === 'call').length;
    const directions = filteredRaw.filter((i: any) => i.category === 'directions').length;
    const services = filteredRaw.filter((i: any) => i.category === 'service').length;

    // Conversion rate (bookings / total * 100)
    const conversionRate = totalFiltered > 0 ? ((bookings / totalFiltered) * 100).toFixed(1) : '0';

    // Avg daily clicks
    const uniqueDays = new Set(filteredRaw.map((i: any) => i.timestamp?.split('T')[0])).size;
    const avgDaily = uniqueDays > 0 ? (totalFiltered / uniqueDays).toFixed(1) : '0';

    return (
        <main className="min-h-screen bg-[#F5F3EE] pb-12">
            {/* Top Bar */}
            <div className="bg-brand-charcoal border-b border-white/5 sticky top-0 z-50">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 rounded-lg bg-brand-gold flex items-center justify-center">
                            <BarChart3 className="text-brand-charcoal" size={18} />
                        </div>
                        <div>
                            <h1 className="text-brand-ivory font-serif font-bold text-lg">Marquise Analytics</h1>
                            <p className="text-brand-ivory/30 text-[10px] uppercase tracking-[0.2em]">Admin Dashboard</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        {/* Period Selector */}
                        <div className="bg-white/5 rounded-lg flex overflow-hidden border border-white/10">
                            {(['7d', '30d', 'all'] as const).map(p => (
                                <button
                                    key={p}
                                    onClick={() => setPeriod(p)}
                                    className={`px-4 py-2 text-xs uppercase tracking-widest font-bold transition-all ${period === p
                                        ? 'bg-brand-gold text-brand-charcoal'
                                        : 'text-brand-ivory/40 hover:text-brand-ivory/70'
                                        }`}
                                >
                                    {p === '7d' ? '7 Days' : p === '30d' ? '30 Days' : 'All'}
                                </button>
                            ))}
                        </div>
                        <button
                            onClick={onLogout}
                            className="text-brand-ivory/30 hover:text-red-400 transition-colors p-2 rounded-lg hover:bg-white/5"
                            title="Logout"
                        >
                            <LogOut size={18} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 pt-8">
                {/* KPI Cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
                    <KPICard title="Total Clicks" value={totalFiltered} icon={<MousePointer2 size={18} />} color="gold" />
                    <KPICard title="Bookings" value={bookings} icon={<Calendar size={18} />} color="gold" />
                    <KPICard title="Phone Calls" value={calls} icon={<Phone size={18} />} color="green" />
                    <KPICard title="Directions" value={directions} icon={<MapPin size={18} />} color="charcoal" />
                    <KPICard title="Conversion" value={`${conversionRate}%`} icon={<ArrowUpRight size={18} />} color="gold" highlight />
                    <KPICard title="Avg/Day" value={avgDaily} icon={<Activity size={18} />} color="green" />
                </div>

                {/* Charts Row 1 */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    {/* Traffic Trend */}
                    <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-black/5 shadow-sm">
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h3 className="text-lg font-serif font-bold text-brand-charcoal">Traffic Trend</h3>
                                <p className="text-brand-charcoal/40 text-xs mt-1">Daily interactions overview</p>
                            </div>
                            <TrendingUp className="text-brand-gold" size={20} />
                        </div>
                        <div className="h-[280px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={filteredDaily}>
                                    <defs>
                                        <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#D4AF37" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                    <XAxis dataKey="date" tick={{ fontSize: 10 }} />
                                    <YAxis tick={{ fontSize: 10 }} />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#1C1C1C', border: 'none', borderRadius: '12px', fontSize: '12px' }}
                                        itemStyle={{ color: '#D4AF37' }}
                                        labelStyle={{ color: '#fff', fontSize: '11px' }}
                                    />
                                    <Area type="monotone" dataKey="count" stroke="#D4AF37" strokeWidth={2.5} fill="url(#goldGradient)" dot={{ r: 3, fill: '#D4AF37' }} />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Category Breakdown Pie */}
                    <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm">
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h3 className="text-lg font-serif font-bold text-brand-charcoal">Click Distribution</h3>
                                <p className="text-brand-charcoal/40 text-xs mt-1">By category</p>
                            </div>
                        </div>
                        <div className="h-[200px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={categoryData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={50}
                                        outerRadius={80}
                                        paddingAngle={3}
                                        dataKey="value"
                                    >
                                        {categoryData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.fill} />
                                        ))}
                                    </Pie>
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#1C1C1C', border: 'none', borderRadius: '12px', fontSize: '12px' }}
                                        itemStyle={{ color: '#D4AF37' }}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        {/* Legend */}
                        <div className="grid grid-cols-2 gap-2 mt-2">
                            {categoryData.map((cat) => (
                                <div key={cat.name} className="flex items-center space-x-2">
                                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: cat.fill }}></div>
                                    <span className="text-[10px] text-brand-charcoal/60 uppercase tracking-wider font-bold">{cat.name} ({cat.value})</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Charts Row 2 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    {/* Hourly Activity */}
                    <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm">
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h3 className="text-lg font-serif font-bold text-brand-charcoal">Peak Hours</h3>
                                <p className="text-brand-charcoal/40 text-xs mt-1">When your visitors are most active</p>
                            </div>
                            <Clock className="text-brand-gold" size={20} />
                        </div>
                        <div className="h-[250px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={hourlyData}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                    <XAxis dataKey="hour" tick={{ fontSize: 9 }} interval={2} />
                                    <YAxis tick={{ fontSize: 10 }} />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#1C1C1C', border: 'none', borderRadius: '12px', fontSize: '12px' }}
                                        itemStyle={{ color: '#D4AF37' }}
                                    />
                                    <Bar dataKey="clicks" radius={[4, 4, 0, 0]}>
                                        {hourlyData.map((entry, index) => (
                                            <Cell key={`bar-${index}`} fill={entry.clicks > 0 ? '#2E5A47' : '#e5e5e5'} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Top Services */}
                    <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm">
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h3 className="text-lg font-serif font-bold text-brand-charcoal">Top Services</h3>
                                <p className="text-brand-charcoal/40 text-xs mt-1">Most clicked services</p>
                            </div>
                            <Scissors className="text-brand-gold" size={20} />
                        </div>
                        <div className="space-y-3">
                            {topServices.length > 0 ? topServices.map((svc, i) => {
                                const maxCount = topServices[0]?.count || 1;
                                const percentage = (svc.count / maxCount) * 100;
                                return (
                                    <div key={svc.name} className="group">
                                        <div className="flex items-center justify-between mb-1">
                                            <div className="flex items-center space-x-3">
                                                <span className="w-5 h-5 rounded-md bg-brand-gold/10 text-brand-gold flex items-center justify-center text-[10px] font-bold">{i + 1}</span>
                                                <span className="text-sm font-medium text-brand-charcoal truncate max-w-[200px]">{svc.name}</span>
                                            </div>
                                            <span className="text-xs font-bold text-brand-charcoal/50">{svc.count}</span>
                                        </div>
                                        <div className="h-1.5 bg-brand-charcoal/5 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-brand-gold to-brand-gold/60 rounded-full transition-all duration-700"
                                                style={{ width: `${percentage}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                );
                            }) : (
                                <div className="text-center py-12">
                                    <Scissors className="text-brand-charcoal/10 mx-auto mb-3" size={32} />
                                    <p className="text-brand-charcoal/30 text-sm">No service clicks yet</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Weekly Stacked Area */}
                {weeklyData.length > 1 && (
                    <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm mb-6">
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h3 className="text-lg font-serif font-bold text-brand-charcoal">Weekly Breakdown</h3>
                                <p className="text-brand-charcoal/40 text-xs mt-1">Category performance over time</p>
                            </div>
                            <BarChart3 className="text-brand-gold" size={20} />
                        </div>
                        <div className="h-[280px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={weeklyData}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                    <XAxis dataKey="week" tick={{ fontSize: 10 }} />
                                    <YAxis tick={{ fontSize: 10 }} />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#1C1C1C', border: 'none', borderRadius: '12px', fontSize: '12px' }}
                                        labelStyle={{ color: '#fff' }}
                                    />
                                    <Legend iconType="circle" iconSize={8} />
                                    <Area type="monotone" dataKey="booking" stackId="1" stroke="#D4AF37" fill="#D4AF37" fillOpacity={0.4} name="Bookings" />
                                    <Area type="monotone" dataKey="call" stackId="1" stroke="#2E5A47" fill="#2E5A47" fillOpacity={0.4} name="Calls" />
                                    <Area type="monotone" dataKey="directions" stackId="1" stroke="#1C1C1C" fill="#1C1C1C" fillOpacity={0.2} name="Directions" />
                                    <Area type="monotone" dataKey="service" stackId="1" stroke="#8B6914" fill="#8B6914" fillOpacity={0.3} name="Services" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                )}

                {/* Recent Activity Table */}
                <div className="bg-white rounded-2xl border border-black/5 overflow-hidden shadow-sm">
                    <div className="p-6 border-b border-black/5 flex justify-between items-center">
                        <div>
                            <h3 className="text-lg font-serif font-bold text-brand-charcoal">Recent Activity</h3>
                            <p className="text-brand-charcoal/40 text-xs mt-1">Latest user interactions</p>
                        </div>
                        <span className="text-[10px] uppercase tracking-widest text-brand-charcoal/30 font-bold bg-brand-charcoal/5 px-3 py-1 rounded-full">
                            Last {stats.raw?.length || 0} events
                        </span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-[#FAFAF5] text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/40">
                                    <th className="px-6 py-4">Category</th>
                                    <th className="px-6 py-4">Label</th>
                                    <th className="px-6 py-4">Page</th>
                                    <th className="px-6 py-4">Time</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-black/5">
                                {(stats.raw || []).slice().reverse().map((item: any) => (
                                    <tr key={item.id} className="hover:bg-brand-ivory/30 transition-colors">
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest ${item.category === 'booking'
                                                ? 'bg-brand-gold/10 text-brand-gold'
                                                : item.category === 'call'
                                                    ? 'bg-brand-green/10 text-brand-green'
                                                    : item.category === 'service'
                                                        ? 'bg-amber-50 text-amber-700'
                                                        : 'bg-brand-charcoal/5 text-brand-charcoal/60'
                                                }`}>
                                                {CATEGORY_LABELS[item.category] || item.category}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium text-brand-charcoal">{item.label}</td>
                                        <td className="px-6 py-4 text-sm text-brand-charcoal/40">{item.page}</td>
                                        <td className="px-6 py-4 text-sm text-brand-charcoal/30 whitespace-nowrap">
                                            {new Date(item.timestamp).toLocaleString('el-GR')}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {(!stats.raw || stats.raw.length === 0) && (
                            <div className="text-center py-16">
                                <Activity className="text-brand-charcoal/10 mx-auto mb-3" size={32} />
                                <p className="text-brand-charcoal/30 text-sm">No activity recorded yet</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-8">
                    <p className="text-brand-charcoal/20 text-[10px] uppercase tracking-widest">
                        Marquise Analytics • Built with Antigravity
                    </p>
                </div>
            </div>
        </main>
    );
}

// ─── KPI Card Component ──────────────────────────────────
function KPICard({ title, value, icon, color, highlight }: {
    title: string;
    value: any;
    icon: React.ReactNode;
    color: 'gold' | 'green' | 'charcoal';
    highlight?: boolean;
}) {
    const colorMap = {
        gold: 'text-brand-gold',
        green: 'text-brand-green',
        charcoal: 'text-brand-charcoal',
    };

    return (
        <div className={`bg-white rounded-2xl p-5 border shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 ${highlight ? 'border-brand-gold/30 ring-1 ring-brand-gold/10' : 'border-black/5'}`}>
            <div className="flex justify-between items-start mb-3">
                <span className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/40">{title}</span>
                <div className={colorMap[color]}>{icon}</div>
            </div>
            <div className="text-2xl md:text-3xl font-serif font-bold text-brand-charcoal">{value || 0}</div>
        </div>
    );
}
