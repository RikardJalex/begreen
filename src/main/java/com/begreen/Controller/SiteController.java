package com.begreen.Controller;


import com.begreen.DatabaseCon;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
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
        httpSession.setAttribute("isLogin",true);
        databaseCon.checkLogin(email,password);
        return "redirect:/";
    }

    @GetMapping ("/register")
    public String createUser() {
        return "register";
    }


    @PostMapping("/register")
    public String checkRegister(@RequestParam String firstname,@RequestParam String lastname,  @RequestParam String email, @RequestParam String password, @RequestParam String confirmPassword) {
        databaseCon.createUser(firstname,lastname, email, password, confirmPassword);
        System.out.println(email + " " + password + " " + confirmPassword);
        return "login";
    }
    @GetMapping("/logout")
    public String logout(HttpSession session, HttpServletResponse res) {
        session.invalidate();
        Cookie cookie = new Cookie("sessionId", "");
        cookie.setMaxAge(0);
        res.addCookie(cookie);
        return "redirect:/";
    }
}
