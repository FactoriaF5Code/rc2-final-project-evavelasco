package com.boticaverde.backend.controllers;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Set;

import com.boticaverde.backend.persistence.Dolencia;

@Getter
@AllArgsConstructor

public class PlantasResponse {
    private Long id;
    private String nombre;
    private String propiedades;
    private String foto_url;

}
