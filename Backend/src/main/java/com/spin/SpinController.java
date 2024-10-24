package com.spin;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Random;

@RestController
public class SpinController {

    private final String[] segments = {
        "Prize 1", "Prize 2", "Prize 3", "Prize 4", "Prize 5", "Prize 6"
    };

    @GetMapping("/spin")
    public String spinWheel() {
        Random random = new Random();
        int index = random.nextInt(segments.length);
        return segments[index];
    }
}