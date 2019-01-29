class GitHub {
    constructor() {
        this.client_id = '6c4ad0024c0cf861b33e';
        this.client_secret = '3828186737c58b7b5fbe3c667fed2212f48dc2d0';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    //
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=$`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=$`);
        const profileData = await profileResponse.json();
        const reposData = await repoResponse.json();
        return {
            profile: profileData,
            repos: reposData
        }
    }
}