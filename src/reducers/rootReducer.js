const initState = {
    posts: [
        {id: '1', title: 'Ash got his first pokemon pikachu', body: 'Pika Pika Pika Pikachu Pika Pika Pika PikachuPika Pika Pika Pikachu Pika Pika Pika Pikachu Pika Pika Pika Pikachu Pika Pika Pika PikPikachu Pika Pika Pika Pikachu Pika Pika Pika Pikachu '},
        {id: '2',title: 'Ash saved Charmander', body: 'Cha Char Charmander Cha Char Charmander Cha Char Charmander Cha Char Charmander Cha Char Charmander Cha Char Charmander Cha Char Charmander Cha Char Charmander Cha Char Charmander Cha Char Charmander '},
        {id: '3', title: 'Jigglypuff starts singing! lol', body: 'Jiggaly jiga...... Jiggaly jiga...... Jiggaly jiga...... Jiggaly jiga...... Jiggaly jiga...... Jiggaly jiga...... Jiggaly jiga......Jiggaly jiga...... Jiggaly jiga...... Jiggaly jiga...... '}
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