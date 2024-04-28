package atm.web.backendspring.controllers;

import atm.web.backendspring.auth.JwtUtil;
import atm.web.backendspring.model.Role;
import atm.web.backendspring.model.User;
import atm.web.backendspring.model.request.LoginReq;
import atm.web.backendspring.model.request.RegisterReq;
import atm.web.backendspring.model.response.ErrorRes;
import atm.web.backendspring.model.response.LoginRes;
import atm.web.backendspring.services.CustomUserDetailsService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.JwtException;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Controller
@RequestMapping("/rest/auth")
@CrossOrigin
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final CustomUserDetailsService customUserDetailsService;
    private JwtUtil jwtUtil;

    private final PasswordEncoder passwordEncoder;

    public AuthController(AuthenticationManager authenticationManager,
                          CustomUserDetailsService customUserDetailsService,
                          JwtUtil jwtUtil,
                          PasswordEncoder passwordEncoder) {
        this.authenticationManager = authenticationManager;
        this.jwtUtil = jwtUtil;
        this.customUserDetailsService = customUserDetailsService;
        this.passwordEncoder = passwordEncoder;
    }

    @ResponseBody
    @RequestMapping(value = "/login",method = RequestMethod.POST)
    public ResponseEntity login(@RequestBody LoginReq loginReq)  {

        try {
            Authentication authentication =
                    authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginReq.getEmail(), loginReq.getPassword()));
            String email = authentication.getName();
            User user = new User(email,"");
            String token = jwtUtil.createToken(user);
            LoginRes loginRes = new LoginRes(email,token);

            return ResponseEntity.ok(loginRes);

        }catch (BadCredentialsException e){
            ErrorRes errorResponse = new ErrorRes(HttpStatus.BAD_REQUEST,"Invalid username or password");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        }catch (Exception e){
            ErrorRes errorResponse = new ErrorRes(HttpStatus.BAD_REQUEST, e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody RegisterReq registrationRequest) {
        // Check if the email is already registered
        if (customUserDetailsService.existsByEmail(registrationRequest.getEmail())) {
            return ResponseEntity.badRequest().body("Email is already registered");
        }

        // Create a new user entity
        User newUser = new User();
        newUser.setEmail(registrationRequest.getEmail());
        // Encode the password before storing it
        newUser.setPassword(passwordEncoder.encode(registrationRequest.getPassword()));

        newUser.setFirstName(registrationRequest.getFirstname());

        newUser.setLastName(registrationRequest.getLastname());

        // Save the user in the database
        customUserDetailsService.save(newUser);

        // Optionally, you can return a success message or a token for immediate login
        return ResponseEntity.ok("User registered successfully");
    }


}