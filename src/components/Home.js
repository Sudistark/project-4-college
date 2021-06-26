import React, {Component} from 'react';
//import axios from 'axios';
import {Link} from 'react-router-dom';
import Pokeball from '../pokeball.png';
import {connect} from 'react-redux';
import {addPost} from '../Actions/postActions'


class Home extends Component{

    // state = {
    //     posts: []
    // }

    //life cycle hook component
    // componentDidMount(){
    //     //Async
    //     //it returns a pormise object, then method is fired when we have completed the line 9 
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //        .then(res => {
    //            console.log(res)
    //            this.setState({
    //                posts: res.data.slice(0,10)
    //            })
    //        })

    // }

    state = {
        title: "",
        body: ""
    }


    handleChange1 = (e) => {
        console.log(e)
        this.setState({
            title: e.target.value
        })

    }

    handleChange2 = (e) => {
        this.setState({
            body: e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState({
            title: "",
            body:""
        })

        let nPost = {
            title: this.state.title,
            body: this.state.body,
            id: (Math.random()).toString()
        }

        this.props.addPost(nPost);

    }


    render(){
        //console.log(this.props)
        const {posts} = this.props;
        const postLists = posts.length ? (
            posts.map(post => {
                return(
                   
                  <div className="Main"  key ={post.id}>  
                    <div className="post card" >
                        <img src={Pokeball} alt="A Pokeball! Gotta catch em' all!"/>
                        <div className="card-content">
                            <Link to={'/'+ post.id}>
                                <span className="card-title red-text">{post.title}</span>
                            </Link>
                            <p> {post.body}</p>
                        </div>
                    </div>
                </div>
                )
            })

        ): (
            <div className="center">No todos to show :(</div>

        )


        return(
            <div className="container home">
                <h4 className="center">Home</h4>
                {postLists}
                <br/>
                <div className="center">
                    <form>
                        <input type="text" onChange={this.handleChange1} value={this.state.title} placeholder="Title"/>
                        <input type="text" onChange={this.handleChange2} value={this.state.body} placeholder="Description"/>
                        <button className="btn grey" onClick={this.handleClick}>
                            Add Todos
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return{
    posts: state.posts
    }
}

const mapDsipatchToProps = (dispatch) => {
     return{
        addPost: (nPost) => {
            dispatch(addPost(nPost));
        }

    }
}


export default connect(mapStateToProps,mapDsipatchToProps)(Home);
//first calling the connect function