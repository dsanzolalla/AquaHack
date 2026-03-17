'use client';

import * as React from 'react';
import { ContaminationMap } from './contamination-map';
import { Button } from './ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { SlidersHorizontal } from 'lucide-react';
import { type MapMarkerData } from '@/lib/data';
import { useTranslations } from '@/hooks/use-translations';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { useDataContext } from '@/hooks/use-data';

export function MapDashboard() {
  const { mapMarkers: allMapMarkers } = useDataContext();
  const [markers, setMarkers] = React.useState<MapMarkerData[]>(allMapMarkers);
  const [problem, setProblem] = React.useState('all');
  const [priority, setPriority] = React.useState('all');
  const [isOpen, setIsOpen] = React.useState(false);
  const { t } = useTranslations();

  React.useEffect(() => {
    let filteredMarkers = allMapMarkers;

    if (problem !== 'all') {
      filteredMarkers = filteredMarkers.filter(
        (marker) => marker.problem === problem
      );
    }
    if (priority !== 'all') {
      filteredMarkers = filteredMarkers.filter(
        (marker) => marker.priority === priority
      );
    }

    setMarkers(filteredMarkers);
  }, [problem, priority, allMapMarkers]);

  const handleClearFilters = () => {
    setProblem('all');
    setPriority('all');
  };

  return (
    <div className="relative h-full">
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="absolute top-0 left-0 z-10 w-full p-4"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="flex justify-end">
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="mb-2 shadow-lg">
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                {t('showFilters')}
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent>
            <div className="grid grid-cols-1 gap-2 rounded-lg border bg-background/80 p-4 shadow-lg backdrop-blur-sm sm:grid-cols-2 md:grid-cols-3">
              <Select value={problem} onValueChange={setProblem}>
                <SelectTrigger>
                  <SelectValue placeholder={t('filterByType')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t('allProblemTypes')}</SelectItem>
                  <SelectItem value="BROKEN_PUMP">
                    {t('problem_brokenpump')}
                  </SelectItem>
                  <SelectItem value="TURBID_WATER">
                    {t('problem_turbidwater')}
                  </SelectItem>
                  <SelectItem value="DEAD_ANIMALS">
                    {t('problem_deadanimals')}
                  </SelectItem>
                  <SelectItem value="BAD_SMELL">{t('problem_badsmell')}</SelectItem>
                  <SelectItem value="SICKNESS_AFTER_DRINKING">
                    {t('problem_sicknessafterdrinking')}
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select value={priority} onValueChange={setPriority}>
                <SelectTrigger>
                  <SelectValue placeholder={t('filterByPriority')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t('allPriorities')}</SelectItem>
                  <SelectItem value="LOW">{t('priority_low')}</SelectItem>
                  <SelectItem value="MEDIUM">{t('priority_medium')}</SelectItem>
                  <SelectItem value="HIGH">{t('priority_high')}</SelectItem>
                </SelectContent>
              </Select>
              <Button onClick={handleClearFilters}>{t('clearFilters')}</Button>
            </div>
          </CollapsibleContent>
        </div>
      </Collapsible>
      <ContaminationMap markers={markers} />
    </div>
  );
}
