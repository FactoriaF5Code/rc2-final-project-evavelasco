package com.boticaverde.backend.persistence;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "dolencias")

public class Dolencias {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String dolencia;
    @ManyToMany
    @JoinTable(name = "dolencia_planta", joinColumns = @JoinColumn(name = "dolencia_id"), inverseJoinColumns = @JoinColumn(name = "planta_id"))
    private Set<Plantas> plantas;
    private String receta;

}
