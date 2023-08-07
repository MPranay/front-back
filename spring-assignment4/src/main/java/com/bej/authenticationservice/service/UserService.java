package com.bej.authenticationservice.service;

import com.bej.authenticationservice.domain.User;
import com.bej.authenticationservice.exception.UserNotFoundException;

import java.util.List;


public interface UserService {

  public User saveUser(User user);
  public User findByUsernameAndPassword(String username , String password) throws UserNotFoundException;
  List<User> getAllUsers();

//  boolean validateUser(String username, String password) throws UserNotFoundException;

}
