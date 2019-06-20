function Renderer() 
{
    function renderPosts(posts) 
    {
        $('#posts').empty()
        
        for (let post of posts) 
        {
            const postBox = (`<div class='post' id='${post.id}'>
            <p class='post-text'> ${post.text} </p>
            </div>`)
            $('#posts').append(postBox)
            for (let comment of post.comments)
            {
                const commentBox = (`<div class='comments' id='${comment.id}'> ${comment.text}</div>`)
                $(`#${post.id}`).append(commentBox)
            }
            $(`#${post.id}`).append("<button class='delete' >delete</button>")
        }        
    }



    return {
        renderPosts : renderPosts
    }
}
    


