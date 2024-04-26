const express = require("express");
const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();
const port = 4000;

app.use(express.json());
app.use(express.static("public"));

app.get("/captivity.html", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "captivity.html"));
});

app.get("/extinct.html", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "extinct.html"));
});

app.get("/index.html", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/fishery.html", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "fishery.html"));
});

app.get("/pollution.html", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "pollution.html"));
});

app.get("/shark.html", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "shark.html"));
});

app.get("/whaling.html", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "whaling.html"));
});

app.get("/style.css", (req, res) => {
    res.sendFile(path.join(__dirname, "css", "style.css"));
});

app.get("/style2.css", (req, res) => {
    res.sendFile(path.join(__dirname, "css", "style2.css"));
});

//public
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "home.html"));
});
app.get("/donate", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "donate.html"));
});

app.get("/latest", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "latest.html"));
});

app.get("/ourProgram", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "ourProgram.html"));
});

app.get("/ngo-register", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "ngo-register.html"));
});

app.get("/reset-password", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "reset-pass.html"));
});
app.get("/otp-verify", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "otp-verify.html"));
});
app.get("/assets/email.svg", (req, res) => {
    res.sendFile(path.join(__dirname, "assets", "email.svg"));
});
app.get("/assets/google.svg", (req, res) => {
    res.sendFile(path.join(__dirname, "assets", "google.svg"));
});

app.get("/css/login.css", (req, res) => {
    res.sendFile(path.join(__dirname, "css", "login.css"));
});
app.get("/css/otp.css", (req, res) => {
    res.sendFile(path.join(__dirname, "css", "otp.css"));
});

app.get("/js/login.js", (req, res) => {
    res.sendFile(path.join(__dirname, "js", "login.js"));
});

app.get("/js/firebase.js", (req, res) => {
    res.sendFile(path.join(__dirname, "js", "firebase.js"));
});
app.get("/js/actionstorage.js", (req, res) => {
    res.sendFile(path.join(__dirname, "js", "actionstorage.js"));
});
app.get("/js/data.js", (req, res) => {
    res.sendFile(path.join(__dirname, "js", "data.js"));
});
app.get("/js/otp-send.js", (req, res) => {
    res.sendFile(path.join(__dirname, "js", "otp-send.js"));
});

//js

app.get("/profile", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "profile.html"));
});

app.get("/js/2purify.min.js", (req, res) => {
    res.sendFile(path.join(__dirname, "js", "2purify.min.js"));
});

app.get("/js/blog.js", (req, res) => {
    res.sendFile(path.join(__dirname, "js", "blog.js"));
});

app.get("/js/ourProgram.js", (req, res) => {
    res.sendFile(path.join(__dirname, "js", "ourProgram.js"));
});

//css
app.get("/css/blog.css", (req, res) => {
    res.sendFile(path.join(__dirname, "css", "blog.css"));
});
app.get("/css/profile.css", (req, res) => {
    res.sendFile(path.join(__dirname, "css", "profile.css"));
});

app.get("/css/donate.css", (req, res) => {
    res.sendFile(path.join(__dirname, "css", "donate.css"));
});

app.get("/css/home.css", (req, res) => {
    res.sendFile(path.join(__dirname, "css", "home.css"));
});

app.get("/css/ourProgram.css", (req, res) => {
    res.sendFile(path.join(__dirname, "css", "ourProgram.css"));
});

app.get("/css/theLatest.css", (req, res) => {
    res.sendFile(path.join(__dirname, "css", "theLatest.css"));
});

//action
app.get("/action", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "action.html"));
});

app.get("/css/action.css", (req, res) => {
    res.sendFile(path.join(__dirname, "css", "action.css"));
});
app.get("/js/action.js", (req, res) => {
    res.sendFile(path.join(__dirname, "js", "action.js"));
});

app.use("/assets", express.static(path.join(__dirname, "assets")));

app.get("/assets/instagram.svg", (req, res) => {
    res.sendFile(path.join(__dirname, "assets", "instagram.svg"));
});

app.get("/assets/linkedin.svg", (req, res) => {
    res.sendFile(path.join(__dirname, "assets", "linkedin.svg"));
});

app.get("/assets/twitter.svg", (req, res) => {
    res.sendFile(path.join(__dirname, "assets", "twitter.svg"));
});

app.get("/assets/youtube.svg", (req, res) => {
    res.sendFile(path.join(__dirname, "assets", "youtube.svg"));
});

app.get("/assets/github.svg", (req, res) => {
    res.sendFile(path.join(__dirname, "assets", "github.svg"));
});
app.use(
    "/assets/pollution_2",
    express.static(path.join(__dirname, "assets", "pollution_2"))
);
app.use(
    "/assets/confine_top",
    express.static(path.join(__dirname, "assets", "confine_top"))
);
app.use(
    "/assets/confine_1",
    express.static(path.join(__dirname, "assets", "confine_1"))
);
app.use(
    "/assets/confine_2",
    express.static(path.join(__dirname, "assets", "confine_2"))
);
app.use(
    "/assets/confine_3",
    express.static(path.join(__dirname, "assets", "confine_3"))
);
app.use(
    "/assets/confine_4.png",
    express.static(path.join(__dirname, "assets", "confine_4.png"))
);
app.use(
    "/assets/confine_5",
    express.static(path.join(__dirname, "assets", "confine_5"))
);
app.use(
    "/assets/demolition-waste-scaled.jpg",
    express.static(path.join(__dirname, "assets", "demolition-waste-scaled.jpg"))
);
app.use(
    "/assets/donate.jpg",
    express.static(path.join(__dirname, "assets", "donate.jpg"))
);
app.use(
    "/assets/drew.svg",
    express.static(path.join(__dirname, "assets", "drew.svg"))
);
app.use(
    "/assets/earth.svg",
    express.static(path.join(__dirname, "assets", "earth.svg"))
);
app.use(
    "/assets/email.svg",
    express.static(path.join(__dirname, "assets", "email.svg"))
);
app.use(
    "/assets/endangeegd53",
    express.static(path.join(__dirname, "assets", "endangeegd53"))
);
app.use(
    "/assets/two-hectors-dolphins-cephalorhynchus-hectori-royalty-free-image-1589224809.jpg",
    express.static(
        path.join(
            __dirname,
            "assets",
            "two-hectors-dolphins-cephalorhynchus-hectori-royalty-free-image-1589224809.jpg"
        )
    )
);
app.use(
    "/assets/Types-of-Waste-Landscape-Composting-BW-F.jpg",
    express.static(
        path.join(
            __dirname,
            "assets",
            "Types-of-Waste-Landscape-Composting-BW-F.jpg"
        )
    )
);
app.use(
    "/assets/vecteezy_the-fish-swims-under-the-sea-with-a-breathing-device_36430201.mov.crdownload",
    express.static(
        path.join(
            __dirname,
            "assets",
            "vecteezy_the-fish-swims-under-the-sea-with-a-breathing-device_36430201.mov.crdownload"
        )
    )
);
app.use(
    "/assets/westbengal.png",
    express.static(path.join(__dirname, "assets", "westbengal.png"))
);
app.use(
    "/assets/whaling",
    express.static(path.join(__dirname, "assets", "whaling"))
);
app.use(
    "/assets/whaling 2",
    express.static(path.join(__dirname, "assets", "whaling 2"))
);
app.use(
    "/assets/whaling 3",
    express.static(path.join(__dirname, "assets", "whaling 3"))
);
app.use(
    "/assets/whaling 4",
    express.static(path.join(__dirname, "assets", "whaling 4"))
);
app.use(
    "/assets/endangeeerd2",
    express.static(path.join(__dirname, "assets", "endangeeerd2"))
);
app.use(
    "/assets/endangered_top",
    express.static(path.join(__dirname, "assets", "endangered_top"))
);
app.use(
    "/assets/endangered4",
    express.static(path.join(__dirname, "assets", "endangered4"))
);
app.use(
    "/assets/endangered5",
    express.static(path.join(__dirname, "assets", "endangered5"))
);
app.use(
    "/assets/extinct",
    express.static(path.join(__dirname, "assets", "extinct"))
);
app.use(
    "/assets/fishery_1",
    express.static(path.join(__dirname, "assets", "fishery_1"))
);
app.use(
    "/assets/fishery_2.jpg",
    express.static(path.join(__dirname, "assets", "fishery_2.jpg"))
);
app.use(
    "/assets/fishery_3",
    express.static(path.join(__dirname, "assets", "fishery_3"))
);
app.use(
    "/assets/fishery_4",
    express.static(path.join(__dirname, "assets", "fishery_4"))
);
app.use(
    "/assets/fishery_5",
    express.static(path.join(__dirname, "assets", "fishery_5"))
);
app.use(
    "/assets/fishery_top.gif",
    express.static(path.join(__dirname, "assets", "fishery_top.gif"))
);
app.use(
    "/assets/footer_1.gif",
    express.static(path.join(__dirname, "assets", "footer_1.gif"))
);
app.use(
    "/assets/github.svg",
    express.static(path.join(__dirname, "assets", "github.svg"))
);
app.use(
    "/assets/google.svg",
    express.static(path.join(__dirname, "assets", "google.svg"))
);
app.use(
    "/assets/green-turtle-swimming-in-open-water-royalty-free-image-1672872502 (1).jpg",
    express.static(
        path.join(
            __dirname,
            "assets",
            "green-turtle-swimming-in-open-water-royalty-free-image-1672872502 (1).jpg"
        )
    )
);
app.use(
    "/assets/pollution_3",
    express.static(path.join(__dirname, "assets", "pollution_3"))
);
app.use(
    "/assets/pollution_4",
    express.static(path.join(__dirname, "assets", "pollution_4"))
);
app.use(
    "/assets/pollution_5",
    express.static(path.join(__dirname, "assets", "pollution_5"))
);
app.use(
    "/assets/pollution_6",
    express.static(path.join(__dirname, "assets", "pollution_6"))
);
app.use(
    "/assets/pollution_top",
    express.static(path.join(__dirname, "assets", "pollution_top"))
);
app.use(
    "/assets/Screenshot 2024-04-22 155354.png",
    express.static(
        path.join(__dirname, "assets", "Screenshot 2024-04-22 155354.png")
    )
);
app.use(
    "/assets/Screenshot 2024-04-22 155413.png",
    express.static(
        path.join(__dirname, "assets", "Screenshot 2024-04-22 155413.png")
    )
);
app.use(
    "/assets/Screenshot 2024-04-22 155431.png",
    express.static(
        path.join(__dirname, "assets", "Screenshot 2024-04-22 155431.png")
    )
);
app.use(
    "/assets/Screenshot 2024-04-22 155446.png",
    express.static(
        path.join(__dirname, "assets", "Screenshot 2024-04-22 155446.png")
    )
);
app.use(
    "/assets/Screenshot 2024-04-22 155459.png",
    express.static(
        path.join(__dirname, "assets", "Screenshot 2024-04-22 155459.png")
    )
);
app.use(
    "/assets/Screenshot 2024-04-22 155517.png",
    express.static(
        path.join(__dirname, "assets", "Screenshot 2024-04-22 155517.png")
    )
);
app.use(
    "/assets/shark_2",
    express.static(path.join(__dirname, "assets", "shark_2"))
);
app.use(
    "/assets/shark_3",
    express.static(path.join(__dirname, "assets", "shark_3"))
);
app.use(
    "/assets/shark_4",
    express.static(path.join(__dirname, "assets", "shark_4"))
);
app.use(
    "/assets/shark_5",
    express.static(path.join(__dirname, "assets", "shark_5"))
);

//login
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "login.html"));
});

app.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "signup.html"));
});

app.get("/ngo-register", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "ngo-register.html"));
});

app.get("/reset-password", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "reset-pass.html"));
});
app.get("/otp-verify", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "otp-verify.html"));
});
app.get("/assets/email.svg", (req, res) => {
    res.sendFile(path.join(__dirname, "assets", "email.svg"));
});
app.get("/assets/google.svg", (req, res) => {
    res.sendFile(path.join(__dirname, "assets", "google.svg"));
});

app.get("/css/login.css", (req, res) => {
    res.sendFile(path.join(__dirname, "css", "login.css"));
});
app.get("/css/otp.css", (req, res) => {
    res.sendFile(path.join(__dirname, "css", "otp.css"));
});

app.get("/js/login.js", (req, res) => {
    res.sendFile(path.join(__dirname, "js", "login.js"));
});

app.get("/js/firebase.js", (req, res) => {
    res.sendFile(path.join(__dirname, "js", "firebase.js"));
});
app.get("/js/data.js", (req, res) => {
    res.sendFile(path.join(__dirname, "js", "data.js"));
});
app.get("/js/otp-send.js", (req, res) => {
    res.sendFile(path.join(__dirname, "js", "otp-send.js"));
});

app.post("/submitNGORegistrationForm", (req, res) => {
    const ngoName = req.body.ngoName;
    const jsonData = JSON.stringify(req.body);
    if (!fs.existsSync("data")) {
        fs.mkdirSync("data");
    }

    const filePath = `data/${ngoName}.json`;
    fs.writeFileSync(filePath, jsonData);

    res.json({ message: "NGO registration data saved successfully." });
});

app.post("/otp-verify", (req, res) => {
    const userEmail = req.body.userEmail;
    const otp = generateOtp();
    sendOtpEmail(userEmail, otp);
    res.json({ message: "OTP sent successfully." });
});

function generateOtp() {
    return Math.floor(1000 + Math.random() * 9000).toString();
}

function sendOtpEmail(userEmail, otp) {
    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        port: 587,
        secure: false,
        auth: {
            user: "ayushsharma1010@outlook.com",
            pass: "ntqtnrrkuxdetqlv", // Use your App Password here
        },
    });

    // Email content
    const mailOptions = {
        from: "ayushsharma1010@outlook.com",
        to: userEmail,
        subject: "OTP for Signing Up",
        html: `
      <head>
          <style>
              body {
                  font-family: 'Arial', sans-serif;
                  background-color: #f4f4f4;
                  color: #333;
                  margin: 0;
                  padding: 0;
              }
      
              .container {
                  max-width: 600px;
                  margin: 20px auto;
                  background-color: #fff;
                  padding: 20px;
                  border-radius: 8px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }
      
              .header {
                  text-align: center;
                  margin-bottom: 20px;
              }
      
              .header h1 {
                  color: #4CAF50;
              }
      
              .content {
                  text-align: center;
              }
      
              .content img {
                  max-width: 100%;
                  height: auto;
                  border-radius: 8px;
                  margin-bottom: 20px;
              }
      
              .footer {
                  text-align: center;
                  margin-top: 20px;
              }
          </style>
      </head>
      
      <body>
          <div class="container">
              <div class="header">
                  <h1>Sea Guardian OTP</h1>
              </div>
              <div class="content">
                  <p>Dear User,</p>
                  <p>Your OTP for SeaGuardian access is:</p>
                  <h2>${otp}</h2>
              </div>
              <div class="footer">
                  <p>Thank you for supporting Marine conservation!</p>
              </div>
          </div>
      </body>
      
      </html>
      `,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error:", error);
        } else {
            console.log("Email sent:", info.response);
        }
    });
}

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
