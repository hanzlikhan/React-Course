function AddItem1() {
  var itemName = 'Buy Milk';
  var date = '16/07/2024';
  return <div className="container text-container">
    <div className="row kg-row">
          <div className="col-6">{itemName}</div>
          <div className="col-4">{date}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger kg-button">
              Delete
            </button>
          </div>
        </div>
  </div>
}
export default AddItem1;