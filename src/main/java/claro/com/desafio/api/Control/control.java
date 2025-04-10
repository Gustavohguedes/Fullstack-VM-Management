package claro.com.desafio.api.Control;

import org.springframework.web.bind.annotation.RestController;

import claro.com.desafio.api.Model.Client;
import claro.com.desafio.api.Repository.Repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
public class Control {

    @Autowired
    private Repository acao;

    @PostMapping("/")
    public Client cadastrar(@RequestBody Client c) {
        return acao.save(c);
    }

    @GetMapping("/")
    public Iterable<Client> SelectAll() {
        return acao.findAll();
    }

    @PutMapping("/")
    public Client Update(@RequestBody Client c) {
        return acao.save(c);
    }

    @DeleteMapping("/{codigo}")
    public void Delete(@PathVariable long codigo) {
        acao.deleteById(codigo);
    }

}
