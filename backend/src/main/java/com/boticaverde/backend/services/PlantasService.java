package com.boticaverde.backend.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boticaverde.backend.controllers.PlantasResponse;
import com.boticaverde.backend.persistence.Plantas;
import com.boticaverde.backend.persistence.PlantasRepository;

@Service
public class PlantasService {

    @Autowired
    private PlantasRepository plantasRepository;

    public List<PlantasResponse> getAllPlantas() {
        List<PlantasResponse> plantas = new ArrayList<PlantasResponse>();
        List<Plantas> plantasInDataBasePlantas = plantasRepository.findAll();
        for (Plantas planta : plantasInDataBasePlantas) {
            plantas.add(new PlantasResponse(planta.getId(), planta.getNombre(), planta.getDolencias(),
                    planta.getPropiedades(), planta.getFoto_url()));
        }
        return plantas;
    }
}
