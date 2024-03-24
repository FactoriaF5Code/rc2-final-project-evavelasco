import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;
import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import com.boticaverde.controllers.PlantasResponse;
import com.boticaverde.persistence.Plantas;
import com.boticaverde.persistence.PlantasRepository;
import com.boticaverde.services.PlantasService;

public class PlantasServiceTest {

    @Mock
    private PlantasRepository plantasRepository;

    @InjectMocks
    private PlantasService plantasService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testGetAllPlantas() {
        // Mock de datos
        Plantas planta1 = new Plantas(1L, "Manzanilla", "Relajante", "img1.jpg");
        Plantas planta2 = new Plantas(2L, "Jengibre", "Digestivo", "img2.jpg");
        List<Plantas> plantasList = new ArrayList<>();
        plantasList.add(planta1);
        plantasList.add(planta2);

        // Mock del comportamiento del repositorio
        when(plantasRepository.findAll()).thenReturn(plantasList);

        // Llamada al método que queremos probar
        List<PlantasResponse> responseList = plantasService.getAllPlantas();

        // Verificación
        assertEquals(2, responseList.size());
        assertEquals(planta1.getId(), responseList.get(0).getId());
        assertEquals(planta1.getNombre(), responseList.get(0).getNombre());
        assertEquals(planta1.getPropiedades(), responseList.get(0).getPropiedades());
        assertEquals(planta1.getFoto(), responseList.get(0).getFoto());
        assertEquals(planta2.getId(), responseList.get(1).getId());
        assertEquals(planta2.getNombre(), responseList.get(1).getNombre());
        assertEquals(planta2.getPropiedades(), responseList.get(1).getPropiedades());
        assertEquals(planta2.getFoto(), responseList.get(1).getFoto());
    }
}
