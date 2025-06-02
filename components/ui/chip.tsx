interface ChipProps {
  content: string;
}

export default function Chip({ content }: ChipProps) {
  return (
    <div className='center relative inline-block select-none whitespace-nowrap rounded-md border border-gray-300 px-3 py-2 align-baseline font-sans text-xs font-bold leading-none text-primary dark:bg-transparent'>
      {content}
    </div>
  );
}
