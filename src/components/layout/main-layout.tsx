'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, Map, Shield, Droplet, Home } from 'lucide-react';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { Header } from './header';
import { useTranslations } from '@/hooks/use-translations';
import Image from 'next/image';
import { useToast } from '@/hooks/use-toast';
import { useDataContext } from '@/hooks/use-data';

type FlowiseData = {
  location: string;
  problem: 'BROKEN_PUMP' | 'TURBID_WATER' | 'DEAD_ANIMALS' | 'BAD_SMELL' | 'SICKNESS_AFTER_DRINKING';
  description: string;
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
};

export function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { t } = useTranslations();
  const { toast } = useToast();
  const { addReport } = useDataContext();

  const handleFlowiseData = React.useCallback(async (event: Event) => {
    const customEvent = event as CustomEvent<FlowiseData>;
    const data = customEvent.detail;
  
    if (data && data.location && data.problem && data.priority) {
      await addReport(data);
  
      toast({
        title: t('reportThanks'),
        description: `Report for ${data.location} has been created.`,
      });
    }
  }, [t, toast, addReport]);

  React.useEffect(() => {
    window.addEventListener('flowise-json', handleFlowiseData);
    return () => {
      window.removeEventListener('flowise-json', handleFlowiseData);
    };
  }, [handleFlowiseData]);


  const menuItems = [
    {
      href: '/',
      label: t('home'),
      icon: Home,
    },
    {
      href: '/map',
      label: t('contaminationMap'),
      icon: Map,
    },
    {
      href: '/potable-water',
      label: t('potableWater'),
      icon: Droplet,
    },
    {
      href: '/resources',
      label: t('waterSafetyGuide'),
      icon: BookOpen,
    },
    {
      href: '/authorities',
      label: t('authoritiesPanel'),
      icon: Shield,
    },
  ];

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <Link href="/" className="flex items-center gap-2 text-sidebar-foreground">
            <Image 
              src="https://i.imgur.com/rASmN1U.png"
              alt="AquaHack Logo"
              width={32}
              height={32}
              className="size-8 mt-1"
            />
            <span className="text-lg font-semibold text-sidebar-foreground">AquaHack</span>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === item.href}
                  className={cn(
                    'justify-start',
                    pathname === item.href &&
                      'bg-sidebar-accent text-sidebar-accent-foreground'
                  )}
                  tooltip={item.label}
                >
                  <Link href={item.href}>
                    <item.icon className="size-5" />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="flex flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
