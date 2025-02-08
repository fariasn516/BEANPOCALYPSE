package com.beanpocalypse.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Timer;
import java.util.TimerTask;

public class GameState {
    // game progress
    private int milesRemaining;
    private boolean gameStarted;

    // health & points
    private int tankHealth;
    private int maxTankHealth;
    private int tankPoints;

    // battle & enemies
    private boolean battleActive;
    private boolean finalBossActive;
    private Zombie currentZombie;
    private FinalBoss finalBoss;

    // players
    private Driver driver;
    private List<Backseater> backseaters;

    // timers
    private final Timer gameLoopTimer = new Timer(true);
    private final Timer passiveDamageTimer = new Timer(true);
    private final Timer bossAttackTimer = new Timer(true);

    // initializes game state
    public GameState() {
        resetGame();
    }

    public void startGame(String driverName, List<String> backseaterNames) {
        resetGame();
        this.driver = new Driver(driverName);
        this.backseaters = new ArrayList<>();
        for (String name : backseaterNames) {
            this.backseaters.add(new Backseater(name));
        }
        this.gameStarted = true;
    }

    private void resetGame() {
        this.milesRemaining = 20;
        this.tankHealth = 100;
        this.maxTankHealth = 100;
        this.tankPoints = 0;
        this.battleActive = false;
        this.finalBossActive = false;
        this.gameStarted = false;
        this.backseaters = new ArrayList<>();

        // progress trip every 10 seconds
        gameLoopTimer.scheduleAtFixedRate(new TimerTask() {
            @Override
            public void run() {
                progressTrip();
            }
        }, 0, 10000);

        // driver's passive attack every 10 seconds
        passiveDamageTimer.scheduleAtFixedRate(new TimerTask() {
            @Override
            public void run() {
                applyDriverContinuousDamage();
            }
        }, 0, 10000);

        // boss auto-attacks every 5 seconds
        bossAttackTimer.scheduleAtFixedRate(new TimerTask() {
            @Override
            public void run() {
                if (finalBossActive) {
                    bossAttack();
                }
            }
        }, 0, 5000);
    }

    private void progressTrip() {
        if (!gameStarted || milesRemaining <= 0)
            return;

        milesRemaining--;

        // random zombie battle (20% chance every 10 seconds)
        if (!battleActive && Math.random() < 0.2) {
            startBattle();
        }

        if (milesRemaining % 10 == 0) {
            restStopRegen();
        }

        if (milesRemaining == 0 && !finalBossActive) {
            startFinalBoss();
        }
    }

    private void restStopRegen() {
        this.tankHealth = this.maxTankHealth;
    }

    public void startBattle() {
        battleActive = true;
        currentZombie = new Zombie();
    }

    public void startFinalBoss() {
        finalBossActive = true;
        finalBoss = new FinalBoss();
    }

    public void takeTurn(String playerName, boolean isAttack) {
        if (!battleActive && !finalBossActive) {
            throw new IllegalStateException("No active battle");
        }

        if (isAttack) {
            resolveAttack(10);
        }
    }

    private void resolveAttack(int damage) {
        if (battleActive && currentZombie != null) {
            currentZombie.takeDamage(damage);
            if (currentZombie.isDefeated()) {
                battleActive = false;
                earnPoints(20);
            }
        } else if (finalBossActive && finalBoss != null) {
            finalBoss.takeDamage(damage);
            if (finalBoss.isDefeated()) {
                finalBossActive = false;
            }
        }
    }

    public void bossAttack() {
        if (finalBossActive && finalBoss != null) {
            takeDamage(finalBoss.attack());
        }
    }

    private void applyDriverContinuousDamage() {
        if (driver != null) {
            int damage = driver.attack();
            if (battleActive && currentZombie != null) {
                currentZombie.takeDamage(damage);
                if (currentZombie.isDefeated()) {
                    battleActive = false;
                    earnPoints(20);
                }
            } else if (finalBossActive && finalBoss != null) {
                finalBoss.takeDamage(damage);
                if (finalBoss.isDefeated()) {
                    finalBossActive = false;
                }
            }
        }
    }

    public void earnPoints(int points) {
        this.tankPoints += points;
    }

    public void takeDamage(int damage) {
        this.tankHealth = Math.max(0, this.tankHealth - damage);
    }

    public void upgradeTankHealth() {
        int UPGRADE_COST = 20;
        if (tankPoints >= UPGRADE_COST) {
            tankPoints -= UPGRADE_COST;
            maxTankHealth += 20;
            tankHealth = maxTankHealth;
        }
    }

    public void upgradeAttackPower(String playerName) {
        int UPGRADE_COST = 20;
        if (tankPoints < UPGRADE_COST) {
            throw new IllegalStateException("Not enough tank points!");
        }

        boolean upgraded = false;

        if (driver != null && driver.getName().equals(playerName)) {
            driver.boostAttackPower(5);
            upgraded = true;
        }

        for (Backseater backseater : backseaters) {
            if (backseater.getName().equals(playerName)) {
                backseater.boostAttackPower(5);
                upgraded = true;
            }
        }

        if (upgraded) {
            tankPoints -= UPGRADE_COST;
        } else {
            throw new IllegalArgumentException("Player not found!");
        }
    }

    public boolean isGameOver() {
        return tankHealth <= 0 || (finalBossActive && finalBoss.isDefeated());
    }

    public int getTankPoints() {
        return tankPoints;
    }

    public GameStateDTO getGameState() {
        return new GameStateDTO(
                milesRemaining, tankHealth, maxTankHealth, tankPoints,
                battleActive, finalBossActive, gameStarted,
                driver != null ? driver.getName() : null,
                backseaters,
                battleActive && currentZombie != null ? currentZombie.getHealth() : null,
                finalBossActive && finalBoss != null ? finalBoss.getHealth() : null);
    }
}