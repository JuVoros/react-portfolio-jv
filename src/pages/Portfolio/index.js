import React from "react";
import Cinder from "/Users/juvoros/Code/Bootcamp/homework/react-portfolio/src/images/Cinder.png";
import Fitness from "/Users/juvoros/Code/Bootcamp/homework/react-portfolio/src/images/fitnessTracker.png";
import Budget from "//Users/juvoros/Code/Bootcamp/homework/react-portfolio/src/images/jv-budget-tracker.herokuapp.com_.png";
import scheduler from "/Users/juvoros/Code/Bootcamp/homework/react-portfolio/src/images/scheduler.png";
import Notes from "/Users/juvoros/Code/Bootcamp/homework/react-portfolio/src/images/the-jv-note-taker.herokuapp.com_.png";
import Recipe from "/Users/juvoros/Code/Bootcamp/homework/react-portfolio/src/images/recipebuilder.github.io_recipe-builder_.png";

import "./style.css";

const Portfolio = () => {
  return (
    <main className="Projects">
      <div className="PTitleContainer">
        <header className="PTitle">
          <h2>My Projects</h2>
        </header>
      </div>
      <div className="PortContainer">
        <div className="PContainer">
          <section className="PCard">
            <h3 className="PCardTitle">Coder Mingle</h3>
            <img
              src={Cinder}
              className="PImage"
              alt="Screenshot of my Coder Dating App"
            />
            <a
              href="https://github.com/Project2-Team-5/Coder-Mingle"
              className="DeployBtn"
            >
              GitHub Repo
            </a>
            <a
              href="https://coder-mingle.herokuapp.com/"
              className="DeployBtn2"
            >
              Deployed Link
            </a>
          </section>
        </div>
        <div className="PContainer">
          <section className="PCard">
            <h3 className="PCardTitle">Fitness Tracker</h3>
            <img
              src={Fitness}
              className=" PImage"
              alt="Screenshot of my Fitness Tracker Site"
            />
            <a
              href="https://github.com/JuVoros/fitness-tracker"
              className="DeployBtn"
            >
              GitHub Repo
            </a>
            <a
              href="https://jv-fitness-tracker.herokuapp.com/"
              className="DeployBtn2"
            >
              Deployed Link
            </a>
          </section>
        </div>
        <div className="PContainer">
          <section className="PCard">
            <h3 className="PCardTitle">Budget Tracker</h3>
            <img
              src={Budget}
              className="PImage"
              alt="Screenshot of my Budget Tracker App"
            />
            <a
              href="https://jv-budget-tracker.herokuapp.com/"
              className="DeployBtn"
            >
              Deployed Link
            </a>
            <a
              href="https://github.com/JuVoros/budget-tracker"
              className="DeployBtn2"
            >
              GitHub Repo
            </a>
          </section>
        </div>
        <div className="PContainer">
          <section className="PCard">
            <h3 className="PCardTitle">Day Planner</h3>
            <img
              src={scheduler}
              className="PImage"
              alt="Screenshot of my Day Planner App"
            />
            <a
              href="https://github.com/JuVoros/day-planner"
              className="DeployBtn"
            >
              Deployed Link
            </a>
            <a
              href="https://github.com/JuVoros/day-planner"
              className="DeployBtn2"
            >
              GitHub Repo
            </a>
          </section>
        </div>
        <div className="PContainer">
          <section className="PCard">
            <h3 className="PCardTitle">Note Taker</h3>
            <img
              src={Notes}
              className="PImage"
              alt="Screenshot of my Note Taker App"
            />
            <a
              href="https://github.com/JuVoros/the-note-taker"
              className="DeployBtn"
            >
              GitHub Repo
            </a>
            <a
              href="https://the-jv-note-taker.herokuapp.com/"
              className="DeployBtn2"
            >
              Deployed Link
            </a>
          </section>
        </div>
        <div className="PContainer">
          <section className="PCard">
            <h3 className="PCardTitle">Recipe Builder</h3>
            <img
              src={Recipe}
              className="PImage"
              alt="Screenshot of my Recipe Builder App"
            />
            <a
              href="https://github.com/RecipeBuilder/recipe-builder"
              className="DeployBtn"
            >
              GitHub Repo
            </a>
            <a
              href="https://recipebuilder.github.io/recipe-builder/"
              className="DeployBtn2"
            >
              Deployed Link
            </a>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
