import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
  query getMegaMenu {
        categoryList {
            id
            uid
            name
            children {
                id
                uid
                include_in_menu
                name
                breadcrumbs {
                    category_level
                    category_name
                    category_uid
                    category_url_key
                    category_url_path
                }
                position
                url_path
                meta_title
                meta_description
                meta_keywords
                children {
                    id
                    uid
                    include_in_menu
                    name
                    position
                    breadcrumbs {
                        category_level
                        category_name
                        category_uid
                        category_url_key
                        category_url_path
                    }
                    url_path
                    meta_title
                    meta_description
                    meta_keywords
                    children {
                        id
                        uid
                        include_in_menu
                        name
                        breadcrumbs {
                            category_level
                            category_name
                            category_uid
                            category_url_key
                            category_url_path
                        }
                        position
                        url_path
                        meta_title
                        meta_description
                        meta_keywords
                        children {
                            id
                            uid
                            include_in_menu
                            name
                            breadcrumbs {
                                category_level
                                category_name
                                category_uid
                                category_url_key
                                category_url_path
                            }
                            position
                            url_path
                            meta_title
                            meta_description
                            meta_keywords
                        }
                    }
                }
            }
        }
    }
`;
