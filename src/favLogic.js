const FavLogic = (props) => {
    let products=props.data;
    let handleDelete=props.fn;
    let Title=props.Title;
 
    return ( 
    <div className="favlogic">
        <h1>{Title}</h1>
       {products.map((value) => ( 
        <div class="card">   
          <div class="container">
            <h4>
              <b>{value.Item}</b>
            </h4>
            <p>{value.Quality}</p>
            <p>{value.Quantity}</p>
            <p>{value.Price}</p>
            <button onClick={() => { handleDelete(value.id); }}> Delete</button>
          </div>
        </div>
      ))}
    </div>
     );
}
 
export default FavLogic;