
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import com.boticaverde.controllers.DolenciasResponse;
import com.boticaverde.persistence.Dolencias;
import com.boticaverde.persistence.DolenciasRepository;
import com.boticaverde.services.DolenciasService;

public class DolenciasServiceTest {

    @Mock
    private DolenciasRepository dolenciasRepository;

    @InjectMocks
    private DolenciasService dolenciasService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testGetAllDolencias() {
        // Mock de datos
        Dolencias dolencia1 = new Dolencias(1L, "Dolor de cabeza", "Manzanilla", "Infusión");
        Dolencias dolencia2 = new Dolencias(2L, "Dolor de estómago", "Jengibre", "Infusión");
        List<Dolencias> dolenciasList = new ArrayList<>();
        dolenciasList.add(dolencia1);
        dolenciasList.add(dolencia2);

        // Mock del comportamiento del repositorio
        when(dolenciasRepository.findAll()).thenReturn(dolenciasList);

        // Llamada al método que queremos probar
        List<DolenciasResponse> responseList = dolenciasService.getAllDolencias();

        // Verificación
        assertEquals(2, responseList.size());
        assertEquals(dolencia1.getId(), responseList.get(0).getId());
        assertEquals(dolencia1.getDolencia(), responseList.get(0).getDolencia());
        assertEquals(dolencia1.getPlantas(), responseList.get(0).getPlantas());
        assertEquals(dolencia1.getReceta(), responseList.get(0).getReceta());
        assertEquals(dolencia2.getId(), responseList.get(1).getId());
        assertEquals(dolencia2.getDolencia(), responseList.get(1).getDolencia());
        assertEquals(dolencia2.getPlantas(), responseList.get(1).getPlantas());
        assertEquals(dolencia2.getReceta(), responseList.get(1).getReceta());
    }
}
