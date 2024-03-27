import { useState } from 'react'
import { GifGrid } from './components/GifGrid'
import { AddCategory } from './components/AddCategory'

export const GifApp = () => {
    const [ categories, setCategories ] = useState([ 'Bienvenidos', 'Si', 'No' ])
    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory) ) return
        setCategories([ newCategory, ...categories ])
    }

    return (
        <>
            <h1>HAIDEFINICHON 2.0</h1>
            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value) }
            />
            { 
                categories.map( ( category ) => (
                    <div className="category-container">
                        <GifGrid 
                            key={ category }
                            category={ category } />
                    </div>
                ))
            }
        </>
    )
}
