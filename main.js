const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())

function post()
{
    const message = $('#container').find('input').val()
    tweeter.addPost(message)
    renderer.renderPosts(tweeter.getPosts())
}

$('body').on('click', '.fas', function() {
    let id = $(this).parent()[0].id
    tweeter.removePost(id)
    renderer.renderPosts(tweeter.getPosts())
})

$('body').on('click', 'button', function() {
    let id = $(this).parent()[0].id
    let commentText = $(this).parent().find('input').val()
    tweeter.addComment(commentText,id)
    renderer.renderPosts(tweeter.getPosts())
})

$('body').on('click', '.far', function() {
    let postId = $(this).parent()[0].id
    let CommentId = $(this).next()[0].id
    tweeter.removeComment(postId, CommentId)
    renderer.renderPosts(tweeter.getPosts())
})

// function deletePost() {                                       what the fuckkkkkk?!?!
//     let id = $(this).parent()[0].id
//     tweeter.removePost(id)
//     renderer.renderPosts(tweeter.getPosts())
// }



