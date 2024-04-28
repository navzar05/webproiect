//package atm.web.backendspring.model;
//
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.context.annotation.Bean;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Component;
//import atm.web.backendspring.model.User;
//import atm.web.backendspring.model.Role;
//import atm.web.backendspring.repositories.UserRepository;
//import atm.web.backendspring.repositories.RoleRepository;
//
//import java.util.HashSet;
//import java.util.Optional;
//import java.util.Set;
//
//@Component
//public class DataInitializer {
//
//    private final UserRepository userRepository;
//    private final RoleRepository roleRepository;
//    private final PasswordEncoder passwordEncoder;
//
//    public DataInitializer(UserRepository userRepository, RoleRepository roleRepository, PasswordEncoder passwordEncoder) {
//        this.userRepository = userRepository;
//        this.roleRepository = roleRepository;
//        this.passwordEncoder = passwordEncoder;
//    }
//
//    @Bean
//    CommandLineRunner init() {
//        return args -> {
//            if (userRepository.findByEmail("admin@example.com").isEmpty()) {
//                // Create admin user
//                User admin = new User();
//                admin.setEmail("admin@example.com");
//                admin.setPassword(passwordEncoder.encode("admin123")); // Ensure you choose a secure password!
//                admin.setFirstName("Admin");
//                admin.setLastName("User");
//
//                Role adminRole = roleRepository.findByName("ROLE_ADMIN").orElseThrow(() -> new RuntimeException("Role not found"));
//                Set<Role> roles = new HashSet<>();
//                roles.add(adminRole);
//                admin.setRoles(roles);
//
//                userRepository.save(admin);
//            }
//        };
//    }
//}
