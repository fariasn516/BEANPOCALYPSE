package com.beanpocalypse.model;

import java.util.List;

public class GameStateDTO {
    public int milesRemaining;
    public int tankHealth;
    public int maxTankHealth;
    public int tankPoints;
    public boolean battleActive;
    public boolean finalBossActive;
    public boolean gameStarted;
    public String driver;
    public List<Backseater> backseaters;
    public Integer zombieHealth;
    public Integer finalBossHealth;

    public GameStateDTO(int milesRemaining, int tankHealth, int maxTankHealth, int tankPoints,
                        boolean battleActive, boolean finalBossActive, boolean gameStarted,
                        String driver, List<Backseater> backseaters,
                        Integer zombieHealth, Integer finalBossHealth) {
        this.milesRemaining = milesRemaining;
        this.tankHealth = tankHealth;
        this.maxTankHealth = maxTankHealth;
        this.tankPoints = tankPoints;
        this.battleActive = battleActive;
        this.finalBossActive = finalBossActive;
        this.gameStarted = gameStarted;
        this.driver = driver;
        this.backseaters = backseaters;
        this.zombieHealth = zombieHealth;
        this.finalBossHealth = finalBossHealth;
    }
}
