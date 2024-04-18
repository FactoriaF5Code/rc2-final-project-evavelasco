package com.boticaverde.backend.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boticaverde.backend.controllers.PlantasResponse;

import com.boticaverde.backend.persistence.PlantasRepository;

@Service
public class PlantasService {

    @Autowired
    private PlantasRepository plantasRepository;

    public List<PlantasResponse> getAllPlantas() {
        return plantasRepository.findAll()
                .stream()
                .map(planta -> new PlantasResponse(
                        planta.getId(),
                        planta.getNombre(),
                        planta.getPropiedades(),
                        planta.getFoto_url()))
                .collect(Collectors.toList());

    }
}
