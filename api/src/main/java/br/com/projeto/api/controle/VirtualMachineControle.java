package br.com.projeto.api.controle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.projeto.api.modelo.VirtualMachine;
import br.com.projeto.api.repositorio.VirtualMachineRepositorio;

@RestController
@CrossOrigin(origins = "*")
public class VirtualMachineControle {

    @Autowired
    private VirtualMachineRepositorio virtualMachineServico;

    @GetMapping("/virtualmachines")
    public Iterable<VirtualMachine> listar() {
        return virtualMachineServico.findAll();
    }
}
