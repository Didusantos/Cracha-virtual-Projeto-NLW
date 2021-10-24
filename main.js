const SocialMedias = {
  github: 'Didusantos',
  youtube: 'jakelinygracielly',
  facebook: 'maykbrito',
  instagram: 'jakeliny.gracieylly',
  twitter: 'jakelinytec'
}
//Vou manter as informações da jakeliny.// 

function SocialMediaLinkchanger() {
for (let li of SocialMediasLinks.children) {
  const social = li.getAttribute('class')

  li.children[0].href = `https://${social}.com/${SocialMedias[social]}`
}
}
SocialMediaLinkchanger()


function getUserGithub () {
  const url = `https://api.github.com/users/${SocialMedias.github}`

  fetch(url).then(answer => answer.json()).then(data => {
    UserName.textContent = data.name
    userbio.textContent = data.bio
    userinfos.href = data.html_url
    profilephoto.src = data.avatar_url
    login.textContent = data.login
  })
}

getUserGithub()

