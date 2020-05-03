const getGitHubUser = async (userName) => {
    const response = await fetch("https://api.github.com/users/" + userName);
    const user = await response.json()
    console.log(user)
    var img = document.getElementById("imageUser")
    img.setAttribute("src", user.avatar_url)
    var name = document.getElementById("login")
    name.innerHTML = user.name
    var bio = document.getElementById("bio")
    bio.innerHTML = user.bio
    var address = document.getElementById("adress")
    adress.innerHTML = user.html_url
    var followers = document.getElementById("followers")
    followers.innerHTML = user.followers
    var following = document.getElementById("following")
    following.innerHTML = user.following
    var number = document.getElementById("id")
    id.innerHTML = user.id
    var location = document.getElementById("location")
    location.innerHTML = user.location
    var mail = document.getElementById("email")
    mail.innerHTML = user.email
    var type = document.getElementById("type")
    type.innerHTML = user.type
    var siteAdmin = document.getElementById("admin")
    siteAdmin.innerHTML = user.site_admin
}
function search() {
    var f = document.getElementById("searchText").value
    getGitHubUser(f)
}