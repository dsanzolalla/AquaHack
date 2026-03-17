'use client';

import { usePathname } from 'next/navigation';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { useTranslations } from '@/hooks/use-translations';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Globe } from 'lucide-react';

export function Header() {
  const pathname = usePathname();
  const { t, setLanguage, language } = useTranslations();

  const titles: Record<string, string> = {
    '/': t('dashboard'),
    '/map': t('contaminationMap'),
    '/potable-water': t('potableWaterMap'),
    '/resources': t('waterSafetyGuide'),
    '/authorities': t('authoritiesPanel'),
  };

  return (
    <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:h-16 sm:px-6">
      <SidebarTrigger className="md:hidden" />
      <h1 className="text-lg font-semibold sm:text-xl">{titles[pathname] ?? t('dashboard')}</h1>
      <div className="ml-auto flex items-center gap-2">
        <Globe className="h-5 w-5 text-muted-foreground" />
        <Select value={language} onValueChange={setLanguage}>
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="es">Español</SelectItem>
            <SelectItem value="sw">Kiswahili</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </header>
  );
}
