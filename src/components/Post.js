import React, {Component} from 'react';
//import axios from 'axios';
import {connect} from 'react-redux';
import {deletePost} from '../Actions/postActions'

class Post extends Component{

    // state = {
    //     post: null
    // }

    

    // componentDidMount(){
    //     let id = this.props.match.params.postId;
    //     axios.get("https://jsonplaceholder.typicode.com/posts/"+ id).
    //        then(res =>{
    //            console.log(res.data)
    //            this.setState({
    //                post: res.data
    //            })
    //         })

    // }
    
    handleClick = () =>  {
        console.log(this.props.match.params.postId)
        this.props.deletePost(this.props.match.params.postId)

        //redirecting the user to the homepage
        this.props.history.push('/')
    }


    render(){
        console.log(this.props)
        let id = this.props.match.params.postId;
        const posts = this.props.state 
        const postToDisp =  posts.find(p => p.id === id);      
        const post = postToDisp ? (
            <div className="post">
                <h4 className="center">{postToDisp.title}</h4>
                <p>{postToDisp.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        Delete Todo
                    </button>
                </div>
            </div>
        ) : (
            <div className="center">Loading todos.......</div>
        )
        return(
            <div className="container">
                {post}
            </div>
        )
    }
}

//read
const  mapStateToProps = (state) => {
    return{
        state: state.posts
    }
}

//write
const mapDispatchToProps= (dispatch) => {
    return{
        deletePost: (id) => {
            dispatch(deletePost(id))

        }
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(Post);