package com.boticaverde.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.boticaverde.services.PlantasService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("api/plantas")

public class PlantasController {
    @Autowired
    private PlantasService plantasService;

    @GetMapping
    public List<PlantasResponse> getAllPlantas() {
        return plantasService.getAllPlantas();
    }
}
