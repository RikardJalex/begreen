package com.begreen;



import org.springframework.stereotype.Component;

import java.sql.*;

@Component
public class DatabaseCon {
    private Connection connection = connect("jdbc:mysql://localhost:3306/begreen?useSSL=false&useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC");

    private Connection connect(String url) {
        System.out.println("Creating connection..");
        try {
            System.out.println("uppkopplad");
            return DriverManager.getConnection(url, "root", "password");
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        }
    }

    public boolean createUser(String firstname, String lastname,String email, String password, String confirmPassword){
        if (!password.equals(confirmPassword)){
            return false;
        }
        try {
            String query = "Insert into users (Firstname,Lastname,Email, Password) values(?,?,?,?)";
            PreparedStatement stmt = connection.prepareStatement(query);
            stmt.setString(1,firstname);
            stmt.setString(2,lastname);
            stmt.setString(3,email);
            stmt.setString(4,password);

            if (stmt.executeUpdate()!=0){
                System.out.println("User inserted");
                return true;
            }else {
                return false;
            }


        }catch (SQLException e){
            System.out.println("något gick fel" + e);
        }
        return false;
    }
    public User getUserLogin(String email, String password){
        try {
            String query = "select * from users where Email =? and Password =? ";
            PreparedStatement stmt = connection.prepareStatement(query);
            stmt.setString(1,email);
            stmt.setString(2,password);
            ResultSet resultSet = stmt.executeQuery();

            while (resultSet.next()){
                System.out.println("Logged in");
                User user = new User(resultSet.getString("firstname"),
                        resultSet.getString("lastname"),resultSet.getString("email"),resultSet.getInt("ID"));
                return user;
            }


        }catch (SQLException e){
            System.out.println("något gick fel" + e);
        }
        return null;
    }
    public boolean checkLogin(String email,String password){
        System.out.println("Nu går vi in");


        try {
            String query = "select * from users where Email =? and Password =? ";
            PreparedStatement stmt = connection.prepareStatement(query);
            stmt.setString(1,email);
            stmt.setString(2,password);
            ResultSet resultSet = stmt.executeQuery();

            while (resultSet.next()){
                System.out.println("Logged in");
                return true;
            }


        }catch (SQLException e){
            System.out.println("något gick fel" + e);
        }
        return false;
    }

    public User getUsers(int id) {


        try {
            String query = "select * from users where ID=? ";
            PreparedStatement stmt = connection.prepareStatement(query);
            stmt.setInt(1,id);

            ResultSet resultSet = stmt.executeQuery();

            while (resultSet.next()){
                User user = new User(resultSet.getString("firstname"),
                        resultSet.getString("lastname"),resultSet.getString("email"),resultSet.getInt("ID"));
                return user;
            }


        }catch (SQLException e){
            System.out.println("något gick fel" + e);
        }

        return new User();
    }

}
