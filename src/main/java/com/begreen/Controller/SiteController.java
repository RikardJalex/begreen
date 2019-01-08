package com.begreen.Controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class SiteController {

    @GetMapping ("/")
    public String index(Model model){

        return "index";
    }

    @GetMapping ("/login")
    public String login(@RequestParam String username, String password, Model model){
        return "index";
    }
}
