export const deletePost = (id) => {
    return {
        type: 'Delete_POST',
        id
    }
}

export const addPost = (nPost) => {
    return {
        type: 'Add_POST',
        nPost 
    }
}