class UI {
    constructor(params) {
        this.profile = document.getElementById('profile');
    }

    // Display profile
    showProfile(user) {
        //  console.log(user);
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-2">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-secondary">Public Gists: ${user.public_repos}</span>
                    <span class="badge badge-success">Followers: ${user.followers}</span>
                    <span class="badge badge-info">Following: ${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        `;
    }

    // Show user repos
    showRepos(repos) {
        let output = ''
        repos.forEach(repo => {
            output += `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                    </div>
                </div>
            </div>            
            `
        });

        document.getElementById('repos').innerHTML = output;
    }

    // Show alert message
    showAlert(msg, className) {
        // Clear anu remaining alert
        this.clearAlert();
        // Create a div
        const div = document.createElement('div');
        // Add style classes
        div.className = className;
        // Add text
        div.appendChild(document.createTextNode(msg));
        // Get parent
        const container = document.querySelector('.searchContainer');
        // Get search box
        const search = document.querySelector('.search')
        // Insert alert
        container.insertBefore(div, search);
        // Timeout alert after 3 sec
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    // Clear alert message
    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if (currentAlert) {
            currentAlert.remove()
        }
    }

    // Clear profile
    clearProfile() {
        this.profile.innerHTML = '';
    }
}