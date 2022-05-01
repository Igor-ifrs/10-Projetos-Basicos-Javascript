import "./style.css";
import path from "./path";
const app = document.querySelector("#app");

const canvas = document.querySelector("canvas");
canvas.height = 600;
canvas.width = 800;

const ctx = canvas.getContext("2d");

const p = new Path2D(path);
//ctx.fill(p);
ctx.stroke(p);
