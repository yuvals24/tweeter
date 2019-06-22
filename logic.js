function Tweeter() {
    const posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "p1C1", text: "First comment on first post!" },
                { id: "p1C2", text: "Second comment on first post!!" },
                { id: "p1C3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "p2C1", text: "Don't wory second poster, you'll be first one day." },
                { id: "p2C2", text: "Yeah, believe in yourself!" },
                { id: "p2C3", text: "Haha second place what a joke." }
            ]
        }
    ]

    function getPosts ()
    {
        return posts;
    }
    
    function addPost (word)
    {
        if (posts[0])
        {
            const elem = posts[posts.length-1].id.slice(1)
            const id =  'p' + (parseInt(elem) + 1)
            const postComments = []
            posts.push({ text : word , id : id , comments : postComments })
        }
        else
        {
            const id = 'p' + 1
            const postComments = []
            posts.push({ text : word , id : id , comments : postComments })
        }
    }
    function removePost (postId)
    {
        for (let i in posts)
        {
            if (postId === posts[i].id)
            {
                posts.splice( i , 1 )
            }
        }
    }
    function addComment (text , postId)
    {
        for (let i in posts)
        {
            if (postId === posts[i].id)
            {
                const c = posts[i].comments
                if ( c.length )
                {
                    const elem = c[c.length-1].id.slice(3)
                    const id =  posts[i].id + 'C' + (parseInt(elem) + 1) 
                    c.push ({ id : id , text : text})
                }
                else 
                {
                    c.push ({ id : posts[i].id+ 'C1' , text : text})
                }
            }
        }
    }
    function removeComment (postId , CommentId)
    {   
        for (let i in posts)
        {
            if (postId === posts[i].id)
            {
                const c = posts[i].comments
                for (let i in c)
                {
                    if (CommentId === c[i].id)
                    {
                        c.splice( i , 1 )
                    }
                }   
            }
        }
    }

    return {
        getPosts : getPosts,
        addPost : addPost,
        removePost : removePost,
        addComment : addComment,
        removeComment : removeComment
    }
}

