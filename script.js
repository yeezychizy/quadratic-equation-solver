function solveQuadraticEquation(a, b, c) {
    const discriminant = b ** 2 - 4 * a * c;
  
    if (discriminant < 0) {
      return "The equation has no real roots.";
    } else if (discriminant === 0) {
      const root = -b / (2 * a);
      return `The equation has one real root: x = ${root}`;
    } else {
      const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      return `The equation has two real roots: x = ${root1} and x = ${root2}`;
    }
  }
  
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
  
    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);
    const c = Number(document.getElementById("c").value);
  
    const result = document.getElementById("result");
    result.textContent = solveQuadraticEquation(a, b, c);
  });
  