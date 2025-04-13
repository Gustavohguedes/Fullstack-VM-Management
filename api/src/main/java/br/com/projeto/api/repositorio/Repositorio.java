package br.com.projeto.api.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import br.com.projeto.api.modelo.Cliente;

@Repository
public interface Repositorio extends JpaRepository<Cliente, Long> {
    Cliente findByEmail(String email);
}
