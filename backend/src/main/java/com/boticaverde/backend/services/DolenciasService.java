package com.boticaverde.backend.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boticaverde.backend.controllers.DolenciasResponse;
import com.boticaverde.backend.persistence.Dolencia;
import com.boticaverde.backend.persistence.DolenciasRepository;

@Service
public class DolenciasService {

    @Autowired
    private DolenciasRepository dolenciasRepository;

    public List<DolenciasResponse> getAllDolencias() {
        List<DolenciasResponse> dolencias = new ArrayList<DolenciasResponse>();
        List<Dolencia> dolenciaFromDataBase = dolenciasRepository.findAll();
        for (Dolencia dolencia : dolenciaFromDataBase) {
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
