package com.begreen.Controller;


import com.begreen.DatabaseCon;
import com.begreen.User;
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
        httpSession.setAttribute("user",null);
        User user= databaseCon.getUserLogin(email,password);
        if (user==null){
            return "redirect:/login";
       }
        httpSession.setAttribute("user",user);
        return "redirect:/";
    }

    @GetMapping ("/register")
    public String createUser() {
        return "register";
    }


    @PostMapping("/profile")
    public String checkRegister(@RequestParam String firstname,@RequestParam String lastname, @RequestParam String email, @RequestParam String password, @RequestParam String confirmPassword, HttpSession httpSession) {
        databaseCon.createUser(firstname,lastname, email, password, confirmPassword);
        System.out.println(email + " " + password + " " + confirmPassword);

        httpSession.setAttribute("user",true);
        databaseCon.checkLogin(email, password);
        return "profile";
    }

    @GetMapping("/profile")
    public String userLogin(Model model,HttpSession httpSession) {
        if (httpSession.getAttribute("user")!=null){
            User user = (User)httpSession.getAttribute("user");
            model.addAttribute("user",user);
            return "profile";
        }

        return "redirect:/";
    }

    @GetMapping("/logout")
    public String logout(HttpSession session, HttpServletResponse res) {
        session.invalidate();
        Cookie cookie = new Cookie("sessionId", "");
        cookie.setMaxAge(0);
        res.addCookie(cookie);
        return "redirect:/";
    }
    @GetMapping("/team")
    public String team(){
        return "team";
    }
    @GetMapping("/whyneeded")
    public String wheneeded(){
        return "whyneeded";
    }
    @GetMapping("/input")
    public String input(Model model,HttpSession httpSession){
        if (httpSession.getAttribute("user")!=null) {
            User user = (User) httpSession.getAttribute("user");
            model.addAttribute("user", user);
            return "input";
        }

        return "redirect:/";
    }

    @GetMapping("/terms")
    public String terms(){
        return "terms";
    }



}
