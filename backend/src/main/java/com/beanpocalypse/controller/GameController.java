package com.beanpocalypse.controller;

import com.beanpocalypse.model.GameState;
import com.beanpocalypse.model.GameStateDTO;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/game")
@CrossOrigin(origins = "*")
public class GameController {

    private final GameState gameState;

    public GameController() {
        this.gameState = new GameState();
    }

    // starts the game with driver & backseaters
    @PostMapping("/startGame")
    public void startGame(@RequestParam String driver, @RequestParam List<String> backseaters) {
        gameState.startGame(driver, backseaters);
    }

    // API to handle player turns (attack or block)
    @PostMapping("/takeTurn")
    public void takeTurn(@RequestParam String player, @RequestParam boolean isAttack) {
        gameState.takeTurn(player, isAttack);
    }

    // API for upgrading tank health
    @PostMapping("/upgradeTankHealth")
    public void upgradeTankHealth() {
        gameState.upgradeTankHealth();
    }

    // API for upgrading attack power
    @PostMapping("/upgradeAttackPower")
    public void upgradeAttackPower() {
        gameState.upgradeAttackPower();
    }

    @GetMapping("/isGameOver")
    public boolean isGameOver() {
        return gameState.isGameOver();
    }

    // returns structured game state for React frontend
    @GetMapping("/state")
    public GameStateDTO getGameState() {
        return gameState.getGameState();
    }
}
