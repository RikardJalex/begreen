package com.begreen;

public class User {
    private String firstname;
    private String lastname;
    private String email;
    private int ID;

    public User(String firstname, String lastname, String email, int ID) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.ID = ID;
    }

    public String getFirstname() {
        return firstname;
    }
    public User(){

    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }
}
