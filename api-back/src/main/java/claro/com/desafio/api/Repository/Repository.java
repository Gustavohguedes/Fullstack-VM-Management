package claro.com.desafio.api.Repository;

import org.springframework.data.repository.CrudRepository;

import claro.com.desafio.api.Model.Client;

public interface Repository extends CrudRepository<Client, Long> {

    Client findByEmail(String email);

    Client findByCodigo(long codigo);

    Client findByNome(String nome);

    Client findBySenha(String senha);

}
