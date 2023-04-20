import { GridView } from '@component/molecules/view/gridView';
import dynamic from 'next/dynamic';
import LazyLoad from 'react-lazyload';
import { EmptyPlaceholder } from '@component/atoms/emptyPlaceholder';
import { ProductItemType } from '@type/item/product';

const DynamicProductGridItem = dynamic<ProductItemType>(
  () =>
    import('@component/molecules/item/product/productGridItem').then(
      ({ ProductGridItem }) => ProductGridItem,
    ),
  {
    ssr: false,
    loading: () => <EmptyPlaceholder style={{ height: '212px' }} />,
  },
);

interface ProductGridViewProps {
  data: ProductItemType[];
}

const ProductGridView = ({ data }: ProductGridViewProps) => {
  return (
    <GridView
      data={data}
      columnCount={4}
      columnGap="16px"
      rowGap="8px"
      renderContent={(item, index) => (
        <LazyLoad height={212} once={true}>
          <DynamicProductGridItem key={index} {...item} />
        </LazyLoad>
      )}
    />
  );
};

export type { ProductGridViewProps };
export { ProductGridView };
