import '../style1.css'
function Ngoform(){
    return(
    <div className="body">
    <div className="main">
     <div class="mb-3 contact">
     <h1>NGO Registration form</h1>
     <div className="form">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  <label for="exampleFormControlInput1" class="form-label">NGO Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="name"/>
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1 text" rows="3" col ="10"></textarea>
  <button type="button" class="btn btn-primary">Submit</button>

</div>


</div>
</div>
    </div>);
}
export default Ngoform;