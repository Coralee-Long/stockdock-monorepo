# Read Me First
The following was discovered as part of building this project:

* The original package name 'com.stockdock.etf-backend' is invalid and this project uses 'com.stockdock.etf_backend' instead.

# Getting Started

### Reference Documentation
For further reference, please consider the following sections:

* [Official Apache Maven documentation](https://maven.apache.org/guides/index.html)
* [Spring Boot Maven Plugin Reference Guide](https://docs.spring.io/spring-boot/3.4.1/maven-plugin)
* [Create an OCI image](https://docs.spring.io/spring-boot/3.4.1/maven-plugin/build-image.html)
* [Spring Web](https://docs.spring.io/spring-boot/3.4.1/reference/web/servlet.html)
* [Validation](https://docs.spring.io/spring-boot/3.4.1/reference/io/validation.html)
* [Spring Boot DevTools](https://docs.spring.io/spring-boot/3.4.1/reference/using/devtools.html)
* [Spring Data MongoDB](https://docs.spring.io/spring-boot/3.4.1/reference/data/nosql.html#data.nosql.mongodb)

### Guides
The following guides illustrate how to use some features concretely:

* [Building a RESTful Web Service](https://spring.io/guides/gs/rest-service/)
* [Serving Web Content with Spring MVC](https://spring.io/guides/gs/serving-web-content/)
* [Building REST services with Spring](https://spring.io/guides/tutorials/rest/)
* [Validation](https://spring.io/guides/gs/validating-form-input/)
* [Accessing Data with MongoDB](https://spring.io/guides/gs/accessing-data-mongodb/)

### Maven Parent overrides

Due to Maven's design, elements are inherited from the parent POM to the project POM.
While most of the inheritance is fine, it also inherits unwanted elements like `<license>` and `<developers>` from the parent.
To prevent this, the project POM contains empty overrides for these elements.
If you manually switch to a different parent and actually want the inheritance, you need to remove those overrides.

---

# Project Notes

### Included Dependencies

- **MongoDB (`spring-boot-starter-data-mongodb`)**: Added for database interactions.
- **Validation (`spring-boot-starter-validation`)**: Useful for validating API requests.
- **Web (`spring-boot-starter-web`)**: Required for building REST APIs.
- **DevTools**: Facilitates hot-reloading during development.
- **Lombok**: Reduces boilerplate code, configured with optional and proper annotation processor.

### Build Plugins

- **`maven-compiler-plugin`**: Configured with Lombok annotation processors.
- **`spring-boot-maven-plugin`**: Essential for packaging and running the application.

### Project Structure (to update)
```html
/src/main/java/com/stockdock
    ├── /config         # Configuration classes
    ├── /controllers    # REST API endpoints
    ├── /services       # Business logic (API integration, data processing, predictions)
    ├── /models         # Data models (e.g., ETF, SentimentScore)
    ├── /repositories   # Database interaction
    ├── /utils          # Utility classes
    └── /dto            # Data Transfer Objects
```

**Ensure each folder (e.g., dto, models, etc.) is used as intended:**

- `config`: For Spring configuration classes (e.g., MongoDB config).
- `controllers`: For REST API endpoint definitions.
- `dto`: For Data Transfer Objects used in APIs.
- `models`: For MongoDB documents.
- `repos`: For MongoDB repository interfaces.
- `services`: For business logic and interactions between controllers and repos.
- `utils`: For utility/helper classes.
- Make sure the `application.properties` or `application.yml` file is set up in 
  the resources folder for MongoDB.

**Global Quote Response**
```json
{
    "Global Quote": {
        "01. symbol": "IBM",
        "02. open": "224.4200",
        "03. high": "226.2000",
        "04. low": "222.9800",
        "05. price": "223.9200",
        "06. volume": "4430120",
        "07. latest trading day": "2024-12-19",
        "08. previous close": "220.1700",
        "09. change": "3.7500",
        "10. change percent": "1.7032%"
    }
}
```