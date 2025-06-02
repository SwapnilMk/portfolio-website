interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <>
      <div className='mt-5 flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8'>
        <div className='flex-1 space-y-4'>
          <h1 className='inline-block font-heading text-4xl capitalize tracking-tight lg:text-5xl'>
            {title}
          </h1>
          <p className='text-lg text-muted-foreground'>{description}</p>
        </div>
      </div>
      <hr className='my-6' />
    </>
  );
}
