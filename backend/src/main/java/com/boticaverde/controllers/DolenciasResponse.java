package com.boticaverde.controllers;

import com.boticaverde.persistence.Plantas;

import lombok.AllArgsConstructor;
import lombok.Getter;
import java.util.ArrayList;

@Getter
@AllArgsConstructor

public class DolenciasResponse {
    private Long id;
    private String dolencia;
    private ArrayList<Plantas> plantas;
    private String receta;

}
