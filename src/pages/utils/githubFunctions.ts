import githubApi from "../../imageApi/githubApi"




async function getUserInfo(userName: string) {
  return await githubApi.get(`/users${userName}`)
}

async function getUserRepos(userName: string) {
  return await githubApi.get(`/users${userName}/repos`)
}

async function getRandomRepos() {
  return await githubApi.get('https://api.github.com/repositories?since=10').then(res => res.data)
}

export { getUserInfo, getUserRepos, getRandomRepos }