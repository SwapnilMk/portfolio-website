'use client';

import { Modal } from '@/components/ui/modal';
import { useModalStore } from '@/hooks/use-modal-store';

export const CustomModal = () => {
  const modalStore = useModalStore();

  return (
    <Modal
      title=''
      description=''
      isOpen={modalStore.isOpen}
      onClose={modalStore.onClose}
    >
      <div className='flex flex-col items-center justify-center gap-3 pb-2 md:flex-row'>
        <modalStore.icon />
        <div className='flex flex-col items-center justify-center md:items-start'>
          <h1 className='font-heading text-2xl sm:text-3xl md:text-3xl lg:text-4xl'>
            {modalStore.title}
          </h1>
          <p className='mt-1 text-center md:text-left'>
            {modalStore.description}
          </p>
        </div>
      </div>
    </Modal>
  );
};
