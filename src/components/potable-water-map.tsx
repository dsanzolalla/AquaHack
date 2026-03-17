'use client';

import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from '@vis.gl/react-google-maps';
import { type WaterPoint } from '@/lib/water-points';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useTranslations } from '@/hooks/use-translations';
import { Droplet } from 'lucide-react';

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

export function PotableWaterMap({ points }: { points: WaterPoint[] }) {
  const [selectedPointId, setSelectedPointId] = useState<string | null>(null);
  const { t } = useTranslations();

  if (!API_KEY) {
    return (
      <div className="flex h-full items-center justify-center rounded-lg bg-muted">
        <div className="max-w-md text-center">
          <h2 className="text-xl font-semibold text-foreground">Map Unavailable</h2>
          <p className="mt-2 text-muted-foreground">
            The Google Maps API Key is missing. Please add the
            `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` to your environment variables to
            display the map.
          </p>
        </div>
      </div>
    );
  }

  const defaultCenter = {
    lat: 1.3733,
    lng: 32.2903,
  };

  const getTranslatedType = (type: WaterPoint['type']) => {
    const key = `waterpoint_type_${type.toLowerCase()}`;
    return t(key);
  };
  
  const selectedPoint = points.find(p => p.point_id === selectedPointId);

  return (
    <APIProvider apiKey={API_KEY}>
      <Map
        mapId={'a7b472e3347a55b3'}
        defaultZoom={7}
        defaultCenter={defaultCenter}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
      >
        {points.map((point) => (
          <AdvancedMarker
            key={point.point_id}
            position={point.position}
            onClick={() => setSelectedPointId(point.point_id)}
          >
             <Pin 
                background={'hsl(var(--primary))'}
                glyphColor={'hsl(var(--primary-foreground))'}
                borderColor={'hsl(var(--primary))'}
             >
                <Droplet className="h-6 w-6" />
             </Pin>
          </AdvancedMarker>
        ))}

        {selectedPoint && (
            <InfoWindow
              position={selectedPoint.position}
              onCloseClick={() => setSelectedPointId(null)}
            >
              <Card className="border-none shadow-none max-w-xs">
                <CardHeader className="p-2">
                  <CardTitle className="flex items-center justify-between text-base">
                    {t('potableWaterPoint')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-2 text-sm text-muted-foreground space-y-1">
                  <p><strong>{t('locationName')}:</strong> {selectedPoint.location_name}</p>
                  <p><strong>{t('city')}:</strong> {selectedPoint.city}</p>
                  <p><strong>{t('type')}:</strong> {getTranslatedType(selectedPoint.type)}</p>
                  <p><strong>{t('lastCheckDate')}:</strong> {new Date(selectedPoint.last_check_date).toLocaleDateString()}</p>
                </CardContent>
              </Card>
            </InfoWindow>
          )}
      </Map>
    </APIProvider>
  );
}
