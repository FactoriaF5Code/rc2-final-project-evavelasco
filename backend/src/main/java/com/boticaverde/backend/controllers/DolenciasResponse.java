package com.boticaverde.backend.controllers;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Set;

import com.boticaverde.backend.persistence.Plantas;

@Getter
@AllArgsConstructor

public class DolenciasResponse {
    private Long id;
    private String dolencia;
    private Set<Plantas> plantas;
    private String receta;

}
