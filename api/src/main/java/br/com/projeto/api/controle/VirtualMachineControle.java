package br.com.projeto.api.controle;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.projeto.api.modelo.VirtualMachine;
import br.com.projeto.api.repositorio.VirtualMachineRepositorio;

@RestController
@CrossOrigin(origins = "*")
public class VirtualMachineControle {

    @Autowired
    private VirtualMachineRepositorio virtualMachineServico;

    @GetMapping("/api/vms")
    public Iterable<VirtualMachine> listar() {
        return virtualMachineServico.findAll();
    }

    @PutMapping("/api/vms/update")
    public VirtualMachine update(@RequestBody VirtualMachine vm) {
        return virtualMachineServico.save(vm);
    }

    @PostMapping("/api/vms/register")
    public ResponseEntity<?> create(@RequestBody VirtualMachine vm) {
        long totalVms = virtualMachineServico.count();

        if (totalVms >= 5) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body("Limite de 5 VMs atingido.");
        }

        vm.setStatus("RUNNING");

        VirtualMachine save = virtualMachineServico.save(vm);
        return ResponseEntity.ok(save);
    }

    @DeleteMapping("/api/vms/delete/{codigo}")
    public ResponseEntity<?> delete(@PathVariable Long codigo) {

        virtualMachineServico.deleteById(codigo);
        return ResponseEntity.ok(Map.of("mensagem", "VM deletada com sucesso."));
    }

}
