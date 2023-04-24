import { ListView } from '@component/molecules/view/listView';
import { ProductListItemProps } from '@component/molecules/item/product/productListItem';
import dynamic from 'next/dynamic';
import { EmptyPlaceholder } from '@component/atoms/emptyPlaceholder';
import LazyLoad from 'react-lazyload';

const DynamicProductList = dynamic<ProductListItemProps>(
  () =>
    import('@component/molecules/item/product/productListItem').then(
      ({ ProductListItem }) => ProductListItem,
    ),
  {
    ssr: false,
    loading: () => <EmptyPlaceholder style={{ height: '120px' }} />,
  },
);

interface ProductListViewProps {
  data: ProductListItemProps[];
}

const ProductListView = ({ data }: ProductListViewProps) => {
  return (
    <ListView
      data={data}
      rowGap="16px"
      renderContent={(item, index) => (
        <LazyLoad height={120} once={true}>
          <DynamicProductList key={index} {...item} />
        </LazyLoad>
      )}
    />
  );
};

export type { ProductListViewProps };
export { ProductListView };
