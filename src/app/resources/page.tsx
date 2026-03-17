'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useTranslations } from '@/hooks/use-translations';
import { useMemo } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ResourcesPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'resource-water-testing');
  const boilingWaterImage = PlaceHolderImages.find(p => p.id === 'resource-boiling-water');
  const waterFilterImage = PlaceHolderImages.find(p => p.id === 'resource-water-filter');
  const chemicalDisinfectionImage = PlaceHolderImages.find(p => p.id === 'resource-chemical-disinfection');
  const storingWaterImage = PlaceHolderImages.find(p => p.id === 'resource-storing-water');
  const { t } = useTranslations();

  const resources = useMemo(() => [
    {
      id: 'res-1',
      question: t('res-1-q'),
      answer: t('res-1-a'),
    },
    {
      id: 'res-2',
      question: t('res-2-q'),
      answer: t('res-2-a'),
    },
    {
      id: 'res-3',
      question: t('res-3-q'),
      answer: t('res-3-a'),
      image: storingWaterImage
    },
    {
      id: 'res-4',
      question: t('res-4-q'),
      answer: t('res-4-a'),
    },
  ], [t, storingWaterImage]);
  
  const waterTreatmentMethods = useMemo(() => [
    {
        id: 'treat-1',
        question: t('res-2-method-1-q'),
        answer: t('res-2-method-1-a'),
        image: boilingWaterImage,
    },
    {
        id: 'treat-2',
        question: t('res-2-method-2-q'),
        answer: t('res-2-method-2-a'),
        image: chemicalDisinfectionImage,
    },
    {
        id: 'treat-3',
        question: t('res-2-method-3-q'),
        answer: t('res-2-method-3-a'),
        image: waterFilterImage,
    },
  ], [t, boilingWaterImage, waterFilterImage, chemicalDisinfectionImage]);

  return (
    <div className="container mx-auto max-w-4xl py-8">
      <Card className="overflow-hidden">
        {heroImage && (
             <div className="relative h-48 w-full">
             <Image
               src={heroImage.imageUrl}
               alt={heroImage.description}
               data-ai-hint={heroImage.imageHint}
               fill
               className="object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
             <div className="absolute bottom-0 left-0 p-6">
                <h1 className="text-3xl font-bold text-white">{t('waterSafetyGuide')}</h1>
                <p className="text-gray-200">{t('waterSafetyGuideDescription')}</p>
             </div>
           </div>
        )}
       
        <div className="p-6">
          <h2 className="mb-4 text-2xl font-semibold text-primary">
            {t('faq')}
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {resources.map((resource) => (
              <AccordionItem value={resource.id} key={resource.id}>
                <AccordionTrigger className="text-left font-medium">
                  {resource.question}
                </AccordionTrigger>
                <AccordionContent className="whitespace-pre-line text-muted-foreground">
                  {resource.image && (
                    <div className="relative my-4 h-48 w-full overflow-hidden rounded-md">
                        <Image 
                            src={resource.image.imageUrl}
                            alt={resource.image.description}
                            fill
                            className="object-cover"
                            data-ai-hint={resource.image.imageHint}
                        />
                    </div>
                  )}
                  {resource.id === 'res-2' ? (
                    <>
                      <p className="mb-4">{t('res-2-intro')}</p>
                      <Accordion type="single" collapsible className="w-full">
                        {waterTreatmentMethods.map((method) => (
                          <AccordionItem value={method.id} key={method.id}>
                            <AccordionTrigger className="font-semibold text-foreground/80">
                              {method.question}
                            </AccordionTrigger>
                            <AccordionContent className="space-y-4 whitespace-pre-line text-muted-foreground">
                              {method.image && (
                                <div className="relative my-4 h-48 w-full overflow-hidden rounded-md">
                                    <Image 
                                        src={method.image.imageUrl}
                                        alt={method.image.description}
                                        fill
                                        className="object-cover"
                                        data-ai-hint={method.image.imageHint}
                                    />
                                </div>
                              )}
                              {method.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </>
                  ) : resource.id === 'res-4' ? (
                    <div className='space-y-4'>
                      <p>{resource.answer}</p>
                      <Button asChild>
                        <Link href="/potable-water">{t('res-4-cta')}</Link>
                      </Button>
                    </div>
                  ) : (
                    resource.answer
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Card>
    </div>
  );
}
