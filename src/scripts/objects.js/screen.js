const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                        <img src = "${user.avatarUrl}" alt="Foto do perfil do usuário"/>
                                        <div class="data">
                                        <ul>
                                            <li><h1>${user.name ?? 'Não possui nome cadastrado 😥'}</h1></li>
                                            <li>Bio: ${user.bio ?? 'Não possui bio cadastrada 😥'}</p></li>
                                            <li>Followers: ${user.followers}</li>
                                            <li>Following: ${user.following}</li>
                                        </ul>
                                      </div>
                                      </div>`


        let repositoriesItems = ''
        user.repositories.forEach(repo => repositoriesItems += `<li>                                                               
                                                                    <a href = "${repo.html_url}" target = "_blank"> ${repo.name}<br>
                                                                        <ul>
                                                                            <li>🍴${repo.forks_count}</li>
                                                                            <li>⭐${repo.stargazers_count}</li>
                                                                            <li>👀${repo.watchers_count}</li>
                                                                            <li>💻${repo.language}</li>
                                                                        </ul>
                                                                    </a>
                                                                </li> `);

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                 <ul>${repositoriesItems}</ul>                                           
                                            </div>`
        }

        let eventsItems = ''
        user.events.forEach(event => {
            let type = event.type;
            let commits = event.payload.commits;

            if (type === "PushEvent") {
                eventsItems += `<li>
                                    <p>${event.repo.name}</p>
                                    <p>- ${commits[0].message}</p>
                                </li>`
            } else {
                eventsItems += `<li>
                                    <p>${event.repo.name}</p>
                                    <span>- Evento de criação sem mensagem</span>
                                </li>`;
            }
        })

        if (user.events.length > 0) {
            this.userProfile.innerHTML += `<div class="events">
                                                <h2>Eventos</h2>
                                                <ul>${eventsItems}</ul>  
                                            </div>`;
        }
    },

    renderNotFount() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }

