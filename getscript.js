export default function handler(req, res) {
  const userAgent = req.headers["user-agent"] || "";

  const script = `
getgenv().BrainrotConfig = {
    ["Garama And Madundung"] = true,
    ["La Grande Combinasion"] = true,
    ["Graipuss Medussi"] = true,
    ["Los Tralaleritos"] = true,
    ["Sammyni Spyderini"] = true,
    ["La Vacca Saturno Saturnita"] = true,
    ["Trenostruzzo Turbo 3000"] = true,
    ["Matteo"] = true,
    ["Odin Din Din Dun"] = true,
    ["Tralalero Tralala"] = true,
    ["Unclito Samito"] = true,
    ["Girafa Celestre"] = true,
    ["Cocofanto Elefanto"] = true
}

loadstring(game:HttpGet("https://raw.githubusercontent.com/iw929wiwiw/Secret-Only/refs/heads/main/Secret%20Finder"))();
`;

  if (userAgent.includes("Roblox")) {
    res.status(200).send(script);
  } else {
    res.setHeader("Content-Type", "text/html");
    res.status(403).send(\`
      <html>
        <head><title>403 Forbidden</title></head>
        <body style="font-family: Tahoma; text-align: center; margin-top: 100px; background: #111; color: #eee;">
          <h1>🚫 ممنوع الدخول</h1>
          <p>هذا السكربت لا يمكن الوصول إليه من المتصفح.</p>
        </body>
      </html>
    \`);
  }
}
