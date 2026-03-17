'use client';

import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from '@vis.gl/react-google-maps';
import { type MapMarkerData } from '@/lib/data';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Badge } from './ui/badge';
import { useTranslations } from '@/hooks/use-translations';

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

type PriorityColors = {
    [key in 'LOW' | 'MEDIUM' | 'HIGH']: { background: string, glyphColor: string, borderColor: string }
}

const priorityColors: PriorityColors = {
    LOW: { background: '#FBBF24', glyphColor: '#ffffff', borderColor: '#F59E0B' }, // Yellow/Amber
    MEDIUM: { background: '#F97316', glyphColor: '#ffffff', borderColor: '#EA580C' }, // Orange
    HIGH: { background: '#FF0000', glyphColor: '#000000', borderColor: '#FF0000' }, // Pure Red
};

export function ContaminationMap({ markers }: { markers: MapMarkerData[] }) {
  const [selectedMarkerId, setSelectedMarkerId] = useState<string | null>(null);
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

  const getTranslatedStatus = (status: MapMarkerData['status']) => {
    switch (status) {
      case 'OPEN':
        return t('received');
      case 'In Progress':
        return t('inProgress');
      case 'Resolved':
        return t('resolved');
      default:
        return status;
    }
  };

  const getTranslatedProblem = (problem: MapMarkerData['problem']) => {
    const key = `problem_${problem.toLowerCase().replace(/_/g, '')}`;
    return t(key);
  }

  const getTranslatedPriority = (priority: MapMarkerData['priority']) => {
    const key = `priority_${priority.toLowerCase()}`;
    return t(key);
  }

  return (
    <APIProvider apiKey={API_KEY}>
      <Map
        mapId={'a7b472e3347a55b3'}
        defaultZoom={7}
        defaultCenter={defaultCenter}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
      >
        {markers.map((marker) => (
          <AdvancedMarker
            key={marker.id}
            position={marker.position}
            onClick={() => setSelectedMarkerId(marker.id)}
          >
             <Pin 
                background={priorityColors[marker.priority].background}
                glyphColor={priorityColors[marker.priority].glyphColor}
                borderColor={priorityColors[marker.priority].borderColor}
             />
          </AdvancedMarker>
        ))}

        {selectedMarkerId && markers.find(m => m.id === selectedMarkerId) && (() => {
          const selectedMarker = markers.find(m => m.id === selectedMarkerId);
          if (!selectedMarker) return null;
          
          return (
            <InfoWindow
              position={selectedMarker.position}
              onCloseClick={() => setSelectedMarkerId(null)}
            >
              <Card className="border-none shadow-none max-w-xs">
                <CardHeader className="p-2">
                  <CardTitle className="flex items-center justify-between text-base">
                    {t('incidentReport')}
                    <Badge variant={selectedMarker.status === 'Resolved' ? 'secondary' : 'default'} className={
                      selectedMarker.priority === 'HIGH' ? 'bg-destructive text-destructive-foreground' : ''
                    }>
                      {getTranslatedPriority(selectedMarker.priority)}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-2 text-sm text-muted-foreground space-y-1">
                  <p><strong>{t('problem')}:</strong> {getTranslatedProblem(selectedMarker.problem)}</p>
                  <p><strong>{t('description')}:</strong> {t(selectedMarker.description)}</p>
                  <p><strong>{t('date')}:</strong> {selectedMarker.date}</p>
                  <p><strong>{t('status')}:</strong> {getTranslatedStatus(selectedMarker.status)}</p>
                </CardContent>
              </Card>
            </InfoWindow>
          )
        })()}
      </Map>
    </APIProvider>
  );
}
