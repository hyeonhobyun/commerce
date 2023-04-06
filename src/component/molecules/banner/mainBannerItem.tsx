import { useStyletron } from 'styletron-react';
import { Link } from '@component/atoms/link';
import Image from 'next/image';

interface MainBannerItemProps {
  id: number;
  image: string;
  redirectUrl: string;
}

const MainBannerItem = ({ id, image, redirectUrl }: MainBannerItemProps) => {
  const [css] = useStyletron();

  return (
    <Link
      href={redirectUrl}
      overrides={{
        Root: {
          style: {
            width: '100%',
            height: 'inherit',
            display: 'inherit',
          },
        },
      }}
    >
      <div
        className={css({
          width: '100vw',
          height: '100%',
          display: 'flex',
          position: 'relative',
        })}
      >
        <Image
          src={image}
          alt={`메인 배너 ${id} 번`}
          fill
          sizes="100%"
          className={css({
            objectFit: 'cover',
          })}
        />
      </div>
    </Link>
  );
};

export type { MainBannerItemProps };
export { MainBannerItem };
