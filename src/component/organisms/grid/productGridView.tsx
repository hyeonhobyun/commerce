import { GridView } from '@component/molecules/grid/gridView';
import { ProductItemProps } from '@component/molecules/product/productItem';
import dynamic from 'next/dynamic';
import LazyLoad from 'react-lazyload';
import { EmptyPlaceholder } from '@component/atoms/emptyPlaceholder';

const DynamicProductItem = dynamic<ProductItemProps>(
  () =>
    import('@component/molecules/product/productItem').then(
      ({ ProductItem }) => ProductItem,
    ),
  {
    ssr: false,
    loading: () => <EmptyPlaceholder style={{ height: '212px' }} />,
  },
);

interface ProductGridViewProps {
  data: ProductItemProps[];
}

const ProductGridView = ({ data }: ProductGridViewProps) => {
  return (
    <GridView
      data={data}
      columnCount={4}
      columnGap="16px"
      rowGap="8px"
      renderContent={(item) => (
        <LazyLoad height={212} once={true}>
          <DynamicProductItem {...item} />
        </LazyLoad>
      )}
    />
  );
};

export type { ProductGridViewProps };
export { ProductGridView };
