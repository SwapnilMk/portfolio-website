'use client';

import { useState, useEffect } from 'react';
import {
  format,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameDay,
  addDays,
  differenceInDays
} from 'date-fns';

interface ContributionDay {
  date: string; // ISO date string (e.g., "2026-09-13")
  count: number;
}

interface GitHubCalendarProps {
  data: ContributionDay[]; // Contribution data
  startDate: Date;
  endDate: Date;
  colors?: string[]; // Custom color scale
}

const GitHubCalendar = ({
  data,
  startDate,
  endDate,
  colors = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39']
}: GitHubCalendarProps) => {
  const [contributions, setContributions] = useState<ContributionDay[]>([]);

  useEffect(() => {
    setContributions(data.map((item) => ({ ...item })));
  }, [data]);

  const getColor = (count: number) => {
    if (count === 0) return colors[0];
    if (count <= 2) return colors[1];
    if (count <= 4) return colors[2];
    if (count <= 7) return colors[3];
    return colors[4] || colors[colors.length - 1];
  };

  // Calculate weeks dynamically based on start and end dates
  const currentWeekStart = startOfWeek(startDate, { weekStartsOn: 0 });
  const finalWeekEnd = endOfWeek(endDate, { weekStartsOn: 0 });
  const totalDays = differenceInDays(finalWeekEnd, currentWeekStart) + 1;
  const weeksCount = Math.max(1, Math.ceil(totalDays / 7));

  // Render weeks
  const renderWeeks = () => {
    const weeksArray = [];
    let weekStart = currentWeekStart;

    for (let i = 0; i < weeksCount; i++) {
      const weekDays = eachDayOfInterval({
        start: weekStart,
        end: endOfWeek(weekStart, { weekStartsOn: 0 })
      });

      weeksArray.push(
        <div key={i} className="flex flex-col gap-1 flex-shrink-0">
          {weekDays.map((day, index) => {
            const dateStr = format(day, 'yyyy-MM-dd');
            // Filter contributions matching the date
            const contribution = contributions.find((c) => c.date === dateStr);
            const isOutOfRange = day < startDate || day > endDate;
            const color = isOutOfRange
              ? 'transparent'
              : contribution
              ? getColor(contribution.count)
              : colors[0];

            return (
              <div
                key={index}
                className={`h-3 w-3 rounded-[3px] transition-colors duration-200 ${
                  isOutOfRange ? 'pointer-events-none' : 'hover:scale-110 cursor-pointer'
                }`}
                style={{ backgroundColor: color }}
                title={
                  isOutOfRange
                    ? undefined
                    : `${format(day, 'PPP')}: ${contribution?.count || 0} contributions`
                }
              />
            );
          })}
        </div>
      );
      weekStart = addDays(weekStart, 7);
    }

    return weeksArray;
  };

  // Render Month Labels dynamically aligned with the columns
  const renderMonthLabels = () => {
    const months: { label: string; colSpan: number }[] = [];
    let weekStart = currentWeekStart;
    let lastMonthName = '';
    let currentMonthWeeks = 0;

    for (let i = 0; i < weeksCount; i++) {
      const monthName = format(weekStart, 'MMM');
      if (monthName !== lastMonthName) {
        if (currentMonthWeeks > 0) {
          months[months.length - 1].colSpan = currentMonthWeeks;
        }
        months.push({ label: monthName, colSpan: 0 });
        lastMonthName = monthName;
        currentMonthWeeks = 0;
      }
      currentMonthWeeks++;
      weekStart = addDays(weekStart, 7);
    }

    if (months.length > 0) {
      months[months.length - 1].colSpan = currentMonthWeeks;
    }

    return (
      <div className="flex text-xs text-slate-500 dark:text-slate-400 select-none pb-1">
        {months.map((m, idx) => (
          <div
            key={idx}
            style={{ width: `${m.colSpan * 16}px` }}
            className="flex-shrink-0 truncate text-left pr-1"
          >
            {m.colSpan >= 2 ? m.label : ''}
          </div>
        ))}
      </div>
    );
  };

  const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="rounded-xl border bg-slate-50/50 p-4 dark:bg-slate-900/30 w-full overflow-hidden">
      <div className="flex w-full min-w-[760px] md:min-w-0 md:justify-center overflow-x-auto py-2">
        <div className="flex gap-2 w-full justify-start md:justify-center">
          {/* Day Labels */}
          <div className="flex flex-col justify-between py-1 text-slate-400 dark:text-slate-500 text-[10px] select-none pr-1">
            {dayLabels.map((day, index) => (
              <span key={index} className="h-3 leading-3">
                {index % 2 === 1 ? day : ''}
              </span>
            ))}
          </div>

          {/* Calendar Grid Container */}
          <div className="flex flex-col">
            {renderMonthLabels()}
            <div className="flex gap-1 w-full overflow-x-auto pb-1">
              {renderWeeks()}
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 flex items-center justify-end gap-1.5 text-xs text-slate-500 dark:text-slate-400 select-none pr-4">
        <span>Less</span>
        {colors.map((color, index) => (
          <div
            key={index}
            className="h-3 w-3 rounded-[3px]"
            style={{ backgroundColor: color }}
          />
        ))}
        <span>More</span>
      </div>
    </div>
  );
};

export { GitHubCalendar };
