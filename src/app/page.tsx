'use client';

import {
  BookOpen,
  Droplet,
  Home,
  Map,
  Shield,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useTranslations } from '@/hooks/use-translations';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function DashboardPage() {
  const { t } = useTranslations();
  const heroImage = PlaceHolderImages.find((p) => p.id === 'hero-water-source');

  const sections = [
    {
      icon: Map,
      href: '/map',
      title: t('dashboard_map_title'),
      description: t('dashboard_map_desc'),
      cta: t('dashboard_map_cta'),
    },
    {
        icon: Droplet,
        href: '/potable-water',
        title: t('dashboard_potable_title'),
        description: t('dashboard_potable_desc'),
        cta: t('dashboard_potable_cta'),
      },
    {
      icon: BookOpen,
      href: '/resources',
      title: t('dashboard_resources_title'),
      description: t('dashboard_resources_desc'),
      cta: t('dashboard_resources_cta'),
    },
    {
      icon: Shield,
      href: '/authorities',
      title: t('dashboard_authorities_title'),
      description: t('dashboard_authorities_desc'),
      cta: t('dashboard_authorities_cta'),
    },
  ];

  return (
    <div className="container mx-auto flex flex-1 flex-col py-8">
      <Card className="mb-4 flex flex-col overflow-hidden items-center justify-center bg-transparent border-none shadow-none">
        <Image
          src="https://i.imgur.com/tWH6MJj.png"
          alt="AquaHack App Logo"
          width={180}
          height={180}
          className='p-4'
        />
        <div className="relative h-80 w-full">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute flex h-full flex-col justify-end p-4 md:p-6">
            <h2 className="text-xl font-bold text-white md:text-3xl">
              {t('missionTitle')}
            </h2>
            <p className="mt-2 max-w-2xl text-base text-gray-200">
              {t('missionDescription')}
            </p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {sections.map((section) => (
          <Card key={section.href} className="flex flex-col">
            <CardHeader>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <section.icon className="h-6 w-6" />
              </div>
              <CardTitle>{section.title}</CardTitle>
              <CardDescription>{section.description}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto">
              <Button asChild className="w-full">
                <Link href={section.href}>{section.cta}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
