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

    @GetMapping ("/howdoesitwork")
    public String howdoesitwork(){

        return "explainScore";
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
        boolean isEmailAlreadyRegistered = databaseCon.checkIfEmailExists(email);
        if (isEmailAlreadyRegistered){
            return "redirect:/register";
        }
        boolean isRegisteredCorrect = databaseCon.createUser(firstname,lastname, email, password, confirmPassword);

        if (!isRegisteredCorrect) {
            return "redirect:/register";
        }
        httpSession.setAttribute("user",null);
        User user= databaseCon.getUserLogin(email,password);

        if (user==null){
            return "redirect:/login";
        }
        httpSession.setAttribute("user",user);
        System.out.println(email + " " + password + " " + confirmPassword);
        return "redirect:/profile";
    }

    @GetMapping("/profile")
    public String userLogin(Model model,HttpSession httpSession) {
        System.out.println("Nu är vi inne i getmapping profile");
        if (httpSession.getAttribute("user")!=null){
            System.out.println("Nu är vi inne i if satsen i getmapping profile");
            User user = (User)httpSession.getAttribute("user");
            model.addAttribute("user",user);
            System.out.println(user);
            return "profile";
        }
        System.out.println("Getusern är null");
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

    @GetMapping("/forgotpassword")
    public String forgotpassword() {

        return "forgotPassword";
    }

}



