package com.boticaverde.backend.controllers;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor

public class PlantasResponse {
    private Long id;
    private String nombre;
    private String propiedades;
    private String foto_url;

}
