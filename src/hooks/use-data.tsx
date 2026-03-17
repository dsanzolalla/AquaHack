'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { reports as initialReports, mapMarkers as initialMapMarkers, Report, MapMarkerData, generateNewReportId } from '@/lib/data';
import { useToast } from './use-toast';
import { useTranslations } from './use-translations';

type FlowiseData = {
    location: string;
    problem: 'BROKEN_PUMP' | 'TURBID_WATER' | 'DEAD_ANIMALS' | 'BAD_SMELL' | 'SICKNESS_AFTER_DRINKING';
    description: string;
    priority: 'LOW' | 'MEDIUM' | 'HIGH';
};

type DataContextType = {
  reports: Report[];
  mapMarkers: MapMarkerData[];
  addReport: (data: FlowiseData) => Promise<void>;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [reports, setReports] = useState<Report[]>(initialReports);
  const [mapMarkers, setMapMarkers] = useState<MapMarkerData[]>(initialMapMarkers);
  const { toast } = useToast();
  const { t } = useTranslations();
  
  useEffect(() => {
    setReports(initialReports);
    setMapMarkers(initialMapMarkers);
  }, []);

  const geocodeLocation = useCallback(async (address: string): Promise<{ lat: number; lng: number } | null> => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!apiKey) {
      console.error("Google Maps API Key is missing.");
      toast({
        variant: "destructive",
        title: t('errorProcessing'),
        description: "Google Maps API Key is missing.",
      });
      return null;
    }
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}&region=UG`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === 'OK') {
        return data.results[0].geometry.location;
      } else {
        console.error('Geocoding failed:', data.status, data.error_message);
        toast({
            variant: "destructive",
            title: t('errorProcessing'),
            description: "Could not find coordinates for the provided location.",
        });
        return null;
      }
    } catch (error) {
      console.error('Error fetching geocode data:', error);
      toast({
        variant: "destructive",
        title: t('errorProcessing'),
        description: "Error fetching geocode data.",
    });
      return null;
    }
  }, [t, toast]);

  const addReport = useCallback(async (data: FlowiseData) => {
    const position = await geocodeLocation(data.location);

    if (!position) {
      return;
    }
    
    setReports(prevReports => {
      const newId = generateNewReportId(prevReports);
      const currentDate = new Date().toISOString().split('T')[0];

      const newReport: Report = {
        id: newId,
        location: data.location,
        problem: data.problem,
        description: data.description,
        priority: data.priority,
        date: currentDate,
        status: 'OPEN',
      };
      
      const newMapMarker: MapMarkerData = {
        id: newId,
        position: position,
        problem: data.problem,
        priority: data.priority,
        date: currentDate,
        status: 'OPEN',
        description: data.description,
      };

      setMapMarkers(prevMapMarkers => [newMapMarker, ...prevMapMarkers]);
      
      return [newReport, ...prevReports];
    });

  }, [geocodeLocation]);

  return (
    <DataContext.Provider value={{ reports, mapMarkers, addReport }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useDataContext must be used within a DataProvider');
  }
  return context;
};
