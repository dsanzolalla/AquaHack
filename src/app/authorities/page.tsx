'use client';

import { AuthoritiesTable } from '@/components/authorities-table';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useDataContext } from '@/hooks/use-data';
import { useTranslations } from '@/hooks/use-translations';

export default function AuthoritiesPage() {
  const { t } = useTranslations();
  const { reports } = useDataContext();

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle>{t('reportsDashboard')}</CardTitle>
          <CardDescription>
            {t('reportsDashboardDescription')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AuthoritiesTable reports={reports} />
        </CardContent>
      </Card>
    </div>
  );
}
