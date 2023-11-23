import java.time.LocalDate;

public class Factura {
    private String proveedor;
    private LocalDate vencimiento;

    // getters y setters
}
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/facturas")
public class FacturaController {

    private List<Factura> facturas = new ArrayList<>();

    @GetMapping
    public String mostrarFacturas(Model model) {
        model.addAttribute("facturas", facturas);
        return "facturas";
    }

    @PostMapping
    public String agregarFactura(@ModelAttribute Factura factura) {
        facturas.add(factura);
        // Aquí puedes agregar la lógica para enviar notificaciones por correo antes de la fecha de vencimiento
        return "redirect:/facturas";
    }
}
