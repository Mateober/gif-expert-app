import React from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([""]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onAddCategory={(value) => onAddCategory(value)} />
            <ol>
                {categories.map((category) => {
                    return <GifGrid key={category} category={category} />;
                })}
            </ol>
        </>
    );
};
