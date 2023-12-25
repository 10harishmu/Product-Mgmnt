import "./css/categories.css"

const Categories = () => {
    return ( 
     <div className="categories">
        <h3>CATEGORIES</h3>
       <ul style={{padding:0}}>
       <li><a href="">PRODUCE</a></li>
        <li><a href="">GRAINS</a></li>
        <li><a href="">MEAT/PROTEIN</a></li>
        <li><a href="">DAIRY</a></li>
        <li><a href="">CANNED & DRIED PRODUCE</a></li>
       </ul>
     </div>
     );
}
 
export default Categories;