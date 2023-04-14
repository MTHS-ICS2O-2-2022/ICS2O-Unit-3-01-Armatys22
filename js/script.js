// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: dom
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"
/**
 * This function calculates volume of a sphere.
 */
function calculate() {
  // input
  const length = parseInt(document.getElementById("A-base").value)
  const width = parseInt(document.getElementById("B-base").value)
    const height = parseInt(document.getElementById("height-of-triangle").value)

  // process
  const area = [ (length+width) / 2 ]*height


  // output
  document.getElementById("area").innerHTML = "Celsius is: " + area.toFixed(2) + "cm."
}
