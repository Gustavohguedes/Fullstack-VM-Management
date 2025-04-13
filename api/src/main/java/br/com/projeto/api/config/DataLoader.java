package br.com.projeto.api.config;

import br.com.projeto.api.modelo.VirtualMachine;
import br.com.projeto.api.modelo.Cliente;
import br.com.projeto.api.repositorio.VirtualMachineRepositorio;
import br.com.projeto.api.repositorio.Repositorio;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataLoader {

    @Bean
    CommandLineRunner initDatabase(VirtualMachineRepositorio vmRepo, Repositorio userRepo) {
        return args -> {

            // Se banco estiver vazio, insere dados
            if (vmRepo.count() == 0) {
                vmRepo.save(new VirtualMachine("vm1", 2, 1024, "RUNNING"));
                vmRepo.save(new VirtualMachine("vm2", 1, 512, "PAUSED"));
                vmRepo.save(new VirtualMachine("vm3", 4, 2048, "STOP"));
            }

            if (userRepo.count() == 0) {
                Cliente admin = new Cliente();
                admin.setNome("Admin");
                admin.setEmail("admin@vm.com");
                admin.setSenha("admin");
                userRepo.save(admin);
            }

        };
    }
}
