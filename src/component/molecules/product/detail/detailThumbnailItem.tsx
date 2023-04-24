import Image from 'next/image';
import { useStyletron } from 'styletron-react';

interface DetailThumbnailImageProps {
  id: number;
  thumbnailUrl: string;
}

const DetailThumbnailImage = ({
  id,
  thumbnailUrl,
}: DetailThumbnailImageProps) => {
  const [css] = useStyletron();

  return (
    <div
      className={css({
        width: '100%',
        height: '100%',
        aspectRatio: 1,
        display: 'flex',
        position: 'relative',
        flex: 1,
      })}
    >
      <Image
        src={thumbnailUrl}
        alt={`상세 페이지 썸네일 ${id} 번`}
        fill
        sizes="100%"
        className={css({
          objectFit: 'cover',
        })}
      />
    </div>
  );
};

export type { DetailThumbnailImageProps };
export { DetailThumbnailImage };
