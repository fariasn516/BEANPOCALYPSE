package com.beanpocalypse.model;

public abstract class Enemy {
    protected int health;
    protected int attackPower;

    public Enemy(int health, int attackPower) {
        this.health = health;
        this.attackPower = attackPower;
    }

    public void takeDamage(int damage) {
        this.health = Math.max(0, this.health - damage);
    }

    public int attack() { 
        return attackPower;
    }

    public boolean isDefeated() {
        return health == 0;
    }

    public int getHealth() {
        return health;
    }
}
