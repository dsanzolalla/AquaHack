'use client';
import { PotableWaterMap } from '@/components/potable-water-map';
import { waterPoints, type WaterPoint } from '@/lib/water-points';
import { useState } from 'react';

export default function PotableWaterPage() {
  const [points] = useState<WaterPoint[]>(waterPoints);

  return (
    <div className="h-full">
      <PotableWaterMap points={points} />
    </div>
  );
}
