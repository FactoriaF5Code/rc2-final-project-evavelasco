package com.boticaverde.backend.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boticaverde.backend.controllers.PlantasResponse;
import com.boticaverde.backend.persistence.Plant;
import com.boticaverde.backend.persistence.PlantasRepository;

@Service
public class PlantasService {

    @Autowired
    private PlantasRepository plantasRepository;

    public List<PlantasResponse> getAllPlantas() {
        List<PlantasResponse> plantas = new ArrayList<PlantasResponse>();
        List<Plant> plantInDataBasePlantas = plantasRepository.findAll();
        for (Plant planta : plantInDataBasePlantas) {
            plantas.add(new PlantasResponse(planta.getId(), planta.getNombre(),
                    planta.getPropiedades(), planta.getFoto_url()));
        }
        return plantas;
    }
}
