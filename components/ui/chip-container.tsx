import Chip from './chip';

interface ChipContainerProps {
  textArr: string[];
}

export default function ChipContainer({ textArr }: ChipContainerProps) {
  return (
    <div className='my-3 flex flex-wrap gap-2'>
      {textArr.map((it, ind) => (
        <Chip key={ind} content={it} />
      ))}
    </div>
  );
}
