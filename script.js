document.addEventListener("DOMContentLoaded", async () => {
  const grid = document.querySelector(".grid");

  if (!grid) return;

  grid.innerHTML = "<p>טוען רכבים...</p>";

  const { data: cars, error } = await supabaseClient
    .from("cars")
    .select("*")
    .order("id", { ascending: false });

  if (error) {
    console.error("Supabase error:", error);
    grid.innerHTML = "<p>לא ניתן לטעון רכבים כרגע.</p>";
    return;
  }

  if (!cars || cars.length === 0) {
    grid.innerHTML = "<p>אין רכבים להצגה כרגע.</p>";
    return;
  }

  grid.innerHTML = "";

  cars.forEach((car) => {
    const card = document.createElement("div");
    card.className = "car-card";

    const carName =
      [car.brand, car.model].filter(Boolean).join(" ") || "רכב";

    card.innerHTML = `
      <h3>${carName}</h3>
      ${car.year ? `<p>שנה: ${car.year}</p>` : ""}
      ${car.hand ? `<p>יד: ${car.hand}</p>` : ""}
      ${car.kilometers != null ? `<p>ק״מ: ${Number(car.kilometers).toLocaleString()}</p>` : ""}
    `;

    grid.appendChild(card);
  });

  const button = document.querySelector(".btn");

  if (button) {
    button.addEventListener("click", () => {
      document.querySelector("#cars")?.scrollIntoView({
        behavior: "smooth"
      });
    });
  }
});
