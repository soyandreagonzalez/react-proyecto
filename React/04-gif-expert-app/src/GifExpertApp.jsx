import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ]);

  const onAddCategory = (NewCategory) => {
    categories.push(NewCategory);
    setCategories([ NewCategory, ...categories]);
  }

  console.log(categories);

  return (
    <>


      {/* Título */}
       <h1>GifExpertApp</h1>

     
     
       {/* Input */}
       <AddCategory 
        onNewCategory={event => onAddCategory(event)}
       />



      {/* Listado de Gif */}

 

      <ol>
        {
          categories.map(category => {
            return <li key={category}>{category}</li>
          })
        }
      </ol>



         {/*Gif Item */}


    </> 
  )
}
