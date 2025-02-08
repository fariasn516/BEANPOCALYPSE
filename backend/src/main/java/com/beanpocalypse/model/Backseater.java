package com.beanpocalypse.model;

public class Backseater extends Player {
    private boolean lastMoveWasBlock;

    public Backseater(String name) {
        super(name, 100, 10); 
        this.lastMoveWasBlock = false;
    }

    public void block() {
        lastMoveWasBlock = true;
    }

    @Override
    public int attack() {
        if (lastMoveWasBlock) {
            lastMoveWasBlock = false;
            return attackPower * 2; 
        }
        return attackPower;
    }
}
