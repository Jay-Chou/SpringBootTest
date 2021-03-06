package com.wpp;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Configuration;
 
@Configuration
@EnableAutoConfiguration
@SpringBootApplication
@MapperScan("com.wpp.Mapping")
public class Application extends SpringBootServletInitializer {
  
    public static void main(String[] args) {  
        SpringApplication.run(Application.class, args);  
    }

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        return builder.sources(this.getClass());
    }

}  
