'use client';

import { useEffect, useState } from 'react';

export default function TestApiPage() {
  const api = process.env.NEXT_PUBLIC_API_BASE;
  const [data, setData] = useState<{ message: string } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${api}/api/data`);
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error('API 호출 실패:', error);
      }
    };

    fetchData();
  }, [api]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🧪 Flask API 호출 테스트</h1>
      {data ? (
        <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>데이터를 불러오는 중입니다...</p>
      )}
    </div>
  );
}
