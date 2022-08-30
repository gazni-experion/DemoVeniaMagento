import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from './categories.gql';
import { TreeView, TreeItem } from '@mui/lab';
import { ArrowDownCircle, PlayCircle } from 'react-feather';

const Categories = () => {
    const { loading, error, data } = useQuery(GET_CATEGORIES);

    const { categoryList } = data;

    console.log(categoryList);

    //Main category
    const View = () => {
        return categoryList.map(item => {
            return (
                <TreeView
                    aria-label="file system navigator"
                    defaultCollapseIcon={<ArrowDownCircle />}
                    defaultExpandIcon={<PlayCircle />}
                    key={item.id}
                >
                    <TreeItem  nodeId={item.uid} label={item.name}>
                        <SubMenu {...item} />
                    </TreeItem>
                </TreeView>
            );
        });
    };

    // Sub categories using recursive array mapping 
    const SubMenu = data => {
        return data.children.map(subitem => {
            return (
                <TreeItem key={subitem.id} nodeId={subitem.uid} label={subitem.name}>
                    <SubMenu {...subitem} />
                </TreeItem>
            );
        });
    };


    // Return
    return <View />;
};

export default Categories;
