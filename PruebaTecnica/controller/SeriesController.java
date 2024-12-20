package pts.PruebaTecnica.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import pts.PruebaTecnica.series.SeriesNumericas;

@CrossOrigin(origins = "http://localhost:3000")
@RestController

public class SeriesController {

    @GetMapping("/serie")
    public double obtenerSerie(@RequestParam int n){
        SeriesNumericas serie = new SeriesNumericas();
        return serie.calcularSerie(n);
    }

}
