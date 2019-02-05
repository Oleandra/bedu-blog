import React from  'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../redux/actions/index'

const Add = ({ 
    title,
    excerpt,
    content,
    author,
    updateTitle,
    updateExcerpt,
    updateAuthor,
    updateContent,
    addPost
 }) => {

    return(        
    <div className="row justify-content-center">        
        <div className="col-8">
            <div className="card bg-light">
                <div className="card-body">
                    <h3 className="card-title text-center">New Post</h3>
                    <div className="form-group">
                        <input className="form-control" placeholder="Title..."
                            value = { title }
                            onChange = { (e) => updateTitle(e.target.value) }
                        />
                    </div>                    
                    <div className="form-group">
                        <textarea 
                        className="form-control"
                         col="3" 
                         placeholder="Write your excerpt here..."
                         value={excerpt}
                         onChange={(e)=> updateExcerpt(e.target.value)}>
                         </textarea>
                    </div>                    
                    <div className="form-group">
                        <textarea 
                        className="form-control" 
                        col="3" 
                        placeholder="Write your content here..."
                        value={content}
                         onChange={(e)=> updateContent(e.target.value)}></textarea>
                    </div>
                    <div className="form-group">
                        <textarea 
                        className="form-control" 
                        col="3" 
                        placeholder="Who are you ..."
                        value={author}
                         onChange={(e)=> updateAuthor(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="text-right">
                        <button className="btn btn-primary mr-1" onClick={() => addPost()}>Save</button>
                        <Link to="/home" className="btn btn-secondary">Cancel</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

const mapStateToProps = ({ post }) => {
    const { title, excerpt, content, author } = post.post
    return { title, excerpt, content, author }
}

export default connect(mapStateToProps, actions)(Add)