package com.boticaverde.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boticaverde.controllers.DolenciasResponse;
import com.boticaverde.persistence.Dolencias;
import com.boticaverde.persistence.DolenciasRepository;

@Service
public class DolenciasService {

    @Autowired
    private DolenciasRepository dolenciasRepository;

    public List<DolenciasResponse> getAllDolencias() {
        List<DolenciasResponse> dolencias = new ArrayList<DolenciasResponse>();
        List<Dolencias> dolenciasFromDataBase = dolenciasRepository.findAll();
        for (Dolencias dolencia : dolenciasFromDataBase) {
            DolenciasResponse response = new DolenciasResponse(
                    dolencia.getId(),
                    dolencia.getDolencia(),
                    dolencia.getPlantas(),
                    dolencia.getReceta());
            dolencias.add(response);
        }
        return dolencias;
    }
}
