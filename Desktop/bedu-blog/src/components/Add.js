import React from 'react'
import { Link } from 'react-router-dom'

const Add = () => {
  return (
  <div className="row justify-content-center">
  <div className="col-8">
  <div className="card bg-light">
  <div className="card-body">

  <h3 className="card-title text-center">New Post</h3>

  <div className="form-group">
  <input className="form-control" placeholder="Write your title here..."/>
  </div>

  <div className="form-group">
  <textarea className="form-control" col="3" placeholder="Write your excerpt here..."></textarea>
  </div>

  <div className="form-group">
  <textarea className="form-control" col="3" placeholder="Write your content here..."></textarea>
  </div>

  <div className="form-group">
  <input className="form-control" placeholder="Who are you"/>
  </div>

  <div className="text-right">
  <button className="btn btn-primary mr-1">Save</button>
  <Link to="/home" className="btn btn-secondary">Cancel</Link>
  </div>
  
  </div>
  </div>
  </div>
    </div>

  )
}

export default Add;
