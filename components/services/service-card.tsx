'use client';

import { Icons } from '@/components/common/icons';
import { Service } from '@/config/services';
import * as motion from 'framer-motion/client';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = Icons[service.icon] || Icons.laptop;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className='group relative overflow-hidden rounded-xl border bg-card p-6 text-card-foreground shadow-sm transition-all hover:shadow-md'
    >
      <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground'>
        <Icon className='h-6 w-6' />
      </div>
      <h3 className='mb-2 font-heading text-xl font-bold'>{service.title}</h3>
      <p className='text-sm text-muted-foreground'>{service.description}</p>
    </motion.div>
  );
}
