/* eslint-disable */
import "bootstrap";
import "./style.css";

const generateRandomcard = () => {
  let values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "j",
    "q",
    "k",
    "a"
  ];
  let suits = ["♦", "♥", "♠", "♣"];
  let randomvalue = values[Math.floor(Math.random() * values.length)];
  let randomsuits = suits[Math.floor(Math.random() * suits.length)];
  if (randomsuits === "♥" || randomsuits === "♦") {
    document.querySelector(".top-suit").style.color = "red";
    document.querySelector(".bottom-suit").style.color = "red";
  } else {
    document.querySelector(".top-suit").style.color = "black";
    document.querySelector(".bottom-suit").style.color = "black";
  }
  document.querySelector(".top-suit").innerHTML = randomsuits;
  document.querySelector(".number").innerHTML = randomvalue;
  document.querySelector(".bottom-suit").innerHTML = randomsuits;
};
window.onload = function() {
  //write your code here
  document.querySelector(".btn").addEventListener("click", function() {
    generateRandomcard();
  });
};
