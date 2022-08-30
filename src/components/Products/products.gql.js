import {gql} from '@apollo/client';

export const PRODUCT_LIST = gql `
query products($page:Int, $size:Int){
  products(
  filter: {}
  currentPage:$page
  pageSize:$size
  ){
    total_count
    items{
      uid
      name
      sku
      price_range {
        minimum_price {
          regular_price {
            value
            currency
          }
        }
      }
    }
    page_info{
      page_size
      current_page
      total_pages
    }   
  }
}
`