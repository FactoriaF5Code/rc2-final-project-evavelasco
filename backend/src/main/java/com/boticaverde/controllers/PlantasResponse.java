package com.boticaverde.controllers;

import com.boticaverde.persistence.Dolencias;

import lombok.AllArgsConstructor;
import lombok.Getter;
import java.util.ArrayList;

@Getter
@AllArgsConstructor

public class PlantasResponse {
    private Long id;
    private String nombre;
    private ArrayList<Dolencias> dolencias;
    private String propiedades;
    private byte[] foto;

}
