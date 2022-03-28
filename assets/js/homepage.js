var getUserRepos = function () {
    console.log("working");
    fetch("https://api.github.com/users/octocat/repos");
};

getUserRepos();