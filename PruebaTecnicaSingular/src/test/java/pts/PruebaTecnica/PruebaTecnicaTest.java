package pts.PruebaTecnica;

import org.junit.jupiter.api.Test;
import pts.PruebaTecnica.series.SeriesNumericas;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class PruebaTecnicaTest {

    @Test
    public void testCalcularSerie() {
        SeriesNumericas serie = new SeriesNumericas();

        assertEquals(4.0, serie.calcularSerie(1), 0.0001);
        assertEquals(3.667, serie.calcularSerie(2), 0.0001);
        assertEquals(3.4, serie.calcularSerie(3), 0.0001);
        assertEquals(2.75, serie.calcularSerie(4), 0.0001);
        assertEquals(2.615, serie.calcularSerie(5), 0.0001);
        assertEquals(1.762, serie.calcularSerie(6), 0.0001);
        assertEquals(1.382, serie.calcularSerie(7), 0.0001);
        assertEquals(0.873, serie.calcularSerie(8), 0.0001);
        assertEquals(0.629, serie.calcularSerie(9), 0.0001);
        assertEquals(0.493, serie.calcularSerie(10), 0.0001);
    }

}
