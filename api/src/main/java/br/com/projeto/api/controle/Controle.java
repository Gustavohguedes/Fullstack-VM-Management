package br.com.projeto.api.controle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import br.com.projeto.api.modelo.Cliente;
import br.com.projeto.api.repositorio.Repositorio;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@CrossOrigin(origins = "*")
public class Controle {

    @Autowired
    private Repositorio acao;

    @PostMapping("/")
    public Cliente cadastrar(@RequestBody Cliente c) {
        return acao.save(c);
    }

    @GetMapping("/")
    public Iterable<Cliente> selecionar() {
        return acao.findAll();
    }

    @PutMapping("/")
    public Cliente editar(@RequestBody Cliente c) {
        return acao.save(c);
    }

    @DeleteMapping("/{codigo}")
    public void excluir(@PathVariable long codigo) {
        acao.deleteById(codigo);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Cliente login) {
        Cliente usuario = acao.findByEmail(login.getEmail());

        if (usuario != null && usuario.getSenha().equals(login.getSenha())) {
            return ResponseEntity.ok(usuario);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Login inválido");
        }
    }

}
