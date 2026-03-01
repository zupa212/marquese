import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'analytics.json');

export interface ClickRecord {
    id: string;
    category: 'booking' | 'call' | 'directions' | 'service';
    label: string;
    page: string;
    timestamp: string;
    metadata?: Record<string, string>;
}

export const logClick = async (data: Omit<ClickRecord, 'id' | 'timestamp'>) => {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    let records: ClickRecord[] = [];
    if (fs.existsSync(DATA_FILE)) {
        const content = fs.readFileSync(DATA_FILE, 'utf-8');
        records = JSON.parse(content);
    }

    const newRecord: ClickRecord = {
        id: Math.random().toString(36).substring(2, 9),
        ...data,
        timestamp: new Date().toISOString(),
    };

    records.push(newRecord);
    fs.writeFileSync(DATA_FILE, JSON.stringify(records, null, 2));
    return newRecord;
};

export const getAnalytics = async () => {
    if (!fs.existsSync(DATA_FILE)) return [];
    const content = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(content) as ClickRecord[];
};
