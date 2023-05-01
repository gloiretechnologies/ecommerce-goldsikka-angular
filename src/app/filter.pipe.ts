import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(products: any = {}, searchText: string = '') {
    if (!products) {
      return {};
    }

    if (searchText == '') {
      return products;
    }

    return products.filter((items: { product_name: string; product_content: string; }) => {
      return (
        items.product_name.toLowerCase().includes(searchText) ||
        items.product_content.toLowerCase().includes(searchText)
      );
    });
  }
}