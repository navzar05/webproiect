FROM maven:3.8.5-openjdk-17

COPY target/backendspring-0.0.1-SNAPSHOT.jar .

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "backendspring-0.0.1-SNAPSHOT.jar"]