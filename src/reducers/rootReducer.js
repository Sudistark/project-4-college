const initState = {
    posts: [
        {id: '1', title: 'Grocery Items', body: 'Need to buy a packet of bread and butter'},
        {id: '2',title: 'Gym', body: 'Tomorrow morning at 7:00 am. Be ready!!'},
        {id: '3', title: 'Pokemon', body: 'Gotta Catch "Em All'}
    ]
}

const rootReducer = (state= initState, action) => {
    console.log(action);
    if (action.type === 'Delete_POST'){
        const delPost = state.posts.filter(post => {
            return post.id !== action.id

        });
        
        return{
            ...state,
            posts: delPost
        }

    }
    else if (action.type === 'Add_POST'){
        const adPost = [...initState.posts, action.nPost]
        console.log(adPost)

        return{
            ...state,
            posts: adPost
        }
        
    }
    return state;
}



export default rootReducer;