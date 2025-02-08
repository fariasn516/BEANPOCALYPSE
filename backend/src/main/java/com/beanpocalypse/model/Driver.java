package com.beanpocalypse.model;

public class Driver extends Player {
    private boolean drivingCorrectly;

    public Driver(String name) {
        super(name, 100, 1); 
        this.drivingCorrectly = false;
    }

    public void setDrivingCorrectly(boolean drivingCorrectly) {
        this.drivingCorrectly = drivingCorrectly;
    }

    public boolean isDrivingCorrectly() {
        return drivingCorrectly;
    }

    @Override
    public int attack() {
        return drivingCorrectly ? attackPower : 0;
    }
}
