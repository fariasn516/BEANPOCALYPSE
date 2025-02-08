package com.beanpocalypse.model;

public abstract class Player { 
    protected String name;
    protected int health;
    protected int attackPower;

    public Player(String name, int health, int attackPower) {
        this.name = name;
        this.health = health;
        this.attackPower = attackPower;
    }

    public void takeDamage(int damage) {
        this.health = Math.max(0, this.health - damage);
    }

    public void boostAttackPower(int amount) {
        this.attackPower += amount;
    }

    public int getHealth() { return health; }
    public String getName() { return name; }
    public int getAttackPower() { return attackPower; }

    public abstract int attack();
}
