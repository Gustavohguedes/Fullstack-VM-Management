package br.com.projeto.api.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "virtual_machines")
@Getter
@Setter
public class VirtualMachine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long codigo;
    private String displayName;
    private int cpu;
    private int ram;
    private String status;

    public VirtualMachine() {
    }

    public VirtualMachine(String displayName, int cpu, int ram, String status) {
        this.displayName = displayName;
        this.cpu = cpu;
        this.ram = ram;
        this.status = status;
    }

}
