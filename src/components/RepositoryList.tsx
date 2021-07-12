import {useState, useEffect} from 'react';

import { RepositoryItem }from "./RepositoryItem";

import '../styles/repositories.scss';

interface Repository {
    name: string;
    description: string;
    html_url: string;

}


export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    
        },[]);
       /*  console.log(repositories) Com esse comando consigo visualizar
       o array vazio e os arrays carregados de info*/
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
               {repositories.map(repository =>{
                   return <RepositoryItem key={repository.name} repository={repository} />
               })}
          

            </ul>
        </section>
    )
}

/* A diferença entre forEach e map no caso acima:
-forEach: executa função passando por cada uma dos repos, mas não retorna nada.
-Map: executa a função, passa pelos repos e retorna.
*/