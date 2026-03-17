'use client';

import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { type Report } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useTranslations } from '@/hooks/use-translations';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

type AuthoritiesTableProps = {
  reports: Report[];
};

export function AuthoritiesTable({ reports }: AuthoritiesTableProps) {
  const [selectedReportId, setSelectedReportId] = React.useState<string | null>(null);
  const { t } = useTranslations();
  
  const selectedReport = React.useMemo(() => {
    return reports.find(report => report.id === selectedReportId) || null;
  }, [reports, selectedReportId]);

  const getPriorityBadgeVariant = (priority: Report['priority']) => {
    switch (priority) {
      case 'HIGH':
        return 'destructive';
      case 'MEDIUM':
        return 'default';
      case 'LOW':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  const getTranslatedStatus = (status: Report['status']) => {
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
  
  const getTranslatedProblem = (problem: Report['problem']) => {
    const key = `problem_${problem.toLowerCase().replace(/_/g, '')}`;
    return t(key);
  }

  const getTranslatedPriority = (priority: Report['priority']) => {
    const key = `priority_${priority.toLowerCase()}`;
    return t(key);
  }
  
  const getStatusBadgeClass = (status: Report['status']) => {
    switch (status) {
      case 'Resolved':
        return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/50 dark:text-green-300 dark:border-green-800';
      case 'In Progress':
        return 'bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/50 dark:text-amber-300 dark:border-amber-800';
      case 'OPEN':
        return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/50 dark:text-blue-300 dark:border-blue-800';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };


  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t('location')}</TableHead>
              <TableHead>{t('problem')}</TableHead>
              <TableHead>{t('priority')}</TableHead>
              <TableHead>{t('date')}</TableHead>
              <TableHead>{t('status')}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reports.map((report) => (
              <TableRow key={report.id} onClick={() => setSelectedReportId(report.id)} className="cursor-pointer">
                <TableCell>{report.location}</TableCell>
                <TableCell>{getTranslatedProblem(report.problem)}</TableCell>
                <TableCell>
                  <Badge variant={getPriorityBadgeVariant(report.priority)}>
                    {getTranslatedPriority(report.priority)}
                  </Badge>
                </TableCell>
                <TableCell>{report.date}</TableCell>
                <TableCell>
                  <Badge className={cn('whitespace-nowrap', getStatusBadgeClass(report.status))}>
                    {getTranslatedStatus(report.status)}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={!!selectedReport} onOpenChange={(open) => !open && setSelectedReportId(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t('reportDetails')}</DialogTitle>
            <DialogDescription>
              {t('reportDetailsDescription')} {selectedReport?.id}
            </DialogDescription>
          </DialogHeader>
          {selectedReport && (
            <div className="mt-4 space-y-4 text-sm">
              <div>
                <strong className="font-medium text-foreground">{t('reportId')}:</strong>
                <p className="text-muted-foreground">{selectedReport.id}</p>
              </div>
              <div>
                <strong className="font-medium text-foreground">{t('location')}:</strong>
                <p className="text-muted-foreground">{selectedReport.location}</p>
              </div>
              <div>
                <strong className="font-medium text-foreground">{t('problem')}:</strong>
                <p className="text-muted-foreground">{getTranslatedProblem(selectedReport.problem)}</p>
              </div>
              <div>
                <strong className="font-medium text-foreground">{t('description')}:</strong>
                <p className="text-muted-foreground">{t(selectedReport.description)}</p>
              </div>
              <div>
                <strong className="font-medium text-foreground">{t('priority')}:</strong>
                <p>
                  <Badge variant={getPriorityBadgeVariant(selectedReport.priority)}>
                    {getTranslatedPriority(selectedReport.priority)}
                  </Badge>
                </p>
              </div>
              <div>
                <strong className="font-medium text-foreground">{t('date')}:</strong>
                <p className="text-muted-foreground">{selectedReport.date}</p>
              </div>
              <div>
                <strong className="font-medium text-foreground">{t('status')}:</strong>
                <Badge className={cn('whitespace-nowrap', getStatusBadgeClass(selectedReport.status))}>
                    {getTranslatedStatus(selectedReport.status)}
                </Badge>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
