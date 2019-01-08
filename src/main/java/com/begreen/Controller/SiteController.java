package com.begreen.Controller;


import com.begreen.DatabaseCon;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpSession;

@Controller
public class SiteController {

    @Autowired
    private DatabaseCon databaseCon;

    @GetMapping ("/")
    public String index(Model model){

        return "index";
    }

    @GetMapping ("/login")
    public String login(){

        return "login";
    }
    @PostMapping ("/login")
    public String checkIfLogedIn(@RequestParam String email,@RequestParam String password, HttpSession httpSession){
        httpSession.setAttribute("isLogedIn",true);
        databaseCon.checkLogin(email,password);
        return "redirect:/";
    }

    @GetMapping ("/register")
    public String createUser() {
        return "register";
    }
}
