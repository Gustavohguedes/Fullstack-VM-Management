package claro.com.desafio.api.Control;

import org.springframework.web.bind.annotation.RestController;

import claro.com.desafio.api.Repository.Repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class Control {

    @Autowired
    private Repository acao;

    @GetMapping("/")
    public String getHello() {
        return "Hello World!";
    }

}
