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
                const deleteComment = (`<i class="far fa-trash-alt" style="color:grey"></i>`)
                const commentBox = (`<span class='comments' id='${comment.id}'> ${comment.text}</span><br>`)
                $(`#${post.id}`).append(deleteComment+commentBox)
                
            }   
            $(`#${post.id}`).append(`<input class="input" type="text" placeholder="What's on your mind?">`)
            $(`#${post.id}`).append(`<button class="commentButton">Add Comment</button>`)
            $(`#${post.id}`).append('<br><br><i class="fas fa-trash-alt fa-2x" style="color:#eb4d4b" style="font-size:5x"></i>')
        }        
    }



    return {
        renderPosts : renderPosts
    }
}
    


