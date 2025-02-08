# 📜 BEANPOCALYPSE

A cooperative RPG game for road trips!

## 🎮 Game Overview

Beanpocalypse is a cooperative RPG designed for road trips where players take on different roles in a car and fight off waves of zombie beans (Zombeans) while trying to reach their destination.

- **🚗 Driver** earns points by driving safely.
- **🎭 Backseaters** engage in turn-based combat using their phones.
- **🛠️ Players spend earned points** at rest stops to upgrade their abilities.
- **🔥 The final boss** is a giant baked bean covered in molasses!

This game blends **driving mechanics, cooperative strategy, and AR-style combat** into a fun road trip adventure. 🚗🧟‍♂️

---

## 📝 How to Play

### 1️⃣ Starting the Game
- Players **pick a destination** and select their **roles**.
- The **car is a tank**, and **random zombie bean attacks** occur throughout the trip.

### 2️⃣ Player Roles
#### 🚗 Driver (Tank)
- Earns points while driving.
- Deals **passive damage** to enemies when driving correctly.
- Stops at **rest stops** to let the team upgrade.

#### 🎭 Backseaters (Support & Fighters)
- Different **classes** have unique abilities.
- Example: **Sleeper Role**  
  - Fights **randomly assigned zombies**.  
  - Uses their **phone camera overlay** to reveal the zombie (similar to Pokémon Go).  
  - Can **Attack or Block** (blocking makes the next attack stronger).  

### 3️⃣ Combat System
- **Turn-based battles** (excluding the Driver).
- Players **Attack or Block** when their turn begins.
- **Zombie dies?** Earn points for team upgrades.

### 4️⃣ Rest Stops & Upgrades
- If the Driver stops or reaches a **rest stop**:
  - **Tank is fully healed**.
  - Players can spend points on:
    - **Tank upgrades** (health increase).
    - **Player attack upgrades** (boost damage).

### 5️⃣ The Final Boss Battle
- When **miles reach 0**, the **final boss fight** begins.
- **All players (including Driver) battle together**.
- Survive to win the game! 🎉

---

## 🎯 Winning & Losing
✅ **Win**: Defeat the **final boss**.  
❌ **Lose**: If the **tank’s health reaches zero** before the boss.

---

## ⚙️ Backend Setup & How to Run

### 📌 Requirements
- **Java 17+**
- **Maven**
- **Spring Boot**
- **Node.js & React** 

### 🚀 Running the Backend

1️⃣ Clone the repository:
```sh
cd backend
./mvnw clean package
./mvnw spring-boot:run
