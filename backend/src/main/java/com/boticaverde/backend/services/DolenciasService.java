package com.boticaverde.backend.services;

import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boticaverde.backend.controllers.DolenciasResponse;

import com.boticaverde.backend.persistence.DolenciasRepository;

@Service
public class DolenciasService {

    @Autowired
    private DolenciasRepository dolenciasRepository;

    public List<DolenciasResponse> getAllDolencias() {

        return dolenciasRepository.findAll()
                .stream()
                .map(dolencia -> new DolenciasResponse(
                        dolencia.getId(),
                        dolencia.getDolencia(),
                        dolencia.getPlantas(),
                        dolencia.getReceta()))
                .collect(Collectors.toList());
    }
}
