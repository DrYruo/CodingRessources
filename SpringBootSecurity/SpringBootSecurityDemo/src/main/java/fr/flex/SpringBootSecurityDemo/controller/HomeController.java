package fr.flex.SpringBootSecurityDemo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping
    public String home() {
        return "Wesh le world !";
    }

    @GetMapping("/user")
    public String user() {
        return "Wesh le user de base !";
    }

    @GetMapping("/admin")
    public String admin() {
        return "Wesh l'admin !!";
    }
}
